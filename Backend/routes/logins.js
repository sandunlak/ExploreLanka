//route
const router = require("express").Router();
let Login = require("../models/login");

// http://Localhost:8070/student/add
router.route("/log").post((req, res) => { // Arrow function

    const uname = req.body.uname; // Get front-end value as a request through body
    const uemail = req.body.uemail;
    const upassword = req.body.upassword;

    const newLogin = new Login({
        uname,
        uemail,
        upassword
    });

    newLogin.save()
        .then(() => {   // Pass values to database (Create)
            res.json("Added");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
