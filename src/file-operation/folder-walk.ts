import { access, lstat, readdir, readlink, Stats } from 'fs-extra';
import { EventEmitter } from 'events';
import { resolve } from 'path';

// const log = createLogger(LOG_LEVEL.SILLY, 'file-walk');

export interface WalkOptions {
	dereference: boolean;
}

export interface FolderWalkerEvent {
	on(event: 'dir', callback: (dir: string, stat: Stats) => void): this;
	
	on(event: 'file', callback: (dir: string, stat: Stats) => void): this;
	
	on(event: 'link', callback: (dir: string, stat: Stats) => void): this;
}

export class FolderWalker extends EventEmitter implements FolderWalkerEvent {
	private callback: (err: Error) => void;
	private callbackCounter = 0;
	protected options: WalkOptions;
	
	constructor(options?: Partial<WalkOptions>) {
		super();
		this.options = Object.assign({
			dereference: false,
		}, options);
	}
	
	walk(baseDir: string) {
		if (this.callback) {
			throw new Error('FolderWalker is busy.');
		}
		// log('start walk: ', baseDir);
		const p = new Promise((resolve, reject) => {
			this.callbackCounter = 0;
			this.callback = (err: Error) => err? reject(err) : resolve();
			this.visit(baseDir, '.').catch((e) => {
				reject(e);
			});
		});
		p.then(() => {
			// log('complete walk: ', baseDir);
			this.callbackCounter = null;
			this.callback = null;
		}, () => {
			// log('fail walk: ', baseDir);
			this.callbackCounter = null;
			this.callback = null;
		});
		return p;
	}
	
	protected async visit(dir: string, item: string) {
		if (!this.callback) {
			return;
		}
		const file = resolve(dir, item);
		// log('visit: ', file);
		const stat = await lstat(file);
		if (stat.isDirectory()) {
			// log('   is dir: ', item);
			this.emit('dir', file, stat);
			this.wait(this.visitDir(file));
		} else if (stat.isSymbolicLink()) {
			// log('   is link: ', item);
			this.emit('link', file, stat);
			if (this.options.dereference) {
				const target = await readlink(file);
				if (await access(target)) {
					this.wait(this.visitDir(file));
				}
			}
		} else {
			// log('   is file: ', item);
			this.emit('file', file, stat);
		}
	}
	
	protected async visitDir(dir: string) {
		const content = await readdir(dir);
		for (const item of content) {
			this.wait(this.visit(dir, item));
		}
	}
	
	protected wait(p: Promise<void>) {
		if (!this.callback) {
			return;
		}
		this.callbackCounter++;
		// log('wait++ = ', this.callbackCounter);
		p.then(() => {
			if (!this.callback) {
				return;
			}
			this.callbackCounter--;
			// log('wait-- = ', this.callbackCounter);
			if (this.callbackCounter === 0) {
				this.callback(null);
			}
		}, (err) => {
			if (!this.callback) {
				return;
			}
			// log('wait = %s', err.message);
			this.callback(err);
		});
	}
}
