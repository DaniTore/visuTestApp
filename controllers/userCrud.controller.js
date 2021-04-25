const { requqest, response } = require('express');

const Usuario = require('../models/usuario')

const postUser = async(req, res = response) => {
    try {
        const { nombre, correo, password, rol } = req.body;
        const usuario = new Usuario( {nombre, correo, password, rol} );
        await usuario.save()
            .then(savedDoc => {
                res.json({
                    msg: 'post API - usuario POST ',
                    usuario: savedDoc
                }); // true
            })
            .catch( error => {
              res.json({
                  ok: false,
                  error
              })
            }
          )
    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
    
};
/* 
const getAllVisu = (req, res = response) => {
    const { q, nombre, api } = req.query;
    // get all Visu from DB
    res.render('home', { q, nombre, api });
};

const getFilterVisu = (req = requqest, res = response) => {
    const queryParams = req.queryParams;
    console.log(queryParams);
    // get all Visu from DB
    res.render('home');
};


const putVisu = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Actualizando la visu con id',
        id
    });
}; */

module.exports = {
    postUser
};

function printRequest() {
    return request => {
        console.log(`> ${request.method} - ${request.headers.host}${request.url}`);
    };
}
