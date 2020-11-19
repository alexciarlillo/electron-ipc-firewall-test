// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


console.log(window.ipcRenderer.sendSync('synchronous-message', 'sync-ping')) // prints "sync-pong"

window.ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "async-pong"
})
window.ipcRenderer.send('asynchronous-message', 'async-ping')