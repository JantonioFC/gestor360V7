# 🚀 Gestor360V7 - Sistema de Plantillas Educativas

**Última actualización:** 2025-01-13  
**Estado:** ✅ Producción - Candidato Nivel 1  
**Versión:** 1.0.0

## ⚡ Instalación y Ejecución

### Instalación Inicial
```bash
# Windows
install.bat

# Linux/Mac
chmod +x install.sh
./install.sh
```

### Ejecución
- **Windows:** Doble clic en `ejecutar.bat`
- **Terminal:** `npm start`

## 🎯 Funcionalidades Principales

- ✨ **12+ plantillas educativas** organizadas por categoría
- 🌙 **Tema oscuro elegante** inspirado en Obsidian/Notion
- 📋 **Sistema Kanban** interactivo con drag & drop
- 🔄 **Sincronización Git** automática integrada
- 📱 **Diseño responsivo** para todas las pantallas
- 🐛 **Sistema de plantillas robusto** con validación completa
- ⌨️ **Atajos de teclado** - ESC para cerrar modal, Ctrl+S para guardar
- 🔧 **Arquitectura modular** - Fácil de extender y mantener

## 📁 Estructura de Plantillas

### 📂 DDE (Diario de Decisiones de Ingeniería)
- 🎯 **Log de Mentor** - Registra sesiones de mentoría
- ⚙️ **Decisión de Ingeniería** - Documenta decisiones técnicas
- 🔍 **Autoevaluación Semanal** - Reflexión y progreso personal

### 📂 Planificación
- 📋 **Kanban de Proyecto** - Vista de tablero interactivo
- 📅 **Planificación Semanal** - Organiza tu semana
- ⚡ **Sprint Planning** - Gestión ágil de sprints

### 📂 Documentación
- 📖 **Manual de Usuario** - Guías y documentación
- 📊 **Rúbrica de Evaluación** - Criterios de evaluación
- ✅ **Checklist de Calidad** - Asegura estándares

### 📂 Recursos
- 🔗 **Enlaces de Desarrollo** - Recursos útiles
- 🎯 **Criterios de Progresión** - Niveles de competencia
- 📝 **Documento Personalizado** - Plantilla libre

## 🎨 Flujo de Trabajo

1. **Selecciona una carpeta** del panel izquierdo
2. **Clic en "Nueva Entrada"** (botón azul)
3. **Elige una plantilla** del grid visual
4. **Escribe el título** del documento
5. **El sistema genera** automáticamente el contenido
6. **Edita y personaliza** según necesites
7. **Guarda** con Ctrl+S o el botón
8. **Sincroniza** con Git cuando quieras

## 📁 Estructura del Proyecto

```
Gestor360V7/
├── src/               # Código fuente de la interfaz
├── dde/               # Documentos DDE
├── planificacion/     # Documentos de planificación
├── docs/              # Documentación general
├── recursos/          # Enlaces y recursos
├── main.js            # Proceso principal Electron
├── renderer.js        # Lógica de la interfaz
└── preload.js         # Bridge de seguridad
```

## 🔧 Requisitos del Sistema

- **Node.js:** v14 o superior
- **npm:** Incluido con Node.js
- **Git:** Opcional, para sincronización
- **OS:** Windows 10+, Linux, macOS

## 🐛 Solución de Problemas

### El modal no se abre
- Asegúrate de seleccionar una carpeta primero
- Verifica la consola con F12 (DevTools)

### Error al guardar
- Verifica permisos de escritura
- Asegúrate de que el título no contenga caracteres especiales

### Sincronización Git falla
- Configura tus credenciales Git
- Verifica conexión a internet

## 📝 Mejoras Recientes (2025-01-13)

- ✅ Reestructuración del repositorio a estándar
- ✅ Mejora del sistema IPC para plantillas
- ✅ Documentación completa del proyecto
- ✅ Scripts de instalación multiplataforma
- ✅ Validación robusta de entradas

## 🚀 Próximas Mejoras Planificadas

- [ ] Tests unitarios automatizados
- [ ] Más plantillas personalizables
- [ ] Exportación a PDF
- [ ] Temas de color adicionales
- [ ] Sincronización con cloud

## 📚 Documentación Adicional

- Ver `INFORME_MEJORAS_2025-01-13.md` para detalles técnicos
- Manual de usuario en `docs/Manual_Usuario.md`

---

**Desarrollado con ❤️ por Claude & Usuario**  
*La versión legendaria que mantiene un récord perfecto de funcionalidad*  
**Enero 2025**
