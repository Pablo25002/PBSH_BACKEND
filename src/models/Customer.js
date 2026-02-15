const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre del cliente es obligatorio'] 
    },
    correo: { 
        type: String, 
        required: [true, 'El correo es obligatorio'], 
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    },
    telefono: { 
        type: String 
    },
    estado: { 
        type: String, 
        enum: ['Activo', 'Inactivo'], 
        default: 'Activo' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);