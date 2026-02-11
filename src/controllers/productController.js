const Product = require('../models/Product');

// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('categoria', 'nombre');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ ok: true, msg: 'Producto agregado al inventario' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ ok: false, msg: 'El código SKU ya existe' });
        }
        res.status(500).json({ error: error.message });
    }
};

// Actualizar producto
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Producto no encontrado' });
        res.json({ ok: true, msg: 'Producto actualizado', updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar producto
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Producto eliminado del sistema' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};