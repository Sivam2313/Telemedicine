const asyncHandler = require('express-async-handler');
const MedicineStorage = require('../model/medicineSchema');

const getMedicines=asyncHandler(async(req,res) => {
    const data=await MedicineStorage.find()
    res.send(data)
})

module.exports={getMedicines}