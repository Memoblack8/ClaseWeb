const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        res.json({ mensaje: 'Login exitoso', token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
