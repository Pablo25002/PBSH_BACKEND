const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
    try {
        const count = await User.estimatedDocumentCount();
        if (count > 0) return;

        const hashedPassword = await bcrypt.hash("admin123", 10); // Encriptamos la clave

        const admin = new User({
            username: "admin",
            email: "admin@pbsh.com",
            password: hashedPassword
        });

        await admin.save();
        console.log('👤 Usuario Admin creado con éxito');
    } catch (error) {
        console.error('Error al crear el admin inicial:', error);
    }
};// Al final de initialSetup.js
module.exports = {
    createAdmin
};