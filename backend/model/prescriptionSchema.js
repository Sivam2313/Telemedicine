const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({
    patientData:{
        type:Object
    },
    id:{
        type:String,
    },
    dateMade:{
        type:Date,
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
            duration:{
                type:String,
            },
            schedule:{
                type:String,
            },
            total:{
                type:String,
            },
            fee:{
                type:String,
                default : "free",
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
    collection:'Prescription',
    timestamp:true,
});

const Prescription = mongoose.model('Prescription',prescriptionSchema);

module.exports = Prescription;
