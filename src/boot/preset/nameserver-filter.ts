import { readFileSync, writeFileSync } from 'fs';

if (global.mainApplication.immutableSystem) {
	const newContent = readFileSync('/etc/resolv.conf', 'utf-8').split(/\n/g).filter((e) => {
		return /^\s*nameserver/i.test(e);
	}).join('\n');
	writeFileSync('/etc/resolv.conf', newContent, {encoding: 'utf8'});
	console.log('-------resolv.conf-------\n%s\n-------------------------', newContent);
} else {
	console.log('\x1B[2m< not run in immutable system, do not filter resolv.conf >\x1B[0m');
}
