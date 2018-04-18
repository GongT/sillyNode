///<reference types="node"/>

declare module NodeJS {
	interface Process {
		Terminate(why: string): void;
	}
}
