const asyncHandler = require('express-async-handler');
const Patient = require('../model/patientSchema');
const Family = require('../model/familySchema');


const add = asyncHandler(async(req,res)=>{
    // const {csvData} = req.body;
    // for(var i = 0;i<=csvData.length;i++){
    //     const patient = await Patient.create({
    //         patientData : csvData[i].patientData,
    //         marital : csvData[i].marital,
    //         gender : csvData[i].gender,
    //         DOB : csvData[i].DOB,
    //         education : csvData[i].education,
    //         profession : csvData[i].profession,
    //         mobile : csvData[i].mobile,
    //         medical : csvData[i].medical,
    //         pastHistory : csvData[i].pastHistory,
    //         gynocoligical : csvData[i].gynocoligical,
    //     });
    //     if(patient){
    //         console.log(i);
    //     }
    // }
    // res.status(201).json({"ok":"ok"});
    // console.log(csvData[1]['add_mem'+1]);
    // for(var i = 0; i<csvData.length;i++){
    //     var obj = csvData[i];
    //     var members = [];
    //     var additionalMembers = [];
    //     var id = obj.regid;
    //     for(var j = 0;j<8;j++){
    //         if(obj["fam"+(j+1)].length!=0){
    //             var mem = {
    //                 name : obj["fam"+(j+1)],
    //                 relationship : obj["rel"+(j+1)],
    //                 id : (id+'0'+(j+1)),
    //             }
    //             members.push(mem);
    //         }
    //         else{
    //             break;
    //         }
    //     }
    //     for(var j = 0;j<6;j++){
    //         if(obj['add_mem'+(j+1)].length!=0){
    //             var adi = {
    //                 name : obj['add_mem'+(j+1)],
    //                 id : (id+'1'+(j+1)),
    //                 relationship : "relative",
    //             }
    //             additionalMembers.push(adi);
    //         }
    //         else{
    //             break;
    //         }
    //     }
    //     var family = {
    //         name: obj.name,
    //         mobile : obj.mobile,
    //         address : obj.address,
    //         date: obj.date,
    //         locationCode : obj.locationCode,
    //         members : members,
    //         additionalMembers : additionalMembers,
    //         education : obj.Education,
    //         familyIncome : obj.Monthly_Family_Income,
    //         maritalStatus : obj.Marital_status,
    //         id : id,
    //     }
    //     const newEntry = await Family.create({
    //         name: obj.name,
    //         mobile : obj.mobile,
    //         address : obj.address,
    //         date: obj.date,
    //         locationCode : obj.locationCode,
    //         members : members,
    //         additionalMembers : additionalMembers,
    //         education : obj.Education,
    //         familyIncome : obj.Monthly_Family_Income,
    //         maritalStatus : obj.Marital_status,
    //         id : id,
    //     })
    //     if(newEntry){
    //         console.log(i);
    //     }
    // }
    // res.json({"ok":"ok"})
    const family = await Family.find({});
    // console.log(family);
    res.json({family})
})

module.exports = {add}

