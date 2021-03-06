import { createLogger } from '../../../sillyB/dist/debug/create-logger';
import { LOG_LEVEL } from '../../../sillyB/dist/debug/levels';

let sd: any;

export function loadSystemdSubsystem() {
	sd = require('systemd-daemon');
}

const debug = createLogger(LOG_LEVEL.INFO, 'daemon-notify');
const error = createLogger(LOG_LEVEL.ERROR, 'daemon-notify');

export function NotifyInitStatus(str: string) {
	sd.notify('STATUS=' + str);
}

let statusIsComplete = false;
let statusIsFailed = false;

export function NotifyInitCompleteEvent() {
	if (statusIsFailed) {
		error('call notify complete after init failed');
		InitFailQuit();
	}
	if (statusIsComplete) {
		error('call notify complete multiple times');
	}
	statusIsComplete = true;
	try {
		sd.watchdog.start();
		sd.notify('READY=1');
		sd.notify('MAINPID=' + process.pid);
		debug('>>>\x1B[38;5;10mnotify success\x1B[0m<<<');
	} catch (e) {
		error(e.stack);
		InitFailQuit();
	}
}

export function NotifyInitErrorEvent() {
	if (statusIsFailed) {
		error('call notify fail multiple times');
	}
	if (statusIsComplete) {
		InitFailQuit();
	}
	statusIsFailed = true;
	error('>>>\x1B[38;5;9mnotify fail\x1B[0m<<<');
}

export function InitFailQuit(e?: any) {
	error('InitFailQuit(%s);', e? e : 'void');
	if (e && e.stack) {
		debug('\r\x1B[2m%s\x1B[0m', e.stack);
	}
	process.exit(101);
}

process.on('uncaughtException', InitFailQuit);
