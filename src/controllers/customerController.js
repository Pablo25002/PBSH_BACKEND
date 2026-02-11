const Customer = require('../models/Customer');

// Obtener todos los clientes
exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un cliente
exports.createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json({ ok: true, msg: 'Cliente creado con éxito' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ ok: false, errores });
        }
        if (error.code === 11000) {
            return res.status(400).json({ ok: false, errores: ['El correo ya está registrado'] });
        }
        res.status(500).json({ error: error.message });
    }
};

// Actualizar cliente
exports.updateCustomer = async (req, res) => {
    try {
        const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Cliente no encontrado' });
        res.json({ ok: true, msg: 'Cliente actualizado', updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar cliente
exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'Cliente no encontrado' });
        res.json({ msg: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};