const mongoose=require('mongoose')

const receiptRegisterSchema=mongoose.Schema({
    SerialNo:{
        type:String,
        required:true
    },
    ProductCode:{
        type:String,
        required:true
    },
    ProductName:{
        type:String,
        required:true
    },
    GenericName:{
        type:String,
        required:true
    },
    DateOfReceipt:{
        type:Date,
        required:true
    },
    BatchNo:{
        type:Number,
        required:true
    },
    QuantityReceived:{
        type:Number,
        required:true
    },
    TotalPrice:{
        type:Number,
        required:true
    },
    UnitPrice:{
        type:Number,
        required:true
    },
    DateOfExpiry:{
        type:Date,
        required:true
    },
    MedicineStatus:{
        type:String,
        required:true
    }
},{timestamp:true,collection:'ReceiptRegister'})

const ReceiptRegister=mongoose.model('ReceiptRegister',receiptRegisterSchema)

module.exports=ReceiptRegister