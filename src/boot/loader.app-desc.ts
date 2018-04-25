///<reference path="../vendor.d.ts"/>

import { detectDebugMode } from '../detectors/debug-mode';
import { isMeImmutable } from '../detectors/detect-vm';
import { isStdoutTerminal } from '../detectors/stdout';
import { getProjectName } from '../detectors/project-name';
import { getAppRoot } from '../detectors/app-root';
import { detectSupervisor } from '../detectors/detect-supervisor';

export interface Callback<Ret> {
	(): Ret;
}

Object.defineProperty(global, 'mainApplication', {
	get() {
		throw new Error('Must create a AppDescriptor and run .register() before any other code.');
	},
	configurable: true,
	enumerable: false,
});

export class AppDescriptor {
	private _applicationName: Callback<string> = getProjectName;
	private _immutableSystem: Callback<boolean> = isMeImmutable;
	private _isDebugMode: Callback<boolean> = detectDebugMode;
	private _rootPath: Callback<string> = getAppRoot;
	private _stdoutTerminal: Callback<boolean> = isStdoutTerminal;
	private _supervisor: Callback<string> = detectSupervisor;
	
	applicationName(name: Callback<string>) {
		this._applicationName = name;
	}
	
	immutableSystem(immutable: Callback<boolean>) {
		this._immutableSystem = immutable;
	}
	
	isDebugMode(debug: Callback<boolean>) {
		this._isDebugMode = debug;
	}
	
	register() {
		delete (global as any).mainApplication;
		Object.defineProperty(global, 'mainApplication', {
			value: this.toJSON(),
			configurable: false,
			enumerable: true,
			writable: false,
		});
	}
	
	rootPath(root: Callback<string>) {
		this._rootPath = root;
	}
	
	stdoutTerminal(detect: Callback<boolean>) {
		this._stdoutTerminal = detect;
	}
	
	supervisor(supervisor: Callback<string>) {
		this._supervisor = supervisor;
	}
	
	toJSON(): IAppDesc {
		return {
			applicationName: this._applicationName(),
			immutableSystem: this._immutableSystem(),
			isDebugMode: this._isDebugMode(),
			stdoutTerminal: this._stdoutTerminal(),
			rootPath: this._rootPath(),
			supervisor: this._supervisor(),
		};
	}
}
