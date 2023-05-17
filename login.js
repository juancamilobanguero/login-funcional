const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb+srv://juancamilo:camilo2004@cluster0.hxtexaa.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.error(err));

// Definición del esquema de la colección
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String
});

// Definición del modelo de la colección
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Manejo del envío del formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Detener el envío del formulario

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const nuevoUsuario = new Usuario({ nombre, email, password });

  // Guardar el usuario en la base de datos
  nuevoUsuario.save()
    .then(() => console.log('Usuario guardado en la base de datos'))
    .catch((err) => console.error(err));
});
