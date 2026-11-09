const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    seller_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    category_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
    },
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    condition: { 
        type: String, 
        enum: ['new', 'used'], 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['active', 'paused', 'sold'], 
        default: 'active' 
    },
    images: [{ 
        type: String 
    }]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: false },
    versionKey: false
});

module.exports = mongoose.model('Product', productSchema);