// main.js - Proceso principal de Electron
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const simpleGit = require('simple-git');

// Ruta del repositorio local (personalizable)
const REPO_PATH = path.resolve(process.env.HOME || process.env.USERPROFILE, 'Documents/gestor360v7_repo');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
}

// Asegurar que la estructura de carpetas existe
async function ensureDirectoryStructure() {
  const folders = ['dde', 'planificacion', 'docs', 'recursos'];
  try {
    await fs.access(REPO_PATH);
  } catch {
    await fs.mkdir(REPO_PATH, { recursive: true });
  }
  
  for (const folder of folders) {
    const folderPath = path.join(REPO_PATH, folder);
    try {
      await fs.access(folderPath);
    } catch {
      await fs.mkdir(folderPath, { recursive: true });
    }
  }
}

// Función para listar solo carpetas de primer nivel dentro del repositorio
async function listarCarpetasRaiz() {
  try {
    await ensureDirectoryStructure();
    const entries = await fs.readdir(REPO_PATH, { withFileTypes: true });
    const folders = entries.filter(e => e.isDirectory()).map(f => f.name);
    return folders;
  } catch (err) {
    console.error('Error leyendo carpetas raíz:', err);
    return [];
  }
}

// Función para listar archivos markdown (.md) dentro de una carpeta específica
async function listarArchivosMD(carpeta) {
  try {
    const fullPath = path.join(REPO_PATH, carpeta);
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    const mdFiles = entries.filter(f => f.isFile() && f.name.endsWith('.md')).map(f => f.name);
    return mdFiles;
  } catch (err) {
    console.error('Error listando archivos markdown:', err);
    return [];
  }
}

// Leer contenido de archivo markdown
async function leerArchivo(carpeta, archivo) {
  try {
    const fullPath = path.join(REPO_PATH, carpeta, archivo);
    const contenido = await fs.readFile(fullPath, 'utf8');
    return contenido;
  } catch (err) {
    console.error('Error leyendo archivo:', err);
    return '';
  }
}

// Guardar archivo markdown, genera nombre con timestamp si es creación
async function guardarArchivo(carpeta, nombreArchivo, contenido, esNuevo) {
  try {
    await ensureDirectoryStructure();
    const fullPath = path.join(REPO_PATH, carpeta, nombreArchivo);
    await fs.writeFile(fullPath, contenido, 'utf8');
    return true;
  } catch (err) {
    console.error('Error guardando archivo:', err);
    return false;
  }
}

// Función para sincronizar con GitHub mediante simple-git
async function syncGit() {
  const git = simpleGit(REPO_PATH);
  try {
    await git.add('./*');
    await git.commit('Sincronización automática desde Gestor360V7');
    await git.push();
    new Notification({ title: 'Gestor360V7', body: 'Sincronización con GitHub exitosa.' }).show();
    return { success: true };
  } catch (error) {
    console.error('Error sincronizando con Git:', error);
    new Notification({ title: 'Gestor360V7', body: `Error al sincronizar: ${error.message}` }).show();
    return { success: false, error: error.message };
  }
}

// IPC handlers para comunicación desde renderer
ipcMain.handle('listar-carpetas', listarCarpetasRaiz);
ipcMain.handle('listar-archivos', (_, carpeta) => listarArchivosMD(carpeta));
ipcMain.handle('leer-archivo', (_, carpeta, archivo) => leerArchivo(carpeta, archivo));
ipcMain.handle('guardar-archivo', (_, carpeta, nombreArchivo, contenido, esNuevo) => guardarArchivo(carpeta, nombreArchivo, contenido, esNuevo));
ipcMain.handle('sync-git', syncGit);

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
