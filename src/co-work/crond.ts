import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';
import { Singleton } from '@gongt/silly-b/dist/class/singleton-class';

const crond = require('node-cron') as any;

const debug = createLogger(LOG_LEVEL.SILLY, 'crond');

/**
 * CRON:
 ┌────────────── second (optional)
 │ ┌──────────── minute
 │ │ ┌────────── hour
 │ │ │ ┌──────── day of month
 │ │ │ │ ┌────── month
 │ │ │ │ │ ┌──── day of week
 │ │ │ │ │ │
 │ │ │ │ │ │
 1  2  3   4  5  6
 */
@Singleton()
export class CronDaemon {
	private taskList: Map<string, any> = new Map;
	
	constructor() {
	}
	
	cancelJob(jobName: string) {
		if (!this.hasJob(jobName)) {
			return false;
		}
		const task = this.taskList.get(jobName);
		task.destroy();
		return true;
	}
	
	hasJob(jobName: string): boolean {
		return this.taskList.has(jobName);
	}
	
	jobList(): string[] {
		return [...this.taskList.keys()];
	}
	
	/**
	 *
	 * @param {string} jobName
	 * @param {string} cron
	 * @param {Function} callback
	 */
	registerJob(jobName: string, cron: string, callback: Function) {
		if (!crond.validate(cron)) {
			throw new TypeError(`job "${jobName}" is invalid: ${cron}`);
		}
		const task = crond.schedule(cron, function () {
			debug('cron job %s started', jobName);
			callback();
		});
		this.taskList.set(jobName, task);
	}
}
