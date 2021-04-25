const { Schema, model } = require( 'mongoose' );

const FiloShema = Schema({
    nombre: {
        type: String,
        required: [ true, 'El nombre es obligatorio' ],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    reino: {
        type: Schema.Types.ObjectId,
        ref: 'Reino',
        required: true
    }
});

module.exports = model( 'Filo', FiloShema );