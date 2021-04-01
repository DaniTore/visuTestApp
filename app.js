require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
    let d = new Date;
    let fecha = d.getFullYear();
    res.render('Home', {
        nombre: 'Danie Tore',
        fecha
    });
});
app.get('/generic', (req, res) => {
    res.render('generic');
});


app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});