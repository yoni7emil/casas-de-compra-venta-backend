const userService = require('../services/userService');
const jwt = require('jsonwebtoken'); // 👈 1. Importar jsonwebtoken

const register = async (req, res) => {
    try {
        const newUser = await userService.registerUser(req.body);
        // Ocultar la contraseña en la respuesta por seguridad
        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: userResponse
        });
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar el usuario', details: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.authenticateUser(email, password);
        
        // 👈 2. Generar el Token JWT
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token, // 👈 3. Enviar el token en la respuesta
            userId: user._id,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(401).json({ error: 'Credenciales inválidas', details: error.message });
    }
};

module.exports = {
    register,
    login
};