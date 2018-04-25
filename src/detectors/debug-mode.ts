export function detectDebugMode() {
	if (process.env.IS_DEBUG_MODE) {
		return true;
	}
	if (process.env.NODE_ENV !== 'production') {
		return true;
	}
	
	return false;
}
