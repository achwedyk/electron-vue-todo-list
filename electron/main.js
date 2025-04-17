const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs').promises
const path = require('path')

const todosFilePath = path.join(app.getPath('userData'), 'todos.json')

console.log(`Todos will be saved to: ${todosFilePath}`)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.loadURL('http://localhost:5173/')
}

const loadTodos = async () => {
  try {
    return JSON.parse(await fs.readFile(todosFilePath, 'utf-8'))
  } catch (error) {
    console.error('Loading file failed', error)
    return []
  }
}

const saveTodos = async (todos) => {
  try {
    await fs.writeFile(todosFilePath, JSON.stringify(todos))
  } catch (error) {
    console.error('Save error', error)
  }
}

app.whenReady().then(() => {
  createWindow()

  ipcMain.handle('load-todos', loadTodos)
  ipcMain.on('save-todos', (_, todos) => {
    saveTodos(todos).catch(console.error)
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
