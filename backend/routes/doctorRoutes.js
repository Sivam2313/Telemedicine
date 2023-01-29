const express = require('express');
const { authDoctor, registerDoctor, fetchTotalDoctors,getDoctors,searchDoctor,findDoc,blockDoc} = require('../controllers/doctorControllers');

const router = express.Router();

router.post('/login' , authDoctor);
router.post('/register', registerDoctor);
router.get('/countDoctor',fetchTotalDoctors);
router.get('/Doctor',getDoctors);
router.get('/search',searchDoctor);
router.post('/findDoc',findDoc);
router.post('/blockDoc',blockDoc);
module.exports = router;