const { Schema, model } = require("mongoose");
const {createHmac , randomBytes, hash} = require("crypto");
const { error } = require("console");
const { create_token_for_user } = require("../services/authentication")

const patientschema = new Schema({
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
    salt:{
        type:String,
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
{ timestamps: true }
);

patientschema.pre("save" , function (next){
    const patient = this;

    if(!this.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedpassword = createHmac("sha256" , salt).update(user.password).digest("hex");

    patient.salt = salt;
    patient.password = hashedpassword;
    next();
})

patientschema.static("match_password_and_generate_token" , async function match_password_and_generate_token(email,password){
    const patient = await this.findOne({email});
    if(!patient) throw new error("user not found");
    
    const salt = patient.salt;
    const originalpass = patient.password;

    const enteredpass = createHmac("sha256" , salt).update(password).digest("hex");

    if(originalpass !== enteredpass ){
        throw new error("password not matched");
    }

    const token = create_token_for_user(patient);
    return token;

})

const patient = model("patient", patientschema);
module.exports = patient;