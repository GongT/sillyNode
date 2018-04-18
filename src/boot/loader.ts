import {dirname, resolve} from "path";
import {patchRequireSymlink} from "./patch-require-symlink";

export function loadExpressApplication(MAIN: string) {
	patchRequireSymlink();
	
	require("source-map-support/register");
	try {
		require("@gongt/jenv-data/global");
	} catch (e) {
	}
	
	if (/^\./.test(MAIN)) {
		const path = dirname(module.parent.filename);
		MAIN = resolve(path, MAIN);
	}
	console.log('require main script: %s', MAIN);
	return require(MAIN);
}
