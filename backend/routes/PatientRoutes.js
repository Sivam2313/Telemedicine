const express = require('express');
const { fetchPatient, addPatient, appointedPatients, setAppointedDate, fetchAll, changeVisited, trueFetch,medicinalConsultant,searchPatient ,editPat} = require('../controllers/patientController');

const router = express.Router();

router.post('/add' , addPatient)
router.post('/fetch', fetchPatient)
router.post('/appointed',appointedPatients)
router.post('/setDate',setAppointedDate)
router.get('/fetchAll',fetchAll)
router.post('/change',changeVisited)
router.post('/trueFetch',trueFetch)
router.get('/info',medicinalConsultant)
router.post('/search',searchPatient)
router.post('/editPat',editPat)
module.exports = router;