import { existsSync } from 'fs';
import { resolve } from 'path';
import { fileExistsSync } from '../../file-operation/file-exists';

if (!process.env.APP_ENTRY_POINT) { // try package
	const pkg = resolve(process.cwd(), 'package.json');
	if (existsSync(pkg)) {
		try {
			const p = require(pkg);
			if (p.main) {
				process.env.APP_ENTRY_POINT = p.main;
			}
		} catch (e) {
			console.error('\x1B[38;5;9msome error in your package.json file.\x1B[0m');
			process.exit(1);
		}
	}
}

if (!process.env.APP_ENTRY_POINT) { // :(
	console.error('\x1B[38;5;9mwhere is the server main file? (set env: APP_ENTRY_POINT, or set "main" in package.json)\x1B[0m');
	process.exit(1);
}

console.log('\x1B[2mbootstrap application: %s\x1B[0m', process.env.APP_ENTRY_POINT);
const path = resolve(global.mainApplication.rootPath, process.env.APP_ENTRY_POINT);
if (fileExistsSync(path) || fileExistsSync(path + '.js')) {
	require(path);
} else {
	throw new Error('APP_ENTRY_POINT file [' + path + '] not exists!');
}
