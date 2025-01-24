import mongoose from "mongoose"

const slotSchema = new mongoose.Schema({
    date:{
        type: Date,
        required : true
    },
    remainingslots:{
        type : Number,
        required: true
    }
})

const centerSchema = new mongoose.Schema(
    {
        centername:{
            type: String,
            unique: true,
            required: true
        },
        location:{
            type: String,
            required: true
        },
        slots: [slotSchema]
        
    } , {timestamps: true})

export const Center = new mongoose.model("Center" , centerSchema)