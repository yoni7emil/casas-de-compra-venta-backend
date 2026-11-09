const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['client', 'seller', 'admin'], 
        default: 'client' 
    },
    phone: { 
        type: String, 
        default: '' 
    },
    location: {
        city: { type: String, default: '' },
        state: { type: String, default: '' }
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: false },
    versionKey: false
});

// Middleware (Hook) para hashear la contraseña antes de guardarla en la base de datos
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);