const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    salt:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    Profilephotourl:{
        type:String,
        default:"/images/default-profile.jpg"
    },
    specialization: {
        type: String,
        required: true,
    },
    availableslots: [{
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    }],
},
{ timestamps: true });

const doctor = model("doctor", doctorSchema);
module.exports = doctor;