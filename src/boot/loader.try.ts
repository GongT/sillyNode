import { topModule } from '../internal/top-module';
import { resolve } from 'path';

const abs = /^\//;

/** @internal */
export function tryLoad(file: string) {
	console.error(`\x1B[2mload: %s\x1B[0m`, file);
	
	let lastErr: string;
	
	if (abs.test(file)) {
		try {
			require(file);
			return;
		} catch (e) {
			return ignoreModuleNotFound(e);
		}
	}
	try {
		topModule().require(file);
		return;
	} catch (e) {
		lastErr = ignoreModuleNotFound(e);
	}
	
	const loadingPaths = [
		__dirname,
		resolve(__dirname, '..'),
		process.cwd(),
		resolve(process.cwd(), 'dist'),
	];
	const appRoot = global.mainApplication.rootPath;
	if (appRoot !== process.cwd()) {
		loadingPaths.push(appRoot, resolve(appRoot, 'dist'));
	}
	
	for (const path of loadingPaths) {
		try {
			require(resolve(path, file));
			return;
		} catch (e) {
			lastErr = ignoreModuleNotFound(e);
		}
	}
	return lastErr;
}

/** @internal */
export function ignoreModuleNotFound(e: Error&{code: string}) {
	if (e && e.code === 'MODULE_NOT_FOUND') {
		return e.message;
	}
	throw e;
}

/** @internal */
export function stringNotFoundError(e: string) {
	const ret = /Cannot find module '(.+)'/.exec(e || '');
	return ret? ret[1] : '';
}
