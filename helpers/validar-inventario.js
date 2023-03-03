const validarInventario = (req) => {
    const validaciones = [];
    
    if (!req.body.serial) {
        validaciones.push ('Serial es requerido');
    }

    if (!req.body.modelo) {
        validaciones.push ('Modelo es requerido');
    }

    if (!req.body.descripcion) {
        validaciones.push ('Descripcion es requerida');
    }

    if (!req.body.foto) {
        validaciones.push ('Foto es requerida');
    }

    if (!req.body.fechacompra) {
        validaciones.push ('Fecha de Compra es requerida');
    }

    if (!req.body.precio) {
        validaciones.push ('Precio es requerido');
    }

    if (!req.body.usuario) {
        validaciones.push ('Usuario es requerido');
    }

    if (!req.body.marca) {
        validaciones.push ('Marca es requerida');
    }

    if (!req.body.TipoEquipo) {
        validaciones.push ('Tipo de Equipo es requerido');
    }

    if (!req.body.EstadoEquipo) {
        validaciones.push ('Estado de Equipo es requerido');
    }

    return  validaciones;
}

module.exports = {
    validarInventario,
}