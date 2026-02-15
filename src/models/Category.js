const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre de la categoría es obligatorio'],
        unique: true,
        trim: true
    },
    descripcion: { 
        type: String,
        trim: true
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);