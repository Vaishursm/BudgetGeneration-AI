const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let mainWindow;
let backendProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.ELECTRON_DEV) {
    // 🔹 Development
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    // 🔹 Production
    mainWindow.loadFile(path.join(__dirname, "frontend-build", "index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function startBackend() {
  const backendPath = path.join(__dirname, "backend", "src", "server.js");

  backendProcess = spawn(process.execPath, [backendPath], {
    env: { ...process.env, PORT: 5000 },
    stdio: "inherit",
  });

  backendProcess.on("error", (err) => {
    console.error("❌ Failed to start backend:", err);
  });
}

app.on("ready", () => {
  startBackend();
  createWindow();
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
