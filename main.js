const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");

let mainWindow;
let backendProcess;

// Create a log file for the backend process
const backendLogFile = path.join(__dirname, "backend.log");
const backendLogStream = fs.createWriteStream(backendLogFile, { flags: "a" });

function createWindow() {
  console.log("Creating window...");
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.ELECTRON_DEV) {
    // 🔹 Development
    console.log("Loading URL: http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    // 🔹 Production
    console.log("Loading file:", path.join(__dirname, "frontend-build", "index.html"));
    mainWindow.loadFile(path.join(__dirname, "frontend-build", "index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function startBackend() {
  console.log("Starting backend...");
  const backendPath = process.env.ELECTRON_DEV
    ? path.join(__dirname, "backend")
    : path.join(process.resourcesPath, "backend");

  backendProcess = spawn("npm", ["run", "start"], {
    cwd: backendPath,
    shell: true,
    stdio: ["ignore", backendLogStream, backendLogStream],
  });

  backendProcess.on("error", (err) => {
    console.error("❌ Failed to start backend:", err);
    fs.appendFileSync(backendLogFile, `\n❌ Failed to start backend: ${err.toString()}\n`);
  });

  backendProcess.on("exit", (code, signal) => {
    console.log(`Backend process exited with code ${code} and signal ${signal}`);
    fs.appendFileSync(backendLogFile, `\nBackend process exited with code ${code} and signal ${signal}\n`);
  });
}

async function handleFileSave(event, options) {
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, options);
  if (canceled) {
    return null;
  } else {
    return filePath;
  }
}

async function handleDirectorySelect() {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory"],
  });
  if (canceled) {
    return null;
  } else {
    return filePaths[0];
  }
}

app.on("ready", () => {
  startBackend();
  createWindow();
  ipcMain.handle("dialog:saveFile", handleFileSave);
  ipcMain.handle("dialog:selectDirectory", handleDirectorySelect);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  if (backendProcess) backendProcess.kill();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});