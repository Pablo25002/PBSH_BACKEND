const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    cliente: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer', 
        required: [true, 'El cliente es obligatorio para registrar un pago'] 
    },
    monto: { 
        type: Number, 
        required: [true, 'El monto es obligatorio'],
        min: [0, 'El monto no puede ser negativo']
    },
    metodoPago: { 
        type: String, 
        enum: ['Efectivo', 'Transferencia', 'Tarjeta', 'Otro'], 
        default: 'Efectivo' 
    },
    referencia: { 
        type: String, 
        trim: true // Para números de comprobante o transferencia
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    notas: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);