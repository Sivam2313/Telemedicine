const asyncHandler = require('express-async-handler');
const Patient = require('../model/patientSchema');
const Prescription = require('../model/prescriptionSchema');

// const addPrescription = asyncHandler(async (req,res)=>{
//     const {id,dateMade,symptoms,instructions,diagnosis,arr,number,date,tests,other} = req.body;
    
//     const patient = await Patient.findOne({"patientData.ticketId":id});
//     if(!patient){
//         res.status(400).send("not Found");
//     }
//     const patientData = patient.patientData;
//     const prescription = await Prescription.create({
//         id,
//         patientData,
//         dateMade,
//         symptoms,
//         instructions,
//         diagnosis,
//         medicines:arr,
//         number,
//         tests,
//         other
//     })
//     if(prescription){
//         if(date){
//             const patient =await Patient.findOneAndUpdate({"patientData.ticketId":id},{appointedTime:date});
//             if(patient){
//                 res.status(201).json(patient);
//             }
//             else{
//                 res.send("failed")
//             }
//         }
//         res.status(500).send("error")
//     }
//     else{
//         res.send("failed")
//     }
// })

// const fetchPrescription = asyncHandler(async(req,res)=>{
//     const {id} = req.body;
//     const prescriptions = await Prescription.find({id:id})
//     if(prescriptions){
//         res.status(201).json(prescriptions)
//     }
//     else{
//         res.status(500).send("failed");
//     }
// })

const fetchAllPres = asyncHandler(async (req,res)=>{
    const {docName}=req.body
    const prescriptions = await Prescription.find({doctorName: docName})
    if(prescriptions){
        res.status(201).json(prescriptions)
    }
    else{
        res.status(500).send("failed");
    }
})


const addPrescription = asyncHandler(async (req,res) => {
    const {docname,date,patName,symptoms,diagnosis,medicines,instructions,tests,patientId,ticketId}=req.body

    const existingPrescription = await Prescription.findOne({ id: ticketId })
    if(existingPrescription){
        const updatedPrescription = await Prescription.findOneAndUpdate(
            { id: ticketId },
            {
              patientName: patName,
              doctorName: docname,
              patientId: patientId,
              dateMade: date,
              symptoms: symptoms,
              instructions: instructions,
              diagnosis: diagnosis,
              medicines: medicines,
              tests: tests,
            },
            { new: true }
          );
          res.status(200).json({ message: "Prescription updated successfully", updatedPrescription });
    }else{
        const pdf=new Prescription({
            patientName:patName,
            doctorName:docname,
            id:ticketId,
            patientId:patientId,
            dateMade:date,
            symptoms:symptoms,
            instructions:instructions,
            diagnosis:diagnosis,
            medicines:medicines,
            tests:tests
        })
        await pdf.save()
        res.status(201).json({ message: 'Prescription added successfully' })
    }

})
const fetchPrescription = asyncHandler(async(req,res) => {
    const {id}=req.body
    const existingPrescription = await Prescription.findOne({ id: ticketId })
    if(existingPrescription){
        res.send(existingPrescription)
    }else{
        res.status(500).send("Error");
    }
})
module.exports = {addPrescription,fetchPrescription,fetchAllPres}