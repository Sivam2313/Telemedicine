const mongoose= require('mongoose')

const medicineMasterSchema= mongoose.Schema({
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
    CurrentStockLevel:{
        type:String,
        required:true
    },
    ReorderLevel:{
        type:String,
        required:true
    },
    AveragePrice:{
        type:Number,
        required:true
    },
    LatestPrice:{
        type:Number,
        required:true
    },
    LastPurchasedDate:{
        type:Date,
        required:true
    },
    DiscardedQuantity:{
        type:Number,
        required:true
    },
    UsageFrequency:{
        type:Number,
        required:true
    },
    RunningReceiptRegister:{
        type:String,
        required:true
    }
},{timestamp:true,collection:'MedicineMaster'})


const MedicineMaster=mongoose.model('MedicineMaster',medicineMasterSchema)

module.exports=MedicineMaster