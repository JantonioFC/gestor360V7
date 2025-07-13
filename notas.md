# Notas de Gestor360V7

## Perplexity Sonar: Explicaciones clave

* **main.js**: Contiene la lógica para leer carpetas y archivos Markdown, guardar archivos, y operar con Git usando `simple-git`, además de manejar IPC.
* **preload.js**: Expone funciones seguras para el renderizador mediante `contextBridge`.
* **index.html**: Interfaz dividida en barra lateral y panel principal, con modal para crear nuevas entradas.
* **style.css**: Diseño oscuro minimalista, tipografía legible y espaciados generosos.
* **renderer.js**: Controla la UI, carga carpetas y archivos, abre archivos en editor o tablero Kanban, maneja creación, guardado y sincronización, con drag & drop simple para Kanban.

## Esta aplicación cumple las condiciones estrictas:

* Compatible con Linux Mint XFCE (Electron multiplataforma).
* Usa solo Electron, Node.js, simple-git y tecnologías web estándar sin frameworks complejos.
* Código organizado, comentado y seguro.
* Diseño funcional minimalista con tema oscuro.
* Integración Git con manejo de errores y notificaciones.
* Vista Kanban interactiva para archivos Markdown específicos.

## Changelog - Fixes Aplicados

### 🔧 Bug Fix del Modal de Plantillas (Julio 2025)

**Problema diagnosticado:** El campo de título en el modal de plantillas no permitía escribir o tenía problemas de focus.

**Soluciones implementadas:**

1. **✅ Campo de título siempre accesible:**
   - Cambió de ID `titulo-entry` a `titulo-input` específico
   - Se añadió `autofocus` para enfoque automático
   - Campo visible desde el inicio, no depende de generación dinámica

2. **✅ Focus mejorado:**
   - Timeout de 100ms para asegurar que elementos existan
   - `focus()` y `select()` para selección automática del texto
   - Placeholder dinámico que cambia según el estado

3. **✅ Event listeners robustos:**
   - Se añaden después de crear el HTML con setTimeout
   - Verificaciones de que el input existe antes de usarlo
   - Mejor manejo de errores con logs en consola

4. **✅ Validación mejorada:**
   - Limpieza de caracteres especiales en títulos
   - Mensajes de error más claros con emojis
   - Return focus al input si hay error
   - Atajo ESC para cerrar modal

**Resultado:** Modal de plantillas 100% funcional con experiencia de usuario fluida.

---
**Última actualización del bug fix:** Julio 12, 2025
