const { requqest, response } = require('express');

const Filo = require('../models/filo')

const postFilo = async(req, res = response) => {
    /* try {
        const nombre  = req.body.nombre.toUpperCase();
        
        const reino = new Reino( {nombre} );

        const reinoDB = await Reino.findOne({nombre})

        if( reinoDB ) {
            return res.status(400).json({
                ok: false,
                msg: 'La categoría ya existe'
            })
        } else {
            await reino.save()
                .then(savedDoc => {
                    res.json({
                        msg: 'post API - reino POST ',
                        reino: savedDoc
                    }); // true
                })
                .catch( error => {
                  res.json({
                      ok: false,
                      error
                  });
                });
            
        }
    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
 */
    
};

const getAllFilo = async (req, res = response) => {

   /*  const { limit = 10, from = 0, estado = true } = req.query;

    const [count, reinos ] = await Promise.all([
        Reino.countDocuments(),
        Reino.find({ estado })
            .skip(Number(from))
            .limit(Number(limit))
            .catch(error => res.status(400).json(error))        
    ]);
    
        res.json({
            ok:true,
            msg: 'Todos los reinos',
            count,
            reinos
        }); */
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
    postFilo,
    getAllFilo
};

function printRequest() {
    return request => {
        console.log(`> ${request.method} - ${request.headers.host}${request.url}`);
    };
}
