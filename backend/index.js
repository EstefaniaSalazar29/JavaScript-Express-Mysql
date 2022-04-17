const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.get('', (req, res)=>{
    res.send('<h1>Bienvenidos a la API</h1>')
})


app.use('/api/', require('./routes/vehiculo'))


app.set("port", process.env.PORT || 5003);
app.listen(app.get("port"), ()=> {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
})
