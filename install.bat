@echo off
REM install.bat - Script de instalación para Gestor360V7 (Windows)
REM Fecha: 2025-01-13

echo ========================================
echo   Instalando Gestor360V7...
echo ========================================
echo.

REM Verificar Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js no esta instalado.
    echo Por favor instale Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)

echo OK: Node.js detectado
node --version
echo.

REM Verificar npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm no esta instalado.
    pause
    exit /b 1
)

echo OK: npm detectado
npm --version
echo.

REM Instalar dependencias
echo Instalando dependencias...
echo.
npm install

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   Instalacion completada exitosamente!
    echo ========================================
    echo.
    echo Para iniciar la aplicacion:
    echo   - Haga doble clic en ejecutar.bat
    echo   - O ejecute: npm start
    echo.
    echo Para mas informacion, lea INFORME_MEJORAS_2025-01-13.md
    echo.
) else (
    echo.
    echo ERROR: Hubo un problema durante la instalacion.
    echo Verifique los mensajes de error arriba.
    echo.
)

pause
