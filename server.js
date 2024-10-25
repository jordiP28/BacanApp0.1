const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB(); // Conectar a la base de datos

app.use(express.json()); // Middleware para parsear JSON

// Importa las rutas de usuarios
const userRoutes = require('./routes/auth'); // Asegúrate de que la ruta sea correcta

// Configura las rutas
app.use('/api/auth', userRoutes); // Rutas para manejar usuarios

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

