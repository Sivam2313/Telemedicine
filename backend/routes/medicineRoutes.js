const express = require('express');
const {getMedicines} = require('../controllers/medicineControllers');

const router = express.Router();

router.get('/Medicine',getMedicines)

module.exports = router;