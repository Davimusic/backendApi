// server.js
const express = require('express');
const app = express();
const port = 3001;

// Configurar CORS para permitir todas las solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.get('/api/saludar', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

