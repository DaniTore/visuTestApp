const { Router } = require('express');
const { postUser } = require('../controllers/userCrud.controller');

const router = Router();

router.post('/', postUser );

module.exports = router;