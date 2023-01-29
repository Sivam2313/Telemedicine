const express = require('express');
const { authHw, registerHw, fetchTotalHw,findHw } = require('../controllers/hwControllers');

const router = express.Router();

router.post('/login' , authHw)
router.post('/register', registerHw)
router.get('/countHw',fetchTotalHw)
router.post('/findHw',findHw)
module.exports = router;