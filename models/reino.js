{
    nombre: 'animal'
}

const { Schema, model } = require( 'mongoose' );

const ReinoShema = Schema({
    nombre: {
        type: String,
        require: [ true, 'El nombre es obligatorio' ],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
    }
});

module.exports = model( 'Reino', ReinoShema );