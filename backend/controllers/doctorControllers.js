const asyncHandler = require('express-async-handler');
const Doctor = require('../model/doctorSchema');
const generateToken = require('../config/tokenGen');
const Log = require('../model/logSchema');
const expressAsyncHandler = require('express-async-handler');

const registerDoctor = asyncHandler(async (req,res)=>{
    const {name,ssfID,registrationID,mobile,adress,gender,speciality,arr} = req.body;
    if (!name||!ssfID||!registrationID||!mobile||!adress||!gender||!speciality||!arr) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    
    const isExist = await Doctor.findOne({registrationID});

    var timeAvailable = [...arr];
    console.log(timeAvailable)
    if(isExist){
        res.status(400)
        throw new Error ("doctor already exist")
    }
    
    const doctor = await Doctor.create({
        doc_name:name,
        SSF_ID:ssfID,
        Doctors_Registration_No:registrationID,
        Mobile:mobile,
        Address:adress,
        Gender:gender,
        Speciality:speciality,
        Availability:timeAvailable,
        blocked:false,
    });
    
    if(doctor){
        res.status(201).json({
            _id: doctor._id,
            name: doctor.name,
            registrationID: doctor.registrationID,
            ssfID: doctor.ssfID,
            timeAvailable: doctor.timeAvailable,
        })
    }
    else{
        res.status(400)
        throw new Error ("failed to create a doctor")
    }

})

const findDoc = asyncHandler(async (req,res) =>{
    const {userID}=req.body
    console.log(req.body)
    const doctor = await Doctor.findOne({Doctors_Registration_No:userID});
    if(doctor){
        res.send(doctor)
    }else{
        res.status(400)
        throw new Error ("Doctor with this reg ID doesnt exist")
    }

})
const blockDoc= asyncHandler( async (req,res) => {
    const {userID}=req.body
    let doctor= await Doctor.findOne({Doctors_Registration_No:userID});
    if(doctor){
        try{
            doctor.blocked=(!doctor.blocked)
            await doctor.save()
            res.status(201)
        }catch(e){
            console.log(e)
        }
    }else{
        res.status(400)
        throw new Eroor ("Doctor with this reg ID doesnt exist")
    }
})
const authDoctor = asyncHandler(async (req,res)=>{
    const {registrationID} = req.body
    
    const doctor = await Doctor.findOne({Doctors_Registration_No:registrationID});
    console.log(doctor)

    if(doctor && doctor.blocked==false){
        const logReport = await Log.create({
            user:'Doctor',
            registrationId:registrationID,
            name:doctor.name,
            login:new Date(),
        })
        if(logReport){
            res.status(201).json({
                _id: doctor._id,
                ssfID: doctor.ssfID,
                name:doctor.name,
                registrationID: doctor.registrationID,
                timeAvailable: doctor.timeAvailable,
                token: generateToken(doctor._id),
                logId:logReport._id,
            })
        }
        else{
            throw new Error ("error");
        }

    }
    else{
        res.status(400)
        throw new Error ("invalid email or password")
    }
})

const fetchTotalDoctors = asyncHandler(async (req,res)=>{
    const count = await Doctor.countDocuments({}); 
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

const getDoctors=asyncHandler(async(req,res)=>{
    const data=await Doctor.find()
    res.send(data)
    console.log(data)
})

const searchDoctor=asyncHandler(async(req,res) => {
    const {regId}=req.body
    const doctor= await Doctor.findOne({Doctors_Registration_No:regId})
    if(doctor){
        res.send(doctor)
        console.log(doctor)
    }else{
        res.status(400)
        throw new Error("check your internet"); 
    }

})
module.exports = {registerDoctor,authDoctor,fetchTotalDoctors,getDoctors,searchDoctor,findDoc,blockDoc};
