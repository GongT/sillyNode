import { resolve } from 'path';
import { fileExistsSync } from '../file-operation/file-exists';
import { topModule } from '../internal/top-module';

let root: string;
if (process.env.ROOT_DIR) {
	root = resolve(process.env.ROOT_DIR);
} else {
	root = resolve(process.cwd());
}

if (root === '/' && !fileExistsSync('/package.json')) { // no cwd, may be under some system
	root = resolve(topModule().filename, '..');
	while (root !== '/') {
		if (fileExistsSync(root + '/package.json')) {
			break;
		}
		root = resolve(root, '..');
	}
}

export function getAppRoot() {
	return root;
}
