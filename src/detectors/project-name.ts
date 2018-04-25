import { getAppRoot } from './app-root';

if (!process.env.PROJECT_NAME) {
	try {
		process.env.PROJECT_NAME = process.env.npm_package_name || require(getAppRoot() + '/package.json').name;
	} catch (e) {
		process.env.PROJECT_NAME = 'no name';
	}
}

export function getProjectName() {
	return process.env.PROJECT_NAME;
}
