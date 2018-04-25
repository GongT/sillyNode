///<reference path="../vendor.d.ts"/>

import { stringNotFoundError, tryLoad } from './loader.try';

export class BootLoader {
	private bootFiles: string[];
	private registerList: {module: string; required: boolean;}[];
	
	constructor() {
		this.bootFiles = [];
		this.registerList = [];
	}
	
	boot() {
		/* clean screen when debug */
		if (global.mainApplication.stdoutTerminal && !global.mainApplication.immutableSystem) {
			process.stdout.write('\x1Bc');
		}
		
		for (const {module, required} of this.registerList) {
			const loaded = tryLoad(module);
			
			if (required && !loaded) {
				console.error('\x1B[38;5;11mWarn\x1B[0m: optional register not found: \x1B[38;5;14m%s\x1B[0m', module);
			}
		}
		this.bootFiles.forEach((file) => {
			const error = tryLoad(file);
			if (error) {
				const module = stringNotFoundError(error);
				throw new Error(`Cannot boot application: module ${module || file} is not found anywhere.`);
			}
		});
	}
	
	bootSequence(loaderFile: string) {
		this.bootFiles.push(loaderFile);
	}
	
	register(module: string, required: boolean = true) {
		this.registerList.push({module, required});
	}
}
