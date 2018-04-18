import {resolve} from "path";

export function patchRequireSymlink() {
	process.env.NODE_PATH = resolve(process.cwd(), 'node_modules');
	require('module').Module._initPaths();
}
