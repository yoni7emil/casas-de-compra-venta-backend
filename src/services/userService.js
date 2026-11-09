const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Registrar un nuevo usuario (el hook del modelo se encarga de hashear la password)
const registerUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Buscar un usuario por su correo electrónico
const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Validar credenciales para el inicio de sesión
const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Credenciales inválidas');
    }

    return user;
};

module.exports = {
    registerUser,
    getUserByEmail,
    authenticateUser
};