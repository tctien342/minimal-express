export const DEBUG = process.env.DEBUG === 'true';
if (!DEBUG) {
	console.error('No DEBUG found in env');
	process.exit(1);
}
