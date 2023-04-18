const mongoose = require('mongoose');


const prescriptionSchema = mongoose.Schema({
    patientName:{
        type:String
    },
    doctorName:{
        type:String
    },
    id:{
        type:String,
    },
    patientId:{
        type:String
    },
    dateMade:{
        type:String,
    },
    symptoms:{
        type:String,
    },
    instructions:{
        type:String,
    },
    diagnosis:{
        type:String,
    },
    number:{
        type:String,
    },
    medicines:[
        {
            name:{
                type:String
            },
            dose:{
                type:String,
            },
            breakFast:{
                type:String,
            },
            lunch:{
                type:String,
            },
            evening:{
                type:String,
            },
            dinner:{
                type:String,
            },
            total:{
                type:String,
            },
            medaval:{
                type:Boolean
            }
        }
    ],
    tests:{
        type:String,
    },
    other:{
        type:String,
    },
},{
    collection:'prescriptionD',
    timestamp:true,
});

const Prescription = mongoose.model('Prescription',prescriptionSchema);

module.exports = Prescription;
