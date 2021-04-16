const { requqest, response } = require('express');

const Usuario = require('../models/usuario')

const postUser = async(req, res = response) => {

    let printRequest = request => {
        console.log(`> ${request.method} - ${request.headers.host}${request.url}`);
    }
    printRequest(req)
    const body = req.body;
    const usuario = new Usuario( body );

    //await usuario.save();

    console.log("Pasa por aqui");
    res.json({
        msg: 'post API - usuario POST ',
        usuario
    });
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