const { Schema, Model } = require("mongoose");

const patientSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileno: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    appointmentHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'appointment',
    }],
},
{ timestamps: true });

const patient = Model("patient", patientSchema);
module.exports = patient;