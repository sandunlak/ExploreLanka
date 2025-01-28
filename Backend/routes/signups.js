const router = require("express").Router();
let Signup = require("../models/signup");

// http://Localhost:8070/student/add
router.route("/sign").post((req, res) => { // Arrow function

    const fname = req.body.fname; // Get front-end value as a request through body
    const email = req.body.email;
    const password = req.body.password;

    const newSignup = new Signup({
        fname,
        email,
        password
    });

    newSignup.save()
        .then(() => {   // Pass values to database (Create)
            res.json("Added");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
