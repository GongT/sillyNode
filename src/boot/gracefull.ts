import { QueueWait } from '@gongt/silly-b/dist/async/queue-wait';

declare const global: any;

export interface IClosablePromise {
	close(): void|PromiseLike<void>;
}

export interface IClosableCallback {
	close(callback: Function): void;
}

const closableRegistrySymbol = Symbol.for('@gongt/ts-stl:closableRegistryMap');
if (!global[closableRegistrySymbol]) {
	global[closableRegistrySymbol] = new Map();
}
const closableRegistry: Map<string, IClosablePromise> = global[closableRegistrySymbol];

function shutdownTimeout() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error('shutdown timeout'));
		}, 50000); // 50s before kill
	});
}

export function globalWorkingCallback(id: string, object: IClosableCallback) {
	const originalClose = object.close;
	object.close = function (this: any, func: Function) {
		return new Promise((resolve, reject) => {
			const wrappedCallback = (err: Error, data: any) => err? reject(err) : resolve(data);
			
			originalClose.call(this, (err: Error, data: any) => {
				wrappedCallback(err, data);
				if (func) {
					func(err, data);
				}
			});
		});
	};
	globalWorking(id, object as IClosablePromise);
}

export function globalWorking(id: string, object: IClosablePromise) {
	if (closableRegistry.has(id)) {
		throw new Error('closable object ' + id + ' already registered.');
	}
	const originalClose = object.close;
	object.close = function (this: any, ...args: any[]) {
		closableRegistry.delete(id);
		return Promise.race([
			originalClose.apply(this, args),
			shutdownTimeout(),
		]);
	};
	closableRegistry.set(id, object);
}

export async function graceFullExit(ret = 0): Promise<never> {
	process.Terminate('manual call');
	process.exit(ret);
	throw new Error('impossible');
}

let exitCalled = false;
// do something when app is closing
if (!process.Terminate) {
	class ProcessExit extends Error {
		public readonly processExit = true;
	}
	
	const originalExit = process.exit;
	console.error('process.exit() patched.');
	process.exit = function (code?: number): never {
		if (exitCalled) {
			originalExit();
		} else {
			doExit('process.exit call');
		}
		console.trace('process.exit() call with:', ...Array.prototype.slice.call(arguments));
		throw new ProcessExit('process.exit(' + code + ') call');
	};
	process.on('exit', (code) => {
		console.error(`process.exit(${code}) has called.`);
		if (!exitCalled) {
			let codes = '';
			if (code) {
				codes = code.toFixed();
			}
			console.error(`
##################################################
#                   WARNING                      #
##################################################
#                                                #
# %syou have called process.exit(%s) somewhere,  #
#     that will cause unsaved data lost, use     #
#              graceFullExit();                  #
#                 instead.                       #
#                                                #
##################################################
`, new Array(4 - codes.length).fill(' ').join(''), codes);
		}
	});
	
	//catches ctrl+c event
	process.on('SIGINT', doExit.bind(undefined, 'SIGINT'));
	process.on('SIGTERM', doExit.bind(undefined, 'SIGTERM'));
	process.on('beforeExit', doExit.bind(undefined, 'beforeExit'));
	
	// catches "kill pid" (for example: nodemon restart)
	process.on('SIGUSR1', doExit.bind(undefined, 'SIGUSR1'));
	process.on('SIGUSR2', doExit.bind(undefined, 'SIGUSR2'));
	
	// catches uncaught exceptions
	process.on('uncaughtException', doExit.bind(undefined, 'uncaughtException'));
	
	process.Terminate = doExit;
	
	function doExit(why: string) {
		console.log('will exit because %s.', why);
		if (exitCalled) {
			console.log('    handler already called.');
			return;
		}
		exitCalled = true;
		let ret = 0;
		
		const wait = new QueueWait('exitQueue');
		
		for (const [key, closer] of [...closableRegistry.entries()]) {
			console.log('closing %s...', key);
			const p = closer.close();
			if (p && p.then) {
				wait.push();
				p.then(() => {
					wait.pop();
					console.log('closed %s !!!', key);
				}, (e) => {
					wait.pop();
					ret++;
					console.error('exception when closing %s:\n%s', key, e.stack);
				});
			}
		}
		wait.lock();
		
		wait.wait().then(() => {
			console.log('will terminate process with code: %s.', ret);
			setImmediate(() => {
				originalExit(ret);
			});
		}, (err) => {
			// error will never occur
			console.log('will terminate process with error:\n%s', err.stack);
			setImmediate(() => {
				originalExit(err.code || 1);
			});
		});
	}
}
