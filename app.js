const express = require('express');
const app = express();
const port = 3000;

// Servir contenido estatico

app.set('view engine', 'hbs');

app.use(express.static('public'));


app.get('/galeria', (req, res) => {
    res.send('Galeria de imagenes');
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});
app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});