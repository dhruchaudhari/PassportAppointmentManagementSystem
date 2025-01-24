import mongoose from "mongoose";

const documentsSchema =new mongoose.Schema({
    adharadharcard: {
        type: String,
        required : true
    },
    birthcertificate:{
        type : String,
        required : true
    },
    utilitybill: {
        type: String,
        required : true
    },
} , {timestamps : true})

export const Documents =new mongoose.model("Document" , documentsSchema)