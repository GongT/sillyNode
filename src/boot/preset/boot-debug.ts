import { inspect, InspectOptions } from 'util';
import { ignoreModuleNotFound } from '../loader.try';
import { isMeInDocker } from '../../detectors/detect-vm';

const mainApp = global.mainApplication;

registerLocalDebugModulesRequirePath();
registerGlobalError();
registerOtherDebug();
dumpInfo();

function registerLocalDebugModulesRequirePath() {
	try {
		const deps = require(process.cwd() + '/package.json').dependencies;
		const {addPath} = require('app-module-path');
		const {resolve} = require('path');
		for (const [_, version] of Object.entries(deps) as any) {
			if (/^\//.test(version)) {
				const p1 = resolve(version, '..');
				console.error('\x1B[38;5;14mDEBUG: inject modules load path\x1B[0m: %s', p1);
				addPath(p1);
				const p2 = resolve(version, 'node_modules');
				console.error('\x1B[38;5;14mDEBUG: inject modules load path\x1B[0m: %s', p2);
				addPath(p2);
				break;
			}
		}
		const p: string = process.cwd() + '/node_modules';
		console.error('\x1B[38;5;14mDebug\x1B[0m: inject modules load path: %s', p);
		addPath(p);
	} catch (e) {
		console.error('\x1B[38;5;11mWarn\x1B[0m: inject modules failed, that is not a problem.(%s)', e.message);
	}
}

function dumpInfo() {
	console.log('>>>>>>>>>>>>>>>>>>> ');
	console.log(' boot up application:');
	console.log('  * arguments: [%s]', process.argv.join(', '));
	console.log('  * working dir: %s', process.cwd());
	console.log('  * root dir: %s', mainApp.rootPath);
	console.log('  * project name: %s', mainApp.applicationName);
	console.log('  * is debug: %s', mainApp.isDebugMode? 'yes' : 'no');
	console.log('  * is TTY: stdin=%s, stdout=%s, stderr=%s',
		process.stdin.isTTY? 'yes' : 'no',
		process.stdout.isTTY? 'yes' : 'no',
		process.stderr.isTTY? 'yes' : 'no');
	console.log('  * stdout width: %s', process.stdout.columns);
	console.log('  * app using TTY: %s', mainApp.stdoutTerminal? 'yes' : 'no');
	console.log('  * is docker env: %s', isMeInDocker()? 'yes' : 'no');
	console.log('  * supervisor: %s', mainApp.supervisor);
	console.log('  * immutable system: %s', mainApp.immutableSystem? 'yes' : 'no');
	
	if (mainApp.immutableSystem || !mainApp.isDebugMode) {
		console.log('  * environment variables:\n  *   ', Object.entries(process.env).sort(([k1], [k2]) => {
			const k1npm = /^npm/i.test(k1), k2npm = /^npm/i.test(k2);
			if (k1npm && k2npm) {
				return k1 > k2? 1 : -1;
			} else if (k1npm) {
				return 1;
			} else if (k2npm) {
				return -1;
			}
			return k1 > k2? 1 : -1;
		}).map(([key, value]) => {
			value = '' + value;
			if (value.length > 50) {
				value = value.substr(0, 47) + '...';
			}
			return `${key}=${JSON.stringify(value)}`;
		}).join('\n  *   '));
	}
	console.log('>>>>>>>>>>>>>>>>>>> ');
}

function registerGlobalError() {
	const {processStack} = require('../../internal/stack');
	const PS = mainApp.isDebugMode? (e: Error) => {
		return processStack(e.stack);
	} : (e: Error) => {
		return e.stack;
	};
	process.on('uncaughtException', (e: Error) => {
		if (e.hasOwnProperty('processExit')) { // is throw by doExit
			return;
		}
		console.error('==================== uncaughtException');
		console.error(PS(e));
		if (!process.Terminate) {
			process.exit(1);
		}
	});
	process.on('unhandledRejection', (e: any) => {
		if (e.hasOwnProperty('processExit')) { // is throw by doExit
			return;
		}
		console.error('==================== unhandledRejection');
		if (e && e.stack) {
			console.error(PS(e));
		} else {
			console.error(typeof e, e);
		}
		if (!process.Terminate) {
			process.exit(1);
		}
	});
}

function registerOtherDebug() {
	try {
		const pp: any = require('mongodb').ObjectID.prototype;
		if (!pp[inspect.custom]) {
			pp[inspect.custom] = function (insOpts: InspectOptions) {
				if (insOpts && insOpts.colors) {
					return `ObjectID(\x1B[38;5;14m${this.toString()}\x1B[0m)`;
				} else {
					return 'ObjectID(' + this.toString() + ')';
				}
			};
		}
	} catch (e) {
		ignoreModuleNotFound(e);
	}
}
