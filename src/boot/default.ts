#!/usr/bin/env node

import {existsSync} from "fs";
import {resolve} from "path";
import {filterResolvFile} from "../tools/nameserver-filter";
import {loadExpressApplication} from "./loader";

if (!process.env.MAIN_FILE) { // try package
	const pkg = resolve(process.cwd(), 'package.json');
	if (existsSync(pkg)) {
		try {
			const p = require(pkg);
			if (p.main) {
				process.env.MAIN_FILE = p.main;
			}
		} catch (e) {
			console.error('\x1B[38;5;9msome error in your package.json file.\x1B[0m');
			process.exit(1);
		}
	}
}

if (!process.env.MAIN_FILE) { // :(
	console.error('\x1B[38;5;9mwhere is the server main file? (set env: MAIN_FILE, or set "main" in package.json)\x1B[0m');
	process.exit(1);
}

filterResolvFile();

console.log('\x1B[2mbootstrap application: %s\x1B[0m', process.env.MAIN_FILE);
loadExpressApplication(resolve(process.cwd(), process.env.MAIN_FILE));
