import { resolve } from 'path';
import { escapeRegExp } from '@gongt/silly-b/dist/strings/escape-regexp';

const STL_BASE_PATH = resolve(__dirname, '..').replace(/library$/, '');
const libReg = new RegExp(`${escapeRegExp(STL_BASE_PATH)}([a-z]+)`, 'g');
const libRegRepl = '[STL:$1]';
const isModule = /\/node_modules\/(@[^\/]+\/)?([^\/]+)\//g;

export function processStack(stack: string, color = global.mainApplication.stdoutTerminal) {
	const fg = new Proxy<{[id: number]: string}>({}, {
		get(self: any, k: string) {
			if (!parseInt(k)) {
				return;
			}
			return color? '\x1B[38;5;' + k + 'm' : '';
		},
	});
	
	const CR = color? '\x1B[0m' : '';
	const G = fg[241];
	const CRG = CR + G;
	
	stack = stack
		.replace(libReg, fg[4] + libRegRepl + CR + fg[244])
		.replace(/^\s+at\s+/mg, '  > ')
		.replace(/(:[0-9]+):[0-9]+/mg, '$1')
		.replace(/\bbootstrapNodeJSCore\b/, `${fg[9]}bootstrapNodeJSCore`)
		.replace(new RegExp('(\\s|\\()' + escapeRegExp(process.cwd()), 'g'), '$1.');
	let stacks: string[] = stack.split(/\n/g);
	const first = stacks.shift();
	
	let requireStatus = -1;
	for (let index = stacks.length - 1; index >= 0; index--) {
		let line = stacks[index];
		if (isModule.test(line)) {
			stacks[index] = G + line.replace(isModule, `/${fg[239]}[$1$2]${CRG}/`);
		} else if (!/ \(/.test(line)) {
			stacks[index] = fg[237] + line;
		} else if (/ require \(internal\//.test(line)) {
			requireStatus = index;
			stacks[index] = fg[3] + '  > require';
			continue;
		} else if (/ \(internal\//.test(line)) {
			if (requireStatus > 0) {
				line = line.replace(/\(internal\/modules\/[^/]+\//, '(');
			}
			stacks[index] = fg[237] + line;
			continue;
		} else {
			if (requireStatus > 0) {
				const file = / \(([^:]+)/.exec(line);
				if (file) {
					stacks[requireStatus + 1] += `\n      ${fg[3]}require(${file[1]})`;
				} else {
					stacks[requireStatus + 1] += `\n      ${fg[3]}(???)`;
				}
				stacks.splice(index + 1, requireStatus - index, `${fg[235]}  > **internal module resolve**`);
				requireStatus = -1;
			}
			stacks[index] = '\x1B[1m' + line;
		}
	}
	
	return fg[9] + first + CR + '\n' + stacks.join(CR + '\n') + CR;
}
