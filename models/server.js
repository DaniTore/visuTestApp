const express = require('express');
const path = require('path');

const cors = require('cors');
const hbs = require('hbs');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(path.join(__dirname, '../views/partials'));
    }

    routes() {
        this.app.use('/', require('../routes/visu.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${process.env.PORT}`);
        });
    }

}

module.exports = Server;