const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.DATABASE_URL;
        
        console.log("LOG: La URI cargada es:", uri); 

        if (!uri) {
            throw new Error("No se pudo leer la DATABASE_URL del archivo .env");
        }

        await mongoose.connect(uri);
        console.log(' Base de datos conectada en MongoDB Atlas');
    } catch (error) {
        console.error(' Error al conectar a la base de datos:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;