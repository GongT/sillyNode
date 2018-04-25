export function detectSupervisor() {
	if (process.env.NOTIFY_SOCKET || process.env.INVOCATION_ID) {
		return 'systemd';
	}
	return 'unknown';
}
