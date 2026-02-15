const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: [true, 'El título de la nota es obligatorio'],
        trim: true
    },
    contenido: { 
        type: String, 
        required: [true, 'El contenido de la nota no puede estar vacío'] 
    },
    prioridad: { 
        type: String,
        enum: ['Baja', 'Media', 'Alta'],
        default: 'Media'
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);