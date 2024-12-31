const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('noTips', {
	check: (callback) => ipcRenderer.on('noTips.check', callback)
});