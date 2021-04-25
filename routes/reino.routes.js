const { Router } = require('express');
const { postReino, getAlllReino } = require('../controllers/reinoCrud.controller');

const router = Router();

router.post('/', postReino );
router.get('/', getAlllReino );

module.exports = router;