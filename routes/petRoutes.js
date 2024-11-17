const express = require('express');
const { createPet } = require('../controllers/petController');
const router = express.Router();

router.post('/create', createPet);

module.exports = router;
