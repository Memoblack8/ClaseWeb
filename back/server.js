const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch').default;
const app = express();

app.use(cors({
  origin: 'http://localhost:4200'  
}));

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        res.json({ mensaje: 'Login exitoso', token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
});

app.get('/api/people', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const response = await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener datos de SWAPI: ${response.statusText}`);
    }
    
    const data = await response.json();

    console.log(data);  // Verifica qué se está devolviendo aquí

    res.json({
      results: data.results,
      total_records: data.count,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos', error: error.message });
  }
});



app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
