const {contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  urlSubmit: (url) => ipcRenderer.invoke('url-submit', url)
})
