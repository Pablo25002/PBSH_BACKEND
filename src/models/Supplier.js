const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre del proveedor es obligatorio'],
        trim: true
    },
    contacto: { 
        type: String, 
        required: [true, 'El nombre de la persona de contacto es obligatorio'] 
    },
    telefono: { 
        type: String,
        required: [true, 'El teléfono es obligatorio']
    },
    correo: { 
        type: String,
        trim: true,
        lowercase: true
    },
    direccion: { 
        type: String 
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', SupplierSchema);