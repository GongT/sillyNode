import {BaseFile, MemoryFile} from "./base-file";

export class MemoryTextFile extends MemoryFile<string[]> {
	protected create_default() {
		return proto.create_default.call(this);
	};
	
	protected parse_file(content: string) {
		return proto.parse_file.call(this, content);
	};
	
	protected stringify_file() {
		return proto.stringify_file.call(this);
	};
	
	public append = proto.append;
	public remove = proto.remove;
	public section = proto.section;
	public uniqueAppend = proto.uniqueAppend;
	public hasLine = proto.hasLine;
}
export class TextFile extends BaseFile<string[]> {
	protected create_default() {
		return proto.create_default.call(this);
	};
	
	protected parse_file(content: string) {
		return proto.parse_file.call(this, content);
	};
	
	protected stringify_file() {
		return proto.stringify_file.call(this) + '\n';
	};
	
	public append = proto.append;
	public remove = proto.remove;
	public section = proto.section;
	public uniqueAppend = proto.uniqueAppend;
	public hasLine = proto.hasLine;
}

const proto = {
	create_default(this: TextFile|MemoryTextFile,): string[] {
		return [];
	}, parse_file(this: TextFile|MemoryTextFile, content: string): string[] {
		content = content.trim();
		if (content) {
			return content.split(/\n/g);
		} else {
			return [];
		}
	}, stringify_file(this: TextFile|MemoryTextFile,): string {
		// console.log(this.content)
		return this.content.join('\n').trim();
	}, append(this: TextFile|MemoryTextFile, line: string|string[]) {
		if (Array.isArray(line)) {
			line.forEach((l) => {
				this.content.push(l);
			});
		} else {
			this.content.push(line);
		}
	}, remove(this: TextFile|MemoryTextFile, line: string|string[]) {
		if (Array.isArray(line)) {
			line.forEach(this.remove, this);
		} else {
			const exists = this.content.indexOf(line);
			if (exists !== -1) {
				this.content.splice(exists, 1);
			}
		}
	}, section(this: TextFile|MemoryTextFile, start: string, end: string): MemoryTextFile {
		start = '### ' + start.trim();
		end = '### ' + end.trim();
		const file = new MemoryTextFile();
		
		let startLine = this.content.indexOf(start);
		let endLine = this.content.indexOf(end);
		if (startLine === -1) {
			this.content.unshift(end);
			this.content.unshift(<any>file);
			this.content.unshift(start);
		} else if (endLine === -1) {
			throw new Error(`can't parse file: end before start`);
		} else {
			if (endLine < startLine) {
				const x = startLine;
				startLine = endLine;
				endLine = x;
			}
			
			const currentSection = this.content.splice(startLine + 1, endLine - startLine - 1, <any>file);
			
			file.replaceContent(currentSection);
		}
		
		return file;
	}, uniqueAppend(this: TextFile|MemoryTextFile, line: string|string[]) {
		if (Array.isArray(line)) {
			line.forEach((l) => {
				this.uniqueAppend(l);
			})
		} else if (this.content.indexOf(line) === -1) {
			this.append(line);
		} else if (line === '') {
			this.append('');
		}
	}, hasLine(this: TextFile|MemoryTextFile, line: string) {
		return this.content.indexOf(line) !== -1
	},
};
