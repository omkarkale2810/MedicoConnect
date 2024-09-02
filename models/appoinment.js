const { Schema, Model } = require("mongoose");

const appointmentSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'patient', 
        required: true,
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctor', 
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    prescription: {
        type: String,
    },
    fee: {
        type: Number,
        required: true,
    },
},
{ timestamps: true });

const appointment = Model("appointment", appointmentSchema);

module.exports = appointment;