import { platform } from 'os';
import { readFileSync } from 'fs';

let __isMeInDocker: boolean = null;

export function isMeInDocker(): boolean {
	// https://stackoverflow.com/questions/20010199/determining-if-a-process-runs-inside-lxc-docker/20010626
	
	if (platform() !== 'linux') {
		return false;
	}
	if (__isMeInDocker === null) {
		__isMeInDocker = readFileSync('/proc/1/cgroup').indexOf('/docker/') !== -1;
	}
	return __isMeInDocker;
}

let __isMeInNamespace: boolean = null;

export function isMeInNamespace(): boolean {
	if (platform() !== 'linux') {
		return false;
	}
	if (__isMeInNamespace === null) {
		__isMeInNamespace = readFileSync('/proc/1/cgroup').indexOf('pids:/init.scope') !== -1;
	}
	return __isMeInNamespace;
}

export function isMeImmutable() {
	return isMeInDocker();
}
