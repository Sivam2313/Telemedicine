const express = require('express');
const { changeNumber, fetch, add, fetchLogs } = require('../controllers/medicineControllers');

const router = express.Router();

router.get('/fetch' , fetch)
router.get('/fetchlogs',fetchLogs)
router.post('/change',changeNumber)
router.post('/add',add)


module.exports = router;