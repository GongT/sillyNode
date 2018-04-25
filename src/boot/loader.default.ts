import { BootLoader } from './loader';

export function defaultApplication(bl: BootLoader) {
	bl.register('source-map-support/register', false);
	bl.bootSequence('preset/log-who-am-i');
	bl.bootSequence('preset/nodejs-config');
	bl.bootSequence('preset/auto-logger-level');
	bl.bootSequence('preset/boot-debug');
	bl.bootSequence('gracefull.register');
	bl.bootSequence('preset/nameserver-filter');
	bl.bootSequence('preset/main-file');
	bl.bootSequence('preset/notify-systemd');
}
