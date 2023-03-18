const express = require('express');
const { add } = require('../controllers/addController');
const { authAdmin } = require('../controllers/userController');
const router = express.Router();

router.post('/login' , authAdmin)
router.post('/add',add)


module.exports = router;