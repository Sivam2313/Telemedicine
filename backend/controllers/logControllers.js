const asyncHandler = require('express-async-handler');
const Log = require('../model/logSchema');

const fetchLogs = asyncHandler(async (req,res)=>{
    const logs =await Log.find();
    if(logs){
        res.status(201).json(logs);
    }
    else{
        throw new Error ("error");
    }
})

const handelLogout = asyncHandler(async(req,res)=>{
    const {logId} = req.body;
    const logout = new Date();
    const log = await Log.updateOne({_id:logId},{logout:logout})
    if(log){
        res.status(201).json(log);
    }
})

module.exports = {fetchLogs,handelLogout}