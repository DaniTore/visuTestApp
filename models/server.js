const express = require('express');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios'

        //Connectar a BD
        this.connectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    async connectarDB() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(path.join(__dirname, '../views/partials'));
    }

    routes() {
        this.app.use('/api/visu', require('../routes/visu.routes'));
        this.app.use('/api/usuario', require('../routes/user.routes'));
        this.app.use('/api/reino', require('../routes/reino.routes'));
        this.app.use('/api/filo', require('../routes/filo.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${process.env.PORT}`);
        });
    }

}

module.exports = Server;