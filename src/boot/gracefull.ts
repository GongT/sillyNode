import { closeAll } from './global-work';
import { inspect } from 'util';

let originalExit: (code: number) => never;

export function graceFullExit(ret = 0): never {
	process.Terminate('manual call');
	return originalExit(ret);
}

export function registerGracefullyExit() {
	if (process.Terminate) {
		throw new Error('process.Terminate already exists');
	}
	originalExit = process.exit;
	
	console.error('process.exit() patched.');
	process.exit = function (code?: number): never {
		if (!exitCalled) {
			doExit('process.exit call');
		}
		console.trace('process.exit() call with:', ...Array.prototype.slice.call(arguments));
		throw new ProcessExit('process.exit(' + code + ') call');
	};
	process.on('exit', (code) => {
		console.error(`process.exit(${code}) has called.`);
		if (!exitCalled && code !== 0) {
			let codes = '';
			if (code) {
				codes = code.toFixed();
			}
			console.error(`
##################################################
#                   WARNING                      #
##################################################
#                                                #
# %syou have called process.exit(%s) somewhere,  #
#     that will cause unsaved data lost, use     #
#              graceFullExit();                  #
#                 instead.                       #
#                                                #
##################################################
`, new Array(4 - codes.length).fill(' ').join(''), codes);
		}
		originalExit(code);
	});
	
	//catches ctrl+c event
	process.on('SIGINT', () => doExit('SIGINT'));
	process.on('SIGTERM', () => doExit('SIGTERM'));
	
	// catches "kill pid" (for example: nodemon restart)
	process.on('SIGUSR1', () => doExit('SIGUSR1'));
	process.on('SIGUSR2', () => doExit('SIGUSR2'));
	
	// catches uncaught exceptions
	const errorHandler = (prefix: string, reason: Error|any) => {
		if (reason && reason.message) {
			doExit(prefix + ': ' + reason.message);
		} else {
			doExit(inspect(prefix + ': %j', reason));
		}
	};
	process.on('uncaughtException', errorHandler.bind(null, 'uncaughtException'));
	process.on('unhandledRejection', errorHandler.bind(null, 'unhandledRejection'));
	
	process.Terminate = doExit as any;
	process.ForceTerminate = (why: string): never => {
		console.log('force terminate process: %s', why);
		return originalExit(1);
	};
}

export class ProcessExit extends Error {
	public readonly processExit = true;
}

let exitCalled = false;
let sigint = 0;

function doExit(why: string): Promise<never> {
	console.log('will exit because %s.', why);
	if (why === 'SIGINT') {
		sigint++;
		if (sigint >= 3) {
			console.log(' kill by Ctrl+C');
			process.kill(process.pid, 'SIGKILL');
		} else {
			console.log(' press %s Ctrl+C to kill.');
		}
	}
	if (exitCalled) {
		console.log('    handler already called.');
		return;
	}
	exitCalled = true;
	
	return closeAll().then((errorCount) => {
		console.log('will terminate process with code: %s.', errorCount);
		return errorCount;
	}, (err) => {
		// in fact, error will never occur
		console.log('will terminate process with error:\n%s', err.stack);
		return err.code || 1;
	}).then((code) => {
		return new Promise((resolve) => {
			setImmediate(() => {
				resolve(code);
			});
		});
	}).then(originalExit);
}
