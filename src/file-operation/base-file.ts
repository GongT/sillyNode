import { existsSync, readFileSync, writeFileSync } from 'fs';
import { mkdirpSync, pathExistsSync } from 'fs-extra';
import { dirname } from 'path';
import { createLogger, IDebuggerLogger } from '@gongt/silly-b/dist/debug/create-logger';
import { LOG_LEVEL } from '@gongt/silly-b/dist/debug/levels';

export type BufferEncoding = 'buffer'|'utf8';

export abstract class MemoryFile<ContentType> {
	constructor(fileContent?: string) {
		if (fileContent) {
			this._content = this.parse_file(fileContent);
		} else {
			this._content = this.create_default();
		}
	}
	
	replaceContent(content: ContentType) {
		this._content = content;
	}
	
	toString() {
		return this.stringify_file();
	}
	
	protected abstract create_default(): ContentType;
	
	protected abstract parse_file(content: string): ContentType;
	
	protected abstract stringify_file(): string;
	
	protected _content: ContentType;
	
	get content(): ContentType {
		return this._content;
	}
}

export abstract class BaseFile<ContentType> extends MemoryFile<ContentType> {
	protected _charset: string;
	protected _create: boolean;
	protected _exists: boolean;
	private _old_content: string;
	protected logger: IDebuggerLogger;
	
	constructor(fileName: string);
	constructor(fileName: string, charset: BufferEncoding, create: boolean);
	constructor(fileName: string, charset: BufferEncoding);
	constructor(fileName: string, create: boolean);
	constructor(fileName: string, charset: BufferEncoding|boolean = 'utf8', create: boolean = false) {
		super();
		
		this.logger = createLogger(LOG_LEVEL.SILLY, this.constructor.name);
		
		this._fileName = fileName;
		if (typeof charset === 'boolean') {
			create = charset;
			charset = 'utf8';
		}
		
		this._create = create;
		this._charset = charset;
		
		this.reload();
	}
	
	exists() {
		return this._exists;
	}
	
	reload() {
		if (existsSync(this._fileName)) {
			this._old_content = readFileSync(this._fileName, this._charset);
			this._content = this.parse_file(this._old_content);
			this._exists = true;
		} else {
			if (!this._create) {
				throw new Error(`file not exists: ${this._fileName}`);
			}
			this._exists = false;
		}
	}
	
	write() {
		this.logger('\x1B[2msaving file %s...\x1B[0m', this._fileName);
		let content;
		try {
			content = this.stringify_file();
		} catch (e) {
			this.logger('%j', this._content);
			throw new Error(`can't stringify file content, file: ${this._fileName}.`);
		}
		
		if (this._exists && content === this._old_content) {
			return false;
		}
		
		this._old_content = content;
		
		if (!existsSync(dirname(this._fileName))) {
			this.logger('  mkdir: %s', dirname(this._fileName));
			mkdirpSync(dirname(this._fileName));
		}
		
		this.logger('  write file: %s', this._fileName);
		writeFileSync(this._fileName, content, {encoding: this._charset});
		this._exists = true;
		return true;
	}
	
	writeTo(otherFilePath: string) {
		const newContent = this.stringify_file();
		if (pathExistsSync(otherFilePath) && (readFileSync(otherFilePath, {encoding: 'utf8'}) === newContent)) {
			return;
		}
		this.logger('  writeTo file: %s', otherFilePath);
		writeFileSync(otherFilePath, newContent, {encoding: 'utf8'});
	}
	
	protected _fileName: string;
	
	get fileName() {
		return this._fileName;
	}
}
