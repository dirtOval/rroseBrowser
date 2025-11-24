const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const {net} = require('electron');
const {parse} = require('node-html-parser');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

async function urlSubmit(event, url) {
  console.log(`i got a url: ${url}`);
  const response = await net.fetch(url);
  if (response.ok) {
    const body = await response.text()
    const dom = parse(body, {
      blockTextElements: {
        script: true,
        noscript: true,
        style: true,
        pre: true
      }
    });

    return dom.toString();
  } else {
    return `error! ${url} is not a valid URL`
  }
}

app.whenReady().then(() => {
  ipcMain.handle('url-submit', urlSubmit)
  console.log('im ready!');
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
