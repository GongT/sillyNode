import {resolve} from "path";
let root;
if (process.env.ROOT_DIR) {
	root = resolve(process.env.ROOT_DIR);
} else {
	root = resolve(process.cwd());
}

export const APP_ROOT_PATH = root;
