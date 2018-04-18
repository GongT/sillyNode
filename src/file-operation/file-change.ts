///<reference types="node"/>

import { pathExists, readFile, writeFile } from 'fs-extra';
import { crc8 } from 'node-crc';

export class FileChange {
	public readonly fileExists: boolean;
	protected readonly cachePath: string;
	protected fileBuffer: Buffer;
	protected readonly filePath: string;
	protected hash: string;
	
	constructor(file: string, hashCacheFile: string|boolean = true) {
		this.filePath = file;
		if (typeof hashCacheFile === 'string') {
			this.cachePath = hashCacheFile;
		} else if (hashCacheFile) {
			this.cachePath = this.filePath + '.crc';
		}
	}
	
	public async readFile(): Promise<Buffer>;
	public async readFile(encoding: string): Promise<string>;
	public async readFile(encoding?: string): Promise<string|Buffer> {
		if (!this.fileBuffer) {
			this.fileBuffer = await readFile(this.filePath);
		}
		if (encoding) {
			return this.fileBuffer.toString(encoding);
		} else {
			return this.fileBuffer;
		}
	}
	
	public async writeFile(newContent: string): Promise<boolean> {
		const newBuffer = Buffer.from(newContent, 'utf8');
		const newHash = this.runHash(newBuffer);
		
		if (!this.hash) {
			await this.loadHash();
		}
		
		if (this.hash === newHash) {
			this.fileBuffer = newBuffer;
			this.hash = newHash;
			await writeFile(this.filePath, newContent, {encoding: 'utf8'});
			if (this.cachePath) {
				await writeFile(this.cachePath, newHash, {encoding: 'utf8'});
			}
			return true;
		}
		return false;
	}
	
	protected async loadHash() {
		if (!this.cachePath) {
			return;
		}
		if (this.fileBuffer) {
			this.hash = this.runHash(this.fileBuffer);
		} else if (await pathExists(this.cachePath)) {
			this.hash = await readFile(this.cachePath, 'utf-8');
		} else if (await pathExists(this.filePath)) {
			await this.readFile();
			this.hash = this.runHash(this.fileBuffer);
		}
	}
	
	protected runHash(data: Buffer) {
		const crc = crc8(this.fileBuffer);
		if (typeof crc === 'boolean') {
			return '';
		} else {
			return crc.toString('hex');
		}
	}
}
