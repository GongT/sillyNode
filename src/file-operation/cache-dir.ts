import { CronDaemon } from '../co-work/crond';
import { resolve } from 'path';
import { tmpdir } from 'os';
import { ensureDirSync, unlink } from 'fs-extra';
import { FolderWalker } from './folder-walk';
import { Stats } from 'fs';
import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';

const warn = createLogger(LOG_LEVEL.WARN, 'cache-dir');
const debug = createLogger(LOG_LEVEL.DEBUG, 'cache-dir');

const baseTempDir = resolve(tmpdir(), 'stl-cache-dir');
export const CLEAR_CACHE_JOB = 'clear-temp-dir';

export class CacheDir {
	protected static jobRegistered = false;
	protected baseDir: string;
	
	constructor(fileType: string) {
		this.baseDir = resolve(baseTempDir, fileType);
		
		ensureDirSync(this.baseDir);
		
		if (!CacheDir.jobRegistered) {
			CacheDir.jobRegistered = true;
			const crond = new CronDaemon();
			crond.registerJob(CLEAR_CACHE_JOB, '0 0 * * * *', this.deleteAllOutDate.bind(this));
		}
	}
	
	getRandom(ext: string = '') {
		const random = (Math.random() * 100000).toFixed(0);
		return resolve(this.baseDir, random + (ext? '.' + ext : ''));
	}
	
	private deleteAllOutDate() {
		const walker = new FolderWalker();
		walker.on('file', async (path: string, stat: Stats) => {
			const d = new Date;
			d.setMinutes(d.getMinutes() - 90);
			if (stat.mtime < d) {
				try {
					debug('delete: ' + path);
					await unlink(path);
				} catch (e) {
					warn('delete fail: %s - %s', path, e.message);
				}
			}
		});
		walker.walk(this.baseDir).catch((e) => {
			warn('walk fail: %s', e.message);
		});
	}
}

