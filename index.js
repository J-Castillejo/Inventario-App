const express = require('express');
const { getConnection } = require('./db/db-conection-mongo');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 4001;

app.use(cors());


getConnection();

app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estadoEquipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipoEquipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
});