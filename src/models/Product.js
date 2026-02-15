const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    codigoSKU: { 
        type: String, 
        required: [true, 'El SKU es obligatorio'],
        unique: true 
    },
    categoria: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
    },
    precioVenta: { 
        type: Number, 
        required: true,
        default: 0 
    },
    stock: { 
        type: Number, 
        required: true,
        default: 0 
    },
    descripcion: { 
        type: String 
    },
    estado: { 
        type: String, 
        enum: ['Disponible', 'Agotado'], 
        default: 'Disponible' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);