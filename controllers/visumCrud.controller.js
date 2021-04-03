const { requqest, response } = require('express');

const postVisu = (req, res = response) => {
    const body = req.body;
    console.log("pasa por aqui");
    res.json({
        msg: 'esto es un post de visu',
        body
    });
};

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
};

module.exports = {
    postVisu,
    getAllVisu,
    getFilterVisu,
    putVisu
};