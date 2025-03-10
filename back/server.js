const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); 
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

app.get('/api/people/:id', (req, res) => {
  const id = req.params.id; 
  fetch(`https://www.swapi.tech/api/people`)
    .then(response => response.json())
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al obtener datos', error: error.message });
    });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
