const express = require("express");
const path = require("path");

const patientrouter = require("./routes/patient");
const doctorrouter = require("./routes/doctor");
const hospitalrouter = require("./routes/hospital");

const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended : false}));


app.use("/" , (req,res) =>{
    return res.render("home");    
})

app.use("/patient" , patientrouter);
app.use("/doctor" , doctorrouter);
app.use("/hospital" , hospitalrouter);


app.listen(PORT,  ()=>{console.log(`Server Started At PORT : ${PORT}`)});