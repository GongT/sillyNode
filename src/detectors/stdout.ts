import { isMeInDocker } from './detect-vm';

let colorEnabled: boolean = null;

export function isColorEnabled(): boolean {
	if (colorEnabled === null) {
		if (isMeInDocker() === true) {
			colorEnabled = false;
		} else {
			colorEnabled = process.stderr.isTTY || false;
		}
	}
	return colorEnabled;
}

export function isStdoutTerminal(): boolean {
	if (colorEnabled === null) {
		if (isMeInDocker() === true) {
			colorEnabled = false;
		} else {
			colorEnabled = process.stdout.isTTY || false;
		}
	}
	return colorEnabled;
}

export function isStdinTerminal(): boolean {
	if (colorEnabled === null) {
		if (isMeInDocker() === true) {
			colorEnabled = false;
		} else {
			colorEnabled = process.stdin.isTTY || false;
		}
	}
	return colorEnabled;
}
