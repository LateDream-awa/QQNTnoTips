const {ipcMain} = require('electron');
module.exports.onBrowserWindowCreated = (window) => {
	window.webContents.on('dom-ready', function() {
		this.send('noTips.check');
	});
}