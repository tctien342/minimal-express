const storage = require('node-persist');

// export async function getCurrentOffsetvid() {
// 	await storage.init();
// 	let state = await storage.getItem('currOffSetVid');
// 	if (!state) {
// 		await setCurrentOffsetvid(0);
// 		return 0;
// 	} else {
// 		return state;
// 	}
// }

// export async function setCurrentOffsetvid(value: Number) {
// 	await storage.init();
// 	await storage.setItem('currOffSetVid', value);
// 	return true;
// }
