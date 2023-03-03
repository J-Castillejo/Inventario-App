const mongoose = require('mongoose');

const getConnection = async () => {
    
     try {
         const url = 'mongodb://Administrador:mGn0ddVjoHGj87CN@ac-rsvunoo-shard-00-00.k1thzgc.mongodb.net:27017,ac-rsvunoo-shard-00-01.k1thzgc.mongodb.net:27017,ac-rsvunoo-shard-00-02.k1thzgc.mongodb.net:27017/inventario-node-js?ssl=true&replicaSet=atlas-cuuso1-shard-0&authSource=admin&retryWrites=true&w=majority';

         await mongoose.connect(url);

        console.log('Conexion exitosa');

    }  catch (error) {
          console.log(error);
    }
}

module.exports = {
    getConnection,
}