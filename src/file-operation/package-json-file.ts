/// <reference path="./schema/packagejson.d.ts"/>

import { ConfigJsonFile } from './config-json-file';

export interface JspmPackageConfig {
	configFile?: string;
	configFiles?: {
		[id: string]: string;
		jspm: string;
	},
	dependencies?: {
		[id: string]: string;
	};
	directories?: {
		[id: string]: string;
		baseURL?: string;
		packages?: string;
	},
	overrides?: {
		[id: string]: any;
	};
}

export interface IPackageJson extends JsonSchemastoreOrg.Package {
	jspm?: JspmPackageConfig&JsonSchemastoreOrg.Package.Definitions.CoreProperties;
}

export class PackageJsonFile extends ConfigJsonFile<IPackageJson> {
	addDependency(dependencyName: string, version = 'latest') {
		this._depLatest('dependencies', dependencyName, version);
	}
	
	addDevDependency(dependencyName: string, version = 'latest') {
		this._depLatest('devDependencies', dependencyName, version);
	}
	
	private _depLatest(t: 'devDependencies'|'dependencies', name: string, version: string) {
		if (!this._content[t]) {
			this._content[t] = {};
		}
		this._content[t][name] = version;
	}
}
