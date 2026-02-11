const Note = require('../models/Note');

// Obtener todas las notas
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Las más recientes primero
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva nota
exports.createNote = async (req, res) => {
    try {
        const newNote = new Note(req.body);
        await newNote.save();
        res.status(201).json({ ok: true, msg: 'Nota guardada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar nota
exports.updateNote = async (req, res) => {
    try {
        const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Nota no encontrada' });
        res.json({ ok: true, msg: 'Nota actualizada', updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar nota
exports.deleteNote = async (req, res) => {
    try {
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'Nota no encontrada' });
        res.json({ msg: 'Nota eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};