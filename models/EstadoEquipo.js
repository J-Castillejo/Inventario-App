const {Schema, model} = require ('mongoose');

const EstadoEquipoSchema = Schema ({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        emun: [
            'Activo',
            'Inactivo',
        ]
    },
    fechaCreacion:{
        type: Date,
        required: true,
    },
    fechaActualizacion:{
        type: Date,
        required: true,
    }
});

module.exports = model('EstadoEquipo', EstadoEquipoSchema);