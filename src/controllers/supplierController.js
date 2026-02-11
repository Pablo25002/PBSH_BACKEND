const Supplier = require('../models/Supplier');

// Obtener todos los proveedores
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo proveedor
exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json({ ok: true, msg: 'Proveedor registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar proveedor
exports.updateSupplier = async (req, res) => {
    try {
        const updated = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Proveedor no encontrado' });
        res.json({ ok: true, msg: 'Datos del proveedor actualizados', updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar proveedor
exports.deleteSupplier = async (req, res) => {
    try {
        const deleted = await Supplier.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'Proveedor no encontrado' });
        res.json({ msg: 'Proveedor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};