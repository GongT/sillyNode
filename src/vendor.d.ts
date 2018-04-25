///<reference types="node"/>

declare interface IAppDesc {
	applicationName: string; // 程序名称
	immutableSystem: boolean; // 是否运行在不可变系统
	isDebugMode: boolean; // 是否是调试模式
	rootPath: string; // 程序根目录
	stdoutTerminal: boolean; // 标准输出是否是tty
	supervisor: string; // 监控程序的名称
}

declare module NodeJS {
	interface Process {
		ForceTerminate(why: string): never;
		
		Terminate(why: string): never;
	}
	
	interface Global {
		readonly mainApplication: IAppDesc;
	}
}
