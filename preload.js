const {contextBridge, ipcRenderer} = require('electron');

ipcRenderer.on('check-window', (event, arg) => {
	console.log('[QQNTnoTips: 前端] 后端请求检查窗口');
	if(document.querySelector('.pic-notification[type="poster"]')) {
		console.log('[QQNTnoTips: 前端] 发现目标元素, 关闭窗口');
		ipcRenderer.send('check-window-result', true);
		window.close();
	} else {
		console.log('[QQNTnoTips: 前端] 未发现目标元素, 继续等待');
		ipcRenderer.send('check-window-result', false);
	}
});