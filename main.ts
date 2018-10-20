// import { app, BrowserWindow } from 'electron';
let { app, BrowserWindow } = require('electron')

/**
 * Electron window management - The main window
 */
let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1600,
    height: 900
  });

  // and load the index.html of the app.
  win.loadFile('dist/ConverseCode/index.html');

  // on closed - GC
  win.on('closed', function () {
    win = null;
  });
}
  
app.on('ready', createWindow);