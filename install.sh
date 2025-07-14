#!/bin/bash
# install.sh - Script de instalación para Gestor360V7
# Fecha: 2025-01-13

echo "🚀 Instalando Gestor360V7..."
echo "================================"

# Verificar Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Por favor instale Node.js primero."
    echo "Visite: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"

# Verificar npm
if ! command -v npm &> /dev/null
then
    echo "❌ npm no está instalado."
    exit 1
fi

echo "✅ npm detectado: $(npm --version)"

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

# Verificar instalación
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Instalación completada exitosamente!"
    echo ""
    echo "🎯 Para iniciar la aplicación, ejecute:"
    echo "   npm start"
    echo ""
    echo "📚 Para más información, lea INFORME_MEJORAS_2025-01-13.md"
else
    echo ""
    echo "❌ Error durante la instalación. Verifique los mensajes de error arriba."
    exit 1
fi
