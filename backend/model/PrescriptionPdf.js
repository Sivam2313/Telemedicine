const mongoose=require('mongoose')


const PrescriptionPdfSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    data:{
        type:Buffer,
        required:true
    }
},{collection:'PrescriptionPdf'})

const PrescriptionPdf=mongoose.model('PrescriptionPdf',PrescriptionPdfSchema)
module.exports=PrescriptionPdf
