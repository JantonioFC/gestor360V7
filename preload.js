// preload.js - Comunicación segura entre main y renderer
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  listarCarpetas: () => ipcRenderer.invoke('listar-carpetas'),
  listarArchivos: (carpeta) => ipcRenderer.invoke('listar-archivos', carpeta),
  leerArchivo: (carpeta, archivo) => ipcRenderer.invoke('leer-archivo', carpeta, archivo),
  guardarArchivo: (carpeta, nombreArchivo, contenido, esNuevo) => ipcRenderer.invoke('guardar-archivo', carpeta, nombreArchivo, contenido, esNuevo),
  syncGit: () => ipcRenderer.invoke('sync-git'),
});
