import { FSWatcher, WatchOptions } from 'chokidar';
import { Stats } from 'fs';
import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';
import { RegexpFinder, SimpleArrayRegistry } from '@gongt/silly-b/dist/object/simple-array-registry';

const globToRegExp = require('glob-to-regexp');

const debug = createLogger(LOG_LEVEL.SILLY, 'watcher');
const info = createLogger(LOG_LEVEL.INFO, 'watcher');

export type Fn = (path: string) => void;
export type FileEvents = 'add'|'change'|'unlink'|'addDir'|'unlinkDir'|'error'|'ready';
const AllFileEvents: FileEvents[] = ['add', 'change', 'unlink', 'addDir', 'unlinkDir', 'error', 'ready'];
export type EventRegistry = Map<FileEvents, Fn[]>;

function commonDebug(type: string): Fn {
	return (path: string) => {
		debug('file %s: %s', type, path);
	};
}

function noArgDebug(type: string): Fn {
	return () => {
		debug('file %s!', type);
	};
}

const debugRegistry = {
	add: commonDebug('add'),
	change: commonDebug('change'),
	unlink: commonDebug('unlink'),
	addDir: commonDebug('addDir'),
	unlinkDir: commonDebug('unlinkDir'),
	error: commonDebug('error'),
	ready: noArgDebug('ready'),
};

export class FileWatcher {
	private static FSWatcher: FSWatcher;
	protected eventHandlers: EventRegistry;
	protected ignoreList: SimpleArrayRegistry<RegExp>;
	protected opts: WatchOptions;
	protected originalIgnore: boolean;
	protected pathList: SimpleArrayRegistry;
	protected watcher: FSWatcher;
	
	constructor(opts: WatchOptions) {
		if (!FileWatcher.FSWatcher) {
			FileWatcher.FSWatcher = require('chokidar').FSWatcher;
		}
		this.eventHandlers = new Map();
		for (const event of AllFileEvents) {
			this.eventHandlers.set(event, []);
		}
		
		if (opts.ignored) {
			if (typeof opts.ignored) {
				this.ignore(opts.ignored);
			} else {
				throw TypeError('FileWatcher({ignored}) is not a RegExp.');
			}
		}
		
		this.opts = Object.assign({
			ignoreInitial: true,
			followSymlinks: true,
			persistent: true,
			disableGlobbing: false,
			atomic: true,
		}, opts, {
			ignored: this.handleIgnore.bind(this),
		});
		this.originalIgnore = this.opts.ignoreInitial;
		
		this.pathList = new SimpleArrayRegistry;
		this.ignoreList = new SimpleArrayRegistry(RegexpFinder);
		
		debug('create FileWatcher(%j)', this.opts);
	}
	
	addEventListener(event: FileEvents, fn: Fn) {
		const list = this.eventHandlers.get(event);
		if (!list) {
			throw new TypeError('unknown event type: ' + event + '\n    available: ' + AllFileEvents.join(', '));
		}
		if (this.watcher) {
			this.realAddListener(event, fn);
		}
		list.push(fn);
	}
	
	/* ignore */
	ignore(...paths: RegExp[]) {
		const realAdd = this.ignoreList.addAll(paths);
		debug('ignore file:\n + %s', realAdd.join('\n + '));
	}
	
	ignoreGlob(...globs: string[]) {
		this.ignore(...globs.map((s) => {
			return globToRegExp(s, {globstar: true});
		}));
	}
	
	isWatching(): boolean {
		return !!this.watcher;
	}
	
	/** @deprecated */
	onChange(d: Fn) {
		this.addEventListener('change', d);
	}
	
	removeAllListeners(event: FileEvents) {
		debug('remove all listeners for %s', event);
		this.watcher.removeAllListeners(event);
		this.eventHandlers.set(event, []);
	}
	
	removeEventListener(event: FileEvents, fn: Fn) {
		const list = this.eventHandlers.get(event);
		if (!list) {
			throw new TypeError('unknown event type: ' + event + '\n    available: ' + AllFileEvents.join(', '));
		}
		const found = list.indexOf(fn);
		if (found === -1) {
			return;
		}
		debug('remove listener for %s: %s', event, fn.name || '{anonymous}');
		list.splice(found, 1);
		
		if (this.watcher) {
			if (list.length === 0) {
				this.watcher.removeAllListeners(event);
			} else {
				this.watcher.removeListener(event, fn);
			}
		}
	}
	
	startWatching() {
		if (!this.watcher) {
			info('create file watcher, start watching.');
			this.watcher = new FSWatcher(this.opts);
			this.opts.ignoreInitial = true;
			for (const [event, handlers] of this.eventHandlers.entries()) {
				if (handlers.length === 0) {
					continue;
				}
				for (const fn of handlers) {
					this.realAddListener(event, fn);
				}
			}
			this.watcher.add(this.pathList.toArray());
		}
	}
	
	public stopWatching() {
		this.opts.ignoreInitial = this.originalIgnore;
		this._stopWatching();
	}
	
	unignore(...paths: RegExp[]) {
		const realRemove = this.ignoreList.removeAll(paths);
		debug('un-ignore file:\n - %s', realRemove.join('\n - '));
	}
	
	unignoreGlob(...globs: string[]) {
		this.unignore(...globs.map((s) => {
			return globToRegExp(s, {globstar: true});
		}));
	}
	
	unwatch(...paths: string[]) {
		const realRemove = this.pathList.removeAll(paths);
		debug('unwatch file:\n - %s', realRemove.join('\n - '));
		if (realRemove.length && this.isWatching()) {
			this.watcher.unwatch(realRemove);
		}
	}
	
	/* add and remove */
	watch(...paths: string[]) {
		const realAdd = this.pathList.addAll(paths);
		debug('watch file:\n + %s', realAdd.join('\n + '));
		if (realAdd.length && this.isWatching()) {
			this.watcher.add(realAdd);
		}
	}
	
	protected _stopWatching() {
		if (this.watcher) {
			info('destroy file watcher.');
			this.watcher.close();
			this.watcher = null;
		}
	}
	
	protected handleIgnore(path: string, stat?: Stats) {
		for (const reg of this.ignoreList) {
			console.log('%s test %s', reg, path);
			if (reg.test(path)) {
				console.log('%s cause %s ignored', reg, path);
				return true;
			}
		}
	}
	
	private realAddListener(event: FileEvents, fn: Fn) {
		if (this.watcher.listenerCount(event) === 0) {
			debug('add debug listener for %s', event);
			this.watcher.on(event, debugRegistry[event]);
		}
		debug('add listener for %s: %s', event, fn.name || '{anonymous}');
		this.watcher.on(event, fn);
	}
	
	protected restart() {
		if (this.isWatching()) {
			this._stopWatching();
		}
		this.startWatching();
	}
	
	protected updateOptions() {
		this.opts.ignoreInitial = true;
		if (this.isWatching()) {
			this._stopWatching();
			this.startWatching();
		}
	}
}
