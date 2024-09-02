const { Router } = require("express");
const {handle_get_on_patient,handle_post_on_patient} = require("../controller/patient")

const router = Router();

router.route("/").get(handle_get_on_patient).post(handle_post_on_patient);



module.exports = router;