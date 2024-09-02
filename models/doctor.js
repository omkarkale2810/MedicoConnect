const { Schema, Model } = require("mongoose");

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

const doctor = Model("doctor", doctorSchema);
module.exports = doctor;