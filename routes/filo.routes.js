const { Router } = require('express');
const { postFilo, getAllFilo } = require('../controllers/filoCrud.controller');

const router = Router();

router.post('/', postFilo );
router.get('/', getAllFilo );

module.exports = router;