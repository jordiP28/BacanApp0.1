const express = require('express');
const User = require('../models/User'); // Asegúrate de que esta ruta sea correcta
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
console.log('auth.js cargado');


const router = express.Router();

// Ruta para registro de usuarios
router.post('/register', async (req, res) => {
    const { nombre, correo, celular, contraseña } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const user = new User({ nombre, correo, celular, contraseña: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});

// Ruta para inicio de sesión
router.post('/login', async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const user = await User.findOne({ correo });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(contraseña, user.contraseña);
        if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el inicio de sesión', error });
    }
});


module.exports = router;
