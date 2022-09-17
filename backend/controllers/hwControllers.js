const asyncHandler = require('express-async-handler');
const Hw = require('../model/hwSchema');
const generateToken = require('../config/tokenGen');

const registerHw = asyncHandler(async (req,res)=>{
    const { name, userID, password } = req.body;
    if (!name || !userID || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    
    const isExist = await Hw.findOne({userID});

    if(isExist){
        res.status(400)
        throw new Error ("Hw already exist")
    }
    
    const hw = await Hw.create({
        name,
        userID,
        password,
    });
    
    if(hw){
        res.status(201).json({
            _id: hw._id,
            name: hw.name,
            userID: hw.userID,
            password: hw.password,
        })
    }
    else{
        res.status(400)
        throw new Error ("failed to create a hw")
    }

})

const authHw = asyncHandler(async (req,res)=>{
    const {userID,password} = req.body
    
    const hw = await Hw.findOne({userID});

    if(hw && hw.matchPassword(password)){
        res.status(201).json({
            _id: hw._id,
            userID: hw.userID,
            password: hw.password,
            token: generateToken(hw._id)
        })
    }
    else{
        res.status(400)
        throw new Error ("invalid email or password")
    }
})

const fetchTotalHw = asyncHandler(async (req,res)=>{
    const count = await Hw.countDocuments({}); 
    if(count){
        res.status(201).json({
            count:count,
        })
    }
    else{
        res.status(400)
        throw new Error("check your internet"); 
    }
})

module.exports = {registerHw,authHw,fetchTotalHw};
