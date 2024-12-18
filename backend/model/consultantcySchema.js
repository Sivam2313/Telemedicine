const mongoose=require('mongoose')

const MedicinalConsultantSchema=mongoose.Schema({
    date:{
        type:String
    },
    Day_Card_No:{
        type:String
    },
    Name:{
        type:String
    },
    Age:{
        type:String
    },
    Gender:{
        type:String
    },
    Weight:{
        type:String
    },
    Height:{
        type:String
    },
    Pulse_Rate:{
        type:String
    },
    Systolic_Blood_Pressure:{
        type:String
    },
    Diastolic_Blood_Pressure:{
        type:String
    },
    Temperature:{
        type:String
    },
    SPO2:{
        type:String
    },
    Blood_Sugar:{
        type:String
    },
    Blood_Sugar_level:{
        type:String
    },
    Remarks:{
        type:String
    },
    
    current_problems:{
        type:String
    },
    Other_comment:{
        type:String
    },
    Type_of_Consulting:{
        type:String
    },
    Assigned_Doctor:{
        type:String
    },
    Consultation_Date:{
        type:Date
    },
    Consultation_Time:{
        type:String
    },
    Patient_Registration_Number:{
        type:String
    },
    ID:{
        type:String
    },
},{
    collection:'MedicinalConsultant',
    timestamp:true
})

const Consult=mongoose.model('MedicinalConsultant',MedicinalConsultantSchema)

module.exports=Consult