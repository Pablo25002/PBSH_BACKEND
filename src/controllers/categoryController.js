const Category = require('../models/Category');

// Obtener todas las categorías
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json({ ok: true, msg: 'Categoría creada con éxito' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ ok: false, msg: 'Esta categoría ya existe' });
        }
        res.status(500).json({ error: error.message });
    }
};

// Actualizar categoría
exports.updateCategory = async (req, res) => {
    try {
        const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Categoría no encontrada' });
        res.json({ ok: true, msg: 'Categoría actualizada', updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar categoría
exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Category.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'Categoría no encontrada' });
        res.json({ msg: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};