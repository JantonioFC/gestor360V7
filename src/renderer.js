// renderer.js - Lógica del frontend e interacción con la UI

// ========= SISTEMA DE PLANTILLAS =========
const templates = {
    dde: {
        "Log de Mentor": {
            icon: "🎯",
            content: `# Log de Sesión del Mentor: {fecha}

## 1. Tema Principal de la Sesión
> [Describe en una frase el tema principal que discutieron. Ej: "Discutimos la estrategia de instalación de Linux y la compatibilidad de los periféricos."]

## 2. Decisiones Clave y Conclusiones
> [Resume en puntos las decisiones o conclusiones más importantes a las que llegaron. Esta es la sección más crítica.]
> 
> *   **Decisión:** 
> *   **Conclusión:** 
> *   **Acción:** 

## 3. Extracto Relevante de la Conversación (Opcional, pero recomendado)
> [Copia y pega el fragmento más importante de la respuesta del Mentor que llevó a una decisión clave.]
> 
> **Mentor 360:**
> > "[Extracto clave]"

## 4. Próximos Pasos Acordados
> [Lista las acciones que te comprometiste a realizar después de la sesión.]
>
> 1.  
> 2.  
> 3.  `
        },
        "Decisión de Ingeniería": {
            icon: "⚙️",
            content: `# Decisión de Ingeniería: {titulo}

**Fecha:** {fecha}
**Estado:** En Evaluación

## Contexto
> [Describe la situación que requiere una decisión técnica]

## Problema
> [Define claramente el problema o desafío técnico]

## Opciones Consideradas

### Opción A: [Nombre]
- **Pros:** 
- **Contras:** 
- **Esfuerzo:** 
- **Riesgo:** 

### Opción B: [Nombre]
- **Pros:** 
- **Contras:** 
- **Esfuerzo:** 
- **Riesgo:** 

## Decisión Final
> [Opción elegida y razones]

## Plan de Implementación
1. 
2. 
3. 

## Métricas de Éxito
- 
- 
- 

## Revisión Posterior
**Fecha programada:** 
**Criterios de evaluación:** `
        },
        "Autoevaluación Semanal": {
            icon: "🔍",
            content: `# Autoevaluación Semanal: {fecha}

## Logros de la Semana
> [¿Qué completaste exitosamente?]

### Técnicos
- 
- 
- 

### Personales/Profesionales
- 
- 
- 

## Desafíos Enfrentados
> [¿Qué obstáculos encontraste y cómo los manejaste?]

- **Desafío:** 
  **Solución aplicada:** 
  **Resultado:** 

## Aprendizajes Clave
> [¿Qué aprendiste que antes no sabías?]

1. 
2. 
3. 

## Áreas de Mejora
> [¿En qué necesitas enfocar tu desarrollo?]

- **Área:** 
  **Plan de acción:** 
  **Timeline:** 

## Objetivos Próxima Semana
> [¿Qué quieres lograr?]

### Prioridad Alta
1. 
2. 
3. 

### Prioridad Media
1. 
2. 

## Reflexión Personal
> [¿Cómo te sientes con tu progreso?]

**Estado emocional:** 
**Nivel de energía:** 
**Motivación:** 
**Notas adicionales:** `
        }
    },
    planificacion: {
        "Kanban de Proyecto": {
            icon: "📋",
            content: `# Proyecto: {titulo}

## Por hacer
- Definir objetivos del proyecto
- Investigar herramientas necesarias
- Crear timeline inicial
- Asignar recursos

## En proceso
- 

## Hecho
- Plantilla de proyecto creada`
        },
        "Planificación Semanal": {
            icon: "📅",
            content: `# Planificación Semanal: {fecha}

## Visión de la Semana
> [¿Cuál es tu enfoque principal esta semana?]

## Objetivos Prioritarios

### 🎯 Meta Principal
> [El objetivo más importante que DEBE completarse]

**Objetivo:** 
**Por qué es crítico:** 
**Entregables:** 
**Timeline:** 

### 🚀 Objetivos Secundarios
1. **Objetivo:** 
   **Timeline:** 
   **Notas:** 

2. **Objetivo:** 
   **Timeline:** 
   **Notas:** 

## Distribución Diaria

### Lunes
- [ ] 
- [ ] 

### Martes
- [ ] 
- [ ] 

### Miércoles
- [ ] 
- [ ] 

### Jueves
- [ ] 
- [ ] 

### Viernes
- [ ] 
- [ ] 

## Tracker de Hábitos

| Hábito | L | M | M | J | V | S | D |
|--------|---|---|---|---|---|---|---|
| Ejercicio | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Lectura | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Programación | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Meditación | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

## Notas y Reflexiones
> [Espacio para notas importantes]

## Revisión de Fin de Semana
**Fecha de revisión:** 
**Logros destacados:** 
**Lecciones aprendidas:** 
**Ajustes para próxima semana:** `
        },
        "Sprint Planning": {
            icon: "⚡",
            content: `# Sprint Planning: {titulo}

**Duración:** 2 semanas
**Fecha inicio:** {fecha}
**Fecha fin:** 

## Objetivo del Sprint
> [¿Qué valor entregará este sprint?]

## Historias Seleccionadas

### Historia 1: [Título]
- **Puntos:** 
- **Prioridad:** Alta/Media/Baja
- **Criterios de aceptación:**
  - [ ] 
  - [ ] 
  - [ ] 

### Historia 2: [Título]
- **Puntos:** 
- **Prioridad:** 
- **Criterios de aceptación:**
  - [ ] 
  - [ ] 

## Riesgos Identificados
- **Riesgo:** 
  **Probabilidad:** 
  **Impacto:** 
  **Mitigación:** 

## Capacidad del Sprint
- **Puntos disponibles:** 
- **Puntos comprometidos:** 
- **Velocidad histórica:** 

## Definition of Done
- [ ] Código escrito y revisado
- [ ] Tests unitarios pasando
- [ ] Documentación actualizada
- [ ] Deploy en staging exitoso`
        }
    },
    docs: {
        "Manual de Usuario": {
            icon: "📖",
            content: `# Manual de Usuario: {titulo}

## Introducción
> [Describe brevemente qué hace este sistema/herramienta]

## Instalación y Configuración

### Requisitos Previos
- 
- 
- 

### Pasos de Instalación
1. 
2. 
3. 

## Uso Básico

### Funcionalidad Principal
> [Explica cómo usar la función más importante]

1. 
2. 
3. 

### Funcionalidades Adicionales

#### Función A
- **Propósito:** 
- **Cómo usar:** 
- **Ejemplo:** 

#### Función B
- **Propósito:** 
- **Cómo usar:** 
- **Ejemplo:** 

## Solución de Problemas

### Error Común 1
**Síntoma:** 
**Causa:** 
**Solución:** 

### Error Común 2
**Síntoma:** 
**Causa:** 
**Solución:** 

## FAQ

**P: ¿Pregunta frecuente?**
R: Respuesta detallada

## Contacto y Soporte
- **Documentación:** 
- **Soporte técnico:** 
- **Comunidad:** `
        },
        "Rúbrica de Evaluación": {
            icon: "📊",
            content: `# Rúbrica de Evaluación: {titulo}

**Fecha:** {fecha}
**Evaluador:** 
**Evaluado:** 

## Criterios de Evaluación

### 1. Calidad Técnica (25%)

#### Excelente (4 puntos)
- Código limpio y bien estructurado
- Sigue mejores prácticas
- Documentación completa
- Tests comprehensivos

#### Bueno (3 puntos)
- Código mayormente limpio
- Algunas mejores prácticas aplicadas
- Documentación básica
- Tests parciales

#### Satisfactorio (2 puntos)
- Código funcional pero mejorable
- Pocas mejores prácticas
- Documentación mínima
- Tests básicos

#### Necesita Mejora (1 punto)
- Código difícil de mantener
- Sin mejores prácticas
- Sin documentación
- Sin tests

**Puntuación:** ___/4

### 2. Funcionalidad (25%)

#### Excelente (4 puntos)
- Todas las funcionalidades implementadas
- Manejo robusto de errores
- UX excepcional
- Performance optimizada

#### Bueno (3 puntos)
- Funcionalidades principales completas
- Manejo básico de errores
- UX buena
- Performance aceptable

#### Satisfactorio (2 puntos)
- Funcionalidades mínimas viables
- Manejo limitado de errores
- UX básica
- Performance suficiente

#### Necesita Mejora (1 punto)
- Funcionalidades incompletas
- Sin manejo de errores
- UX problemática
- Performance deficiente

**Puntuación:** ___/4

### 3. Proceso de Desarrollo (25%)

#### Excelente (4 puntos)
- Metodología clara aplicada
- Commits descriptivos frecuentes
- Branching strategy apropiada
- Code reviews realizadas

#### Bueno (3 puntos)
- Metodología parcialmente aplicada
- Commits regulares
- Uso básico de branches
- Reviews ocasionales

#### Satisfactorio (2 puntos)
- Proceso mínimo seguido
- Commits esporádicos
- Trabajo en main branch
- Sin reviews

#### Necesita Mejora (1 punto)
- Sin proceso definido
- Commits inconsistentes
- Sin control de versiones
- Sin colaboración

**Puntuación:** ___/4

### 4. Comunicación y Documentación (25%)

#### Excelente (4 puntos)
- Comunicación clara y oportuna
- Documentación completa
- Presentación profesional
- Feedback constructivo

#### Bueno (3 puntos)
- Comunicación regular
- Documentación adecuada
- Presentación clara
- Feedback útil

#### Satisfactorio (2 puntos)
- Comunicación básica
- Documentación mínima
- Presentación simple
- Feedback limitado

#### Necesita Mejora (1 punto)
- Comunicación deficiente
- Sin documentación
- Presentación unclear
- Sin feedback

**Puntuación:** ___/4

## Puntuación Total
**Total:** ___/16 puntos
**Porcentaje:** ___%

## Escala de Calificación
- 90-100%: Excelente
- 80-89%: Bueno
- 70-79%: Satisfactorio
- <70%: Necesita Mejora

## Comentarios y Recomendaciones

### Fortalezas Destacadas
- 
- 
- 

### Áreas de Mejora
- 
- 
- 

### Próximos Pasos Recomendados
1. 
2. 
3. 

## Firma y Fecha
**Evaluador:** ________________ **Fecha:** ______
**Evaluado:** ________________ **Fecha:** ______`
        },
        "Checklist de Calidad": {
            icon: "✅",
            content: `# Checklist de Calidad: {titulo}

**Fecha:** {fecha}
**Revisor:** 
**Proyecto/Módulo:** 

## 🔧 Código y Estructura

### Calidad del Código
- [ ] El código sigue las convenciones de nomenclatura establecidas
- [ ] Funciones y métodos tienen un propósito claro y único
- [ ] El código es legible y está bien comentado
- [ ] No hay código duplicado innecesario
- [ ] Variables y funciones tienen nombres descriptivos

### Arquitectura
- [ ] La estructura del proyecto es lógica y organizada
- [ ] Separación adecuada de responsabilidades
- [ ] Patrones de diseño aplicados correctamente
- [ ] Dependencias gestionadas apropiadamente

### Performance
- [ ] No hay bucles infinitos o ineficientes
- [ ] Uso adecuado de memoria
- [ ] Consultas a BD optimizadas (si aplica)
- [ ] Recursos liberados apropiadamente

## 🧪 Testing y Validación

### Tests Unitarios
- [ ] Cobertura de tests >= 80%
- [ ] Tests para casos edge identificados
- [ ] Tests fallan cuando deben fallar
- [ ] Mocks y stubs utilizados apropiadamente

### Tests de Integración
- [ ] Flujos principales testeados
- [ ] APIs externas mockeadas
- [ ] Base de datos en entorno de testing
- [ ] Configuración de CI/CD funcionando

### Testing Manual
- [ ] Happy path validado manualmente
- [ ] Casos de error probados
- [ ] UX/UI revisada en diferentes dispositivos
- [ ] Accessibility básica verificada

## 📝 Documentación

### Documentación Técnica
- [ ] README.md actualizado con instrucciones claras
- [ ] Comentarios en código para lógica compleja
- [ ] API documentada (si aplica)
- [ ] Arquitectura documentada

### Documentación de Usuario
- [ ] Manual de usuario disponible
- [ ] Screenshots/videos de demo actualizados
- [ ] FAQ con problemas comunes
- [ ] Información de contacto para soporte

## 🔒 Seguridad

### Autenticación y Autorización
- [ ] Passwords hasheadas correctamente
- [ ] Tokens con expiración apropiada
- [ ] Validación de permisos en todas las rutas
- [ ] Sesiones gestionadas seguramente

### Validación de Datos
- [ ] Input sanitización implementada
- [ ] Validación server-side para todos los inputs
- [ ] Protección contra inyección SQL
- [ ] Validación de archivos subidos

### Configuración
- [ ] Secrets no hardcodeados en el código
- [ ] Variables de entorno configuradas
- [ ] Logs no contienen información sensible
- [ ] HTTPS configurado en producción

## 🚀 Deployment y DevOps

### Preparación para Deploy
- [ ] Build process automatizado
- [ ] Configuración de entornos separados (dev/staging/prod)
- [ ] Scripts de migración de BD (si aplica)
- [ ] Monitoreo y logging configurado

### Backup y Recovery
- [ ] Estrategia de backup definida
- [ ] Plan de disaster recovery documentado
- [ ] Rollback procedure probado
- [ ] Monitoring de salud del sistema

## 📊 Business Logic

### Funcionalidad
- [ ] Todos los requisitos funcionales implementados
- [ ] Edge cases manejados apropiadamente
- [ ] Flujos de error implementados
- [ ] Validaciones de negocio aplicadas

### User Experience
- [ ] Interfaz intuitiva y fácil de usar
- [ ] Feedback apropiado al usuario
- [ ] Loading states implementados
- [ ] Mensajes de error útiles y claros

## ✨ Puntos Adicionales

### Innovation y Best Practices
- [ ] Uso de patrones modernos
- [ ] Consideración de escalabilidad futura
- [ ] Code review process seguido
- [ ] Continuous improvement aplicado

## 📋 Resumen de Revisión

### Estadísticas
- **Total ítems:** 
- **Ítems completados:** 
- **Porcentaje completado:** __%
- **Ítems críticos pendientes:** 

### Estado General
- [ ] ✅ Aprobado - Listo para producción
- [ ] ⚠️ Aprobado con observaciones - Monitorear en producción
- [ ] ❌ Rechazado - Requiere cambios antes de deploy

### Comentarios del Revisor
> [Observaciones generales, recomendaciones y próximos pasos]

### Próximas Acciones Requeridas
1. 
2. 
3. 

**Revisión completada por:** ________________
**Fecha:** ________________
**Próxima revisión programada:** ________________`
        }
    },
    recursos: {
        "Enlaces de Desarrollo": {
            icon: "🔗",
            content: `# Enlaces de Desarrollo: {titulo}

**Fecha:** {fecha}
**Categoría:** 

## 🛠️ Herramientas de Desarrollo

### IDEs y Editores
- [Visual Studio Code](https://code.visualstudio.com/) - Editor principal
- [JetBrains Suite](https://www.jetbrains.com/) - IDEs especializados
- [Vim](https://www.vim.org/) - Editor de terminal

### Control de Versiones
- [Git Documentation](https://git-scm.com/docs) - Documentación oficial
- [GitHub](https://github.com/) - Repositorios remotos
- [GitLab](https://gitlab.com/) - Alternativa con CI/CD integrado

## 📚 Documentación y Aprendizaje

### Documentación Oficial
- [MDN Web Docs](https://developer.mozilla.org/) - Web technologies
- [React Documentation](https://reactjs.org/docs/) - React framework
- [Node.js Docs](https://nodejs.org/docs/) - Backend JavaScript

### Tutoriales y Cursos
- [freeCodeCamp](https://www.freecodecamp.org/) - Cursos gratuitos
- [Codecademy](https://www.codecademy.com/) - Cursos interactivos
- [Udemy](https://www.udemy.com/) - Cursos pagos especializados

## Notas Personales
> [Agrega tus enlaces favoritos y notas específicas]

### Mis Favoritos
- 
- 
- 

### Para Explorar Más Tarde
- 
- 
- 

## 📅 Última Actualización
**Fecha:** {fecha}
**Próxima revisión:** `
        },
        "Criterios de Progresión": {
            icon: "🎯",
            content: `# Criterios de Progresión: {titulo}

**Programa/Curso:** 
**Fecha:** {fecha}
**Nivel actual:** 

## 🎯 Niveles de Competencia

### Nivel 1: Principiante
**Objetivo:** Familiarización con conceptos básicos

#### Conocimientos Requeridos
- [ ] Comprende conceptos fundamentales
- [ ] Conoce sintaxis básica del lenguaje/herramienta
- [ ] Entiende estructuras de datos básicas
- [ ] Familiarizado con terminología esencial

#### Habilidades Prácticas
- [ ] Puede escribir programas simples
- [ ] Resuelve problemas básicos con ayuda
- [ ] Usa herramientas básicas de desarrollo
- [ ] Sigue tutoriales paso a paso exitosamente

#### Proyectos de Validación
- [ ] Calculadora básica
- [ ] Lista de tareas simple
- [ ] Página web estática
- [ ] Script de automatización básico

#### Tiempo Estimado: 2-4 semanas

---

### Nivel 2: Intermedio
**Objetivo:** Aplicación independiente de conocimientos

#### Conocimientos Requeridos
- [ ] Comprende patrones de diseño básicos
- [ ] Conoce mejores prácticas de desarrollo
- [ ] Entiende conceptos de testing
- [ ] Familiarizado con control de versiones

#### Habilidades Prácticas
- [ ] Desarrolla aplicaciones funcionales sin ayuda
- [ ] Debuggea problemas complejos
- [ ] Implementa tests unitarios básicos
- [ ] Colabora efectivamente en equipos

#### Proyectos de Validación
- [ ] API REST completa con CRUD
- [ ] Aplicación web con base de datos
- [ ] Aplicación móvil básica
- [ ] Sistema de autenticación

#### Tiempo Estimado: 6-8 semanas

## 🎯 Plan de Progresión Personal

### Estado Actual
**Nivel:** 
**Fecha de evaluación:** 
**Evaluador:** 

### Competencias por Mejorar
1. **Competencia:** 
   **Nivel actual:** 
   **Nivel objetivo:** 
   **Timeline:** 

2. **Competencia:** 
   **Nivel actual:** 
   **Nivel objetivo:** 
   **Timeline:** 

### Recursos de Aprendizaje Recomendados
- **Cursos:** 
- **Libros:** 
- **Proyectos práticos:** 
- **Mentorías:** 

## 📅 Cronograma de Revisiones
- **Revisión inicial:** 
- **Revisión intermedia:** 
- **Revisión final:** 
- **Certificación:** `
        }
    }
};

// Iconos unicode para carpetas
const folderIcons = {
    dde: "📁", 
    planificacion: "🗂️", 
    docs: "📄", 
    recursos: "📝"
};

// Elementos del DOM
const folderListEl = document.getElementById('folder-list');
const fileListEl = document.getElementById('file-list');
const currentFolderEl = document.getElementById('current-folder');
const editorContainerEl = document.getElementById('editor-container');
const fileContentEl = document.getElementById('file-content');
const btnGuardar = document.getElementById('btn-guardar');
const btnCerrarEditor = document.getElementById('btn-cerrar-editor');
const btnNuevaEntrada = document.getElementById('btn-nueva-entrada');
const btnSincronizar = document.getElementById('btn-sincronizar');
const modalNuevaEntrada = document.getElementById('modal-nueva-entrada');
const formNuevaEntrada = document.getElementById('form-nueva-entrada');
const formCampos = document.getElementById('form-campos');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');
const kanbanContainer = document.getElementById('kanban-container');

let carpetas = [];
let archivos = [];
let carpetaActiva = null;
let archivoActivo = null;
let esArchivoNuevo = false;

// ESTADO DEL MODAL - Variables globales para mejor control
let modalState = {
    isOpen: false,
    selectedTemplate: null,
    formVisible: false
};

// Función para reemplazar placeholders en templates
function processTemplate(content, title) {
    const now = new Date();
    const fecha = now.toISOString().slice(0, 10);
    return content
        .replace(/{titulo}/g, title || 'Nuevo Documento')
        .replace(/{fecha}/g, fecha);
}

// Carga carpetas de primer nivel
async function cargarCarpetas() {
  carpetas = await window.api.listarCarpetas();
  folderListEl.innerHTML = '';
  carpetas.forEach(carpeta => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="icon">${folderIcons[carpeta] || '📁'}</span>${carpeta}`;
    li.dataset.carpeta = carpeta;
    li.addEventListener('click', () => seleccionarCarpeta(carpeta, li));
    folderListEl.appendChild(li);
  });
}

// Selecciona carpeta y lista archivos markdown
async function seleccionarCarpeta(carpeta, liElemento) {
  carpetaActiva = carpeta;
  archivoActivo = null;
  esArchivoNuevo = false;
  currentFolderEl.textContent = carpeta;
  editorContainerEl.classList.add('hidden');
  kanbanContainer.classList.add('hidden');

  // Resaltar carpeta seleccionada
  Array.from(folderListEl.children).forEach(li => li.classList.remove('selected'));
  liElemento.classList.add('selected');

  archivos = await window.api.listarArchivos(carpeta);
  fileListEl.innerHTML = '';
  archivos.forEach(archivo => {
    const li = document.createElement('li');
    li.textContent = archivo;
    li.dataset.archivo = archivo;
    li.addEventListener('click', () => abrirArchivo(archivo, li));
    fileListEl.appendChild(li);
  });
}

// Abre archivo para editar o vista Kanban
async function abrirArchivo(archivo, liElemento) {
  archivoActivo = archivo;
  esArchivoNuevo = false;

  // Resaltar archivo seleccionado
  Array.from(fileListEl.children).forEach(li => li.classList.remove('selected'));
  liElemento.classList.add('selected');

  const contenido = await window.api.leerArchivo(carpetaActiva, archivo);

  // Detectar vista Kanban si tiene encabezados h2 específicos
  if (esKanban(contenido)) {
    mostrarKanban(contenido);
  } else {
    mostrarEditor(contenido);
  }
}

// Muestra editor para texto plano
function mostrarEditor(contenido) {
  kanbanContainer.classList.add('hidden');
  editorContainerEl.classList.remove('hidden');
  fileContentEl.value = contenido;
  fileContentEl.focus();
}

// Detecta si el archivo contiene los encabezados Kanban
function esKanban(texto) {
  // Busca encabezados H2 "## Por hacer", "## En proceso", "## Hecho"
  const regex = /^##\s*(Por hacer|En proceso|Hecho)$/gim;
  const matches = texto.match(regex);
  return matches && matches.length >= 3;
}

// Renderiza contenido en formato Kanban interactivo
function mostrarKanban(texto) {
  editorContainerEl.classList.add('hidden');
  kanbanContainer.classList.remove('hidden');
  kanbanContainer.innerHTML = '';

  // Extraer secciones Kanban
  const secciones = {
    'Por hacer': [],
    'En proceso': [],
    'Hecho': []
  };

  // Dividir texto por líneas
  const lines = texto.split('\n');
  let currentSection = null;

  lines.forEach(line => {
    const headerMatch = line.match(/^##\s*(Por hacer|En proceso|Hecho)$/i);
    if (headerMatch) {
      currentSection = headerMatch[1];
    } else if (currentSection && line.trim().startsWith('- ')) {
      secciones[currentSection].push(line.trim().slice(2));
    }
  });

  // Crear columnas Kanban
  Object.keys(secciones).forEach(colName => {
    const column = document.createElement('div');
    column.classList.add('kanban-column');
    column.dataset.status = colName;

    const title = document.createElement('h3');
    title.textContent = colName;
    column.appendChild(title);

    secciones[colName].forEach(task => {
      const item = document.createElement('div');
      item.classList.add('kanban-item');
      item.textContent = task;
      item.draggable = true;

      // Drag and drop handlers para interacción básica
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);

      column.appendChild(item);
    });

    // Columnas como drop targets
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);

    kanbanContainer.appendChild(column);
  });
}

// Variables globales para drag&drop
let draggedItem = null;
function dragStart(e) {
  draggedItem = this;
  setTimeout(() => this.style.display = 'none', 0);
}
function dragEnd(e) {
  this.style.display = 'block';
  draggedItem = null;
}
function dragOver(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  if (draggedItem) {
    this.appendChild(draggedItem);
    guardarKanbanActual();
  }
}

// Al guardar Kanban, reconstruir markdown y guardar archivo
async function guardarKanbanActual() {
  if (!carpetaActiva || !archivoActivo) return;

  let nuevoContenido = '';

  // Reconstruir markdown Kanban
  Array.from(kanbanContainer.children).forEach(column => {
    const status = column.dataset.status;
    nuevoContenido += `## ${status}\n`;
    Array.from(column.querySelectorAll('.kanban-item')).forEach(item => {
      nuevoContenido += `- ${item.textContent}\n`;
    });
    nuevoContenido += '\n';
  });

  const exito = await window.api.guardarArchivo(carpetaActiva, archivoActivo, nuevoContenido, false);
  if (!exito) {
    alert('Error al guardar el tablero Kanban.');
  }
}

// === SISTEMA DE MODAL SIMPLIFICADO Y ESTABLE ===

function resetModalState() {
  modalState.isOpen = false;
  modalState.selectedTemplate = null;
  modalState.formVisible = false;
}

// MODAL ULTRA-SIMPLIFICADO - SIN COMPLEJIDADES
function mostrarModalNuevaEntrada() {
  if (!carpetaActiva) {
    alert('Seleccione una carpeta primero.');
    return;
  }

  console.log('🚀 Abriendo modal para:', carpetaActiva);
  
  // LIMPIEZA SIMPLE
  resetModalState();
  modalState.isOpen = true;
  formCampos.innerHTML = '';
  
  const folderTemplates = templates[carpetaActiva] || {};
  
  // CREAR TODO DE UNA VEZ, SIN COMPLEJIDADES
  const html = `
    <div class="template-selector">
      <h4>🎯 Seleccionar Plantilla para ${carpetaActiva.toUpperCase()}</h4>
      <div class="template-grid">
        ${Object.entries(folderTemplates).map(([name, template]) => `
          <div class="template-card" data-template="${name}">
            <div class="template-icon">${template.icon}</div>
            <div class="template-name">${name}</div>
          </div>
        `).join('')}
        <div class="template-card" data-template="custom">
          <div class="template-icon">📝</div>
          <div class="template-name">Documento Personalizado</div>
        </div>
      </div>
    </div>
    
    <div style="margin-top: 1.5rem;">
      <label for="titulo-simple">Título del Documento:</label>
      <input 
        type="text" 
        id="titulo-simple" 
        placeholder="Selecciona una plantilla y escribe el título..." 
        style="
          width: 100%;
          padding: 12px;
          margin-top: 8px;
          border: 1px solid #3a3d41;
          border-radius: 6px;
          background: #1e1e1e;
          color: #d4d4d4;
          font-size: 14px;
          font-family: inherit;
        "
      >
      
      <div id="content-simple" style="display: none; margin-top: 1rem;">
        <label for="contenido-simple">Contenido:</label>
        <textarea 
          id="contenido-simple" 
          rows="4"
          placeholder="Contenido personalizado (opcional)"
          style="
            width: 100%;
            padding: 12px;
            margin-top: 8px;
            border: 1px solid #3a3d41;
            border-radius: 6px;
            background: #1e1e1e;
            color: #d4d4d4;
            font-size: 14px;
            font-family: inherit;
            resize: vertical;
          "
        ></textarea>
      </div>
      
      <div id="preview-simple" style="margin-top: 1rem;">
        <p style="color: #9ca3af; font-style: italic;">👆 Selecciona una plantilla arriba</p>
      </div>
    </div>
  `;
  
  formCampos.innerHTML = html;
  modalNuevaEntrada.classList.remove('hidden');
  
  // CONFIGURACIÓN INMEDIATA Y DIRECTA - SIN DELAYS
  const cards = formCampos.querySelectorAll('.template-card');
  const input = document.getElementById('titulo-simple');
  const contentArea = document.getElementById('content-simple');
  const preview = document.getElementById('preview-simple');
  
  // CONFIGURAR EVENT LISTENERS INMEDIATAMENTE
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Limpiar selección
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      
      modalState.selectedTemplate = card.dataset.template;
      
      if (modalState.selectedTemplate === 'custom') {
        contentArea.style.display = 'block';
        preview.innerHTML = '<p style="color: #9ca3af; font-style: italic;">📝 Documento personalizado</p>';
      } else {
        contentArea.style.display = 'none';
        preview.innerHTML = `<p style="color: #9ca3af; font-style: italic;">✨ Plantilla: <strong>${modalState.selectedTemplate}</strong></p>`;
      }
      
      // FOCUS INMEDIATO Y ÚNICO
      input.placeholder = 'Escribe el título del documento';
      setTimeout(() => input.focus(), 0); // Un solo timeout mínimo para evitar conflictos de focus
      
      console.log('✅ Plantilla seleccionada:', modalState.selectedTemplate);
    });
  });
  
  // FOCUS INICIAL INMEDIATO
  input.focus();
  console.log('✅ Modal configurado instantáneamente');

}

// Crear nuevo archivo con plantilla seleccionada - VERSIÓN ULTRA-SIMPLE
async function crearNuevaEntrada(event) {
  event.preventDefault();

  // VALIDACIONES SIMPLES
  if (!modalState.selectedTemplate) {
    alert('⚠️ Seleccione una plantilla primero.');
    return;
  }

  // OBTENER VALORES CON EL NUEVO ID
  const tituloInput = document.getElementById('titulo-simple');
  const titulo = tituloInput ? tituloInput.value.trim() : '';
  
  if (!titulo) {
    alert('⚠️ Ingrese un título para el documento.');
    if (tituloInput) {
      tituloInput.focus();
    }
    return;
  }

  // PROCESAR CONTENIDO
  const tituloLimpio = titulo.replace(/[<>:"/\\|?*]/g, '-');
  let contenido = '';
  let nombreArchivo = '';

  try {
    if (modalState.selectedTemplate === 'custom') {
      const contenidoInput = document.getElementById('contenido-simple');
      const contenidoTexto = contenidoInput ? contenidoInput.value.trim() : '';
      contenido = `# ${tituloLimpio}\n\n${contenidoTexto}\n`;
      nombreArchivo = `${carpetaActiva.toUpperCase()}_${new Date().toISOString().slice(0, 10)}_${tituloLimpio.replace(/\s+/g, '_')}.md`;
    } else {
      const template = templates[carpetaActiva][modalState.selectedTemplate];
      if (!template) {
        throw new Error(`Plantilla '${modalState.selectedTemplate}' no encontrada`);
      }
      contenido = processTemplate(template.content, tituloLimpio);
      nombreArchivo = `${modalState.selectedTemplate.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}_${tituloLimpio.replace(/\s+/g, '_')}.md`;
    }

    // GUARDAR
    const exito = await window.api.guardarArchivo(carpetaActiva, nombreArchivo, contenido, true);
    if (exito) {
      console.log('✅ Archivo creado:', nombreArchivo);
      cerrarModal();
      cargarArchivosYPulsar(carpetaActiva, nombreArchivo);
    } else {
      throw new Error('Error al guardar archivo');
    }
  } catch (error) {
    console.error('❌ Error:', error);
    alert(`❌ Error: ${error.message}`);
  }
}

function cerrarModal() {
  modalNuevaEntrada.classList.add('hidden');
  resetModalState();
  formCampos.innerHTML = '';
  console.log('✅ Modal cerrado');
}

// Event listeners principales
btnCerrarModal.addEventListener('click', cerrarModal);
btnNuevaEntrada.addEventListener('click', mostrarModalNuevaEntrada);
formNuevaEntrada.addEventListener('submit', crearNuevaEntrada);

// CERRAR MODAL CON TECLA ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalState.isOpen) {
    cerrarModal();
  }
  
  // ATAJO PARA DEVTOOLS - Ctrl+Shift+I
  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
    if (window.api && window.api.openDevTools) {
      window.api.openDevTools();
    } else {
      console.log('🔧 Para abrir DevTools: Menú de Electron > View > Toggle Developer Tools');
    }
  }
});

// Cerrar editor
btnCerrarEditor.addEventListener('click', () => {
  editorContainerEl.classList.add('hidden');
  archivoActivo = null;
  // Deseleccionar archivo en la lista
  Array.from(fileListEl.children).forEach(li => li.classList.remove('selected'));
});

// Guardar archivo (desde editor o Kanban)
btnGuardar.addEventListener('click', async () => {
  if (!carpetaActiva) return;

  if (kanbanContainer.classList.contains('hidden')) {
    // Guardar texto plano
    const contenido = fileContentEl.value;
    const nombreArchivo = esArchivoNuevo
      ? `Entrada_${new Date().toISOString().slice(0, 10)}.md`
      : archivoActivo;

    if (!nombreArchivo) {
      alert('Seleccione o cree un archivo primero.');
      return;
    }

    const exito = await window.api.guardarArchivo(carpetaActiva, nombreArchivo, contenido, esArchivoNuevo);
    if (exito) {
      alert('Archivo guardado correctamente.');
      if (esArchivoNuevo) cargarArchivosYPulsar(carpetaActiva, nombreArchivo);
      esArchivoNuevo = false;
    } else {
      alert('Error al guardar el archivo.');
    }
  } else {
    // Guardar Kanban (se guarda automáticamente en drop)
    alert('Los cambios en el tablero Kanban se guardan automáticamente.');
  }
});

// Cargar archivos y abrir uno automáticamente
async function cargarArchivosYPulsar(carpeta, archivo) {
  archivos = await window.api.listarArchivos(carpeta);
  fileListEl.innerHTML = '';
  archivos.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    li.dataset.archivo = f;
    li.addEventListener('click', () => abrirArchivo(f, li));
    if (f === archivo) li.classList.add('selected');
    fileListEl.appendChild(li);
  });
  
  // FIX: Verificar que existe el elemento antes de pasarlo a abrirArchivo
  const selectedLi = fileListEl.querySelector('li.selected');
  if (selectedLi) {
    abrirArchivo(archivo, selectedLi);
  } else {
    console.log('⚠️ No se encontró elemento selected, archivo creado pero no abierto');
  }
}

// Manejar botón Sincronizar
btnSincronizar.addEventListener('click', async () => {
  btnSincronizar.disabled = true;
  btnSincronizar.textContent = 'Sincronizando...';
  const resultado = await window.api.syncGit();
  if (!resultado.success) {
    alert('Error al sincronizar: ' + resultado.error);
  }
  btnSincronizar.textContent = 'Sincronizar';
  btnSincronizar.disabled = false;
});

// Al cargar la app
window.addEventListener('DOMContentLoaded', () => {
  cargarCarpetas();
  
  // FUNCIÓN DE TEST SIMPLE
  window.testInput = function() {
    const input = document.getElementById('titulo-simple');
    if (input) {
      console.log('🧪 Test del input:');
      console.log('  - Encontrado:', !!input);
      console.log('  - Visible:', input.offsetWidth > 0);
      console.log('  - Valor actual:', input.value);
      
      input.focus();
      input.value = 'TEST ' + Date.now();
      
      console.log('  - Valor después:', input.value);
      console.log('  - Tiene focus:', document.activeElement === input);
    } else {
      console.log('❌ Input no encontrado');
    }
  };
  
  console.log('🧪 Función testInput() disponible. Ejecuta testInput() en la consola para probar.');
});
