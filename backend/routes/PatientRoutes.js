const express = require('express');
const { fetchPatient, addPatient, appointedPatients, setAppointedDate, fetchAll, changeVisited } = require('../controllers/patientController');

const router = express.Router();

router.post('/add' , addPatient)
router.post('/fetch', fetchPatient)
router.post('/appointed',appointedPatients)
router.post('/setDate',setAppointedDate)
router.get('/fetchAll',fetchAll)
router.post('/change',changeVisited)

module.exports = router;