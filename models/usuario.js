{
    nombre: 'animal'
}

const { Schema, model} = require('mongoose');

const UsuarioShema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        require: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    rol: {
        type: String,
        require: true,
        enum: ['ADMIN_ROLL','USER_ROLL']
    },
    estado: {
        type: Boolean,
        default: true,
    }
});

module.exports = model( 'Usuario', UsuarioShema );