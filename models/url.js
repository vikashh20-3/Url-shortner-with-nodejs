const mongoose =require("mongoose")

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required: true,
        unique:true
    },
    
})