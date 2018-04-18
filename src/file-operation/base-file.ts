import {existsSync, readFileSync, writeFileSync} from "fs";
import {mkdirpSync, pathExistsSync} from "fs-extra";
import {dirname} from "path";

export type BufferEncoding = "buffer"|"utf8";

export abstract class MemoryFile<ContentType> {
	protected _content: ContentType;
	
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
	
	get content(): ContentType {
		return this._content;
	}
	
	toString() {
		return this.stringify_file();
	}
	
	protected abstract create_default(): ContentType;
	
	protected abstract parse_file(content: string): ContentType;
	
	protected abstract stringify_file(): string;
}

export abstract class BaseFile<ContentType> extends MemoryFile<ContentType> {
	protected _fileName: string;
	protected _create: boolean;
	protected _exists: boolean;
	protected _charset: string;
	private _old_content: string;
	
	public logger = console.error;
	
	constructor(fileName: string);
	constructor(fileName: string, charset: BufferEncoding, create: boolean);
	constructor(fileName: string, charset: BufferEncoding);
	constructor(fileName: string, create: boolean);
	constructor(fileName: string, charset: BufferEncoding|boolean = 'utf8', create: boolean = false) {
		super();
		this._fileName = fileName;
		if (typeof charset === 'boolean') {
			create = charset;
			charset = 'utf8';
		}
		
		this._create = create;
		this._charset = charset;
		
		this.reload();
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
	
	exists() {
		return this._exists;
	}
	
	write() {
		this.logger('\x1B[2msaving file %s...\x1B[0m', this._fileName);
		let content;
		try {
			content = this.stringify_file();
		} catch (e) {
			this.logger(this._content);
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
	
	get fileName() {
		return this._fileName;
	}
}
