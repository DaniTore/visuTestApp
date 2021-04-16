const { Router } = require('express');
const {
    postVisu,
    getAllVisu,
    getFilterVisu,
    putVisu
} = require('../controllers/visumCrud.controller');

const router = Router();

router.get('/', getAllVisu);
//router.get('/?q=megustalamortadelaconnutella&t=lometesxel(.)', getFilterVisu);
router.post('/visu', postVisu);
router.put('/visu/:id', putVisu);

module.exports = router;