const Payment = require('../models/Payment');

// Obtener todos los pagos registrados
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('cliente', 'nombre');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Registrar un nuevo pago
exports.createPayment = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json({ ok: true, msg: 'Pago registrado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un registro de pago (por si hubo error)
exports.deletePayment = async (req, res) => {
    try {
        const deleted = await Payment.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'Pago no encontrado' });
        res.json({ msg: 'Registro de pago eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};