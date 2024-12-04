const express = require('express');
const path = require('path');
const app = express();

// Configurar middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definir una ruta para la página principal (pista.html en este caso)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pista2.html'));
});


// Escuchar en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});
