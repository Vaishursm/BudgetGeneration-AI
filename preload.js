// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveFileDialog: (opts) => ipcRenderer.invoke("dialog:saveFile", opts),
  selectDirectory: () => ipcRenderer.invoke("dialog:selectDirectory"),
});
