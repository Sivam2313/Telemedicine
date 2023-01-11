const express = require('express');
const { authDoctor, registerDoctor, fetchTotalDoctors,getDoctors} = require('../controllers/doctorControllers');

const router = express.Router();

router.post('/login' , authDoctor);
router.post('/register', registerDoctor);
router.get('/countDoctor',fetchTotalDoctors);
router.get('/Doctor',getDoctors)
module.exports = router;