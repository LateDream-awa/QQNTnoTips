const {ipcMain} = require('electron');

module.exports.onBrowserWindowCreated = w => {
	// w is electron BrowserWindow instance

	w.webContents.on('did-stop-loading', () => {
		console.log('[QQNTnoTips: 后端] 新的窗口被创建, 开始检查');
		w.webContents.send('check-window');
		ipcMain.on('check-window-result', (event, result) => {
			if(result) console.log('[QQNTnoTips: 后端] 检查未通过, 窗口已关闭');
			else console.log('[QQNTnoTips: 后端] 检查通过, 窗口未关闭, 继续检查');
		});
	});
}