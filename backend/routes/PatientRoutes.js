const express = require('express');
const { fetchPatient, addPatient, appointedPatients, setAppointedDate, fetchAll } = require('../controllers/patientController');

const router = express.Router();

router.post('/add' , addPatient)
router.post('/fetch', fetchPatient)
router.post('/appointed',appointedPatients)
router.post('/setDate',setAppointedDate)
router.get('/fetchAll',fetchAll)

module.exports = router;