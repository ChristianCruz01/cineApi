const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: Date,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },

  contrasena: {
    type: String,
    required: true,
  },
  nombre_Usuario: {
    type: String,
    required: true,
  },
  clientes: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
