import { InitFailQuit, loadSystemdSubsystem, NotifyInitCompleteEvent, NotifyInitErrorEvent } from '../../systemd/service-control';
import { createLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';
import { waitAppStart } from '@gongt/silly-b/dist/async/boot';

const error = createLogger(LOG_LEVEL.ERROR, 'init');

if (global.mainApplication.supervisor === 'systemd') {
	loadSystemdSubsystem();
	waitAppStart().then(NotifyInitCompleteEvent).catch((e: Error) => {
		NotifyInitErrorEvent();
		error('%s', e.stack || e.message || e);
		InitFailQuit();
	});
}
