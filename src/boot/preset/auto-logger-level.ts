import { LOG_LEVEL, setCurrentLevel } from '@gongt/silly-b/dist/debug/levels';

if (global.mainApplication.isDebugMode) {
	setCurrentLevel(LOG_LEVEL.SILLY);
} else {
	setCurrentLevel(LOG_LEVEL.INFO);
}
