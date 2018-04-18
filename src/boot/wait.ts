import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';

export type Callback = (err: Error) => void;

const debug = createLogger(LOG_LEVEL.DEBUG, 'wait');
const notice = createLogger(LOG_LEVEL.NOTICE, 'wait');

export interface IWaiter {
	waiting?: string[];
	
	(title: string, promise: PromiseLike<any>): void;
}

export function createWaiter(cb: Callback): IWaiter {
	let count = 0;
	const waitting: string[] = [];
	
	let t2: NodeJS.Timer;
	const t1 = setTimeout(() => {
		notice('something slow');
		t2 = setInterval(() => {
			notice('still waiting (last %s [%s]): %s', count, waitting.length, waitting.join(', '));
		}, 2000);
	}, 8000);
	
	function noDebug() {
		clearTimeout(t1);
		if (t2) {
			clearInterval(t2);
		}
	}
	
	function pop(title: string) {
		const i = waitting.indexOf(title);
		if (i !== -1) {
			waitting.splice(i, 1);
		}
	}
	
	const ret: any = (title: string, promise: Promise<void>) => {
		debug('waiting %s to finish', title);
		if (!title) {
			throw new Error('can not wait a empty thing.');
		}
		if (waitting.indexOf(title) !== -1) {
			throw new Error('wait ' + title + ' twice.');
		}
		
		count++;
		waitting.push(title);
		setImmediate(() => {
			promise.then(() => {
				count--;
				pop(title);
				debug('%s success [last %s]', title, count);
				if (count === 0) {
					debug('all finish');
					noDebug();
					cb(null);
				}
			}, (err) => {
				debug('%s fail', title);
				noDebug();
				cb(err || new Error('unknown error'));
			});
		});
	};
	
	ret.waiting = waitting;
	
	return ret;
}
