import { createWaiter, IWaiter } from '@gongt/silly-b/dist/async/wait';

declare const global: any;

export interface IClosablePromise {
	close(): void|PromiseLike<void>;
}

export interface IClosableCallback {
	close(callback: Function): void;
}

const closableRegistrySymbol = Symbol.for('@gongt/silly:closableRegistryMap');
if (!global[closableRegistrySymbol]) {
	global[closableRegistrySymbol] = new Map();
}
export const closableRegistry: Map<string, IClosablePromise> = global[closableRegistrySymbol];

function shutdownTimeout() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error('shutdown timeout'));
		}, 15000); // 15s before kill
	});
}

let isClosing = false;

export async function closeAll() {
	isClosing = true;
	let errorCount = 0;
	
	let wait: IWaiter;
	const pp = new Promise((resolve, reject) => {
		const wrappedCallback = (err: Error) => err? reject(err) : resolve();
		wait = createWaiter(wrappedCallback);
	});
	
	for (const [key, closer] of [...closableRegistry.entries()]) {
		let p: PromiseLike<void>;
		try {
			p = closer.close() || Promise.resolve();
		} catch (e) {
			p = Promise.reject(e);
		}
		wait('close ' + key, p);
		p.then(undefined, () => {
			errorCount++;
		});
	}
	
	wait.over();
	
	await pp;
	return errorCount;
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
	if (isClosing) {
		throw new Error('shutting down, can not register new worker.');
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
