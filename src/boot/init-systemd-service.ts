import {InitFailQuit, NotifyInitCompleteEvent, NotifyInitErrorEvent} from "./service-control";
import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';

const error = createLogger(LOG_LEVEL.ERROR, 'init');

export function initServiceWait(p: Promise<any>) {
	p.then(NotifyInitCompleteEvent).catch((e) => {
		NotifyInitErrorEvent();
		error(e.stack || e.message || e);
		InitFailQuit();
	});
}
