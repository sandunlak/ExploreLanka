const router = require("express").Router();
let Student = require("../models/student");

// http://Localhost:8070/student/add
router.route("/add").post((req, res) => { // Arrow function

    const name = req.body.name; // Get front-end value as a request through body
    const mobile = Number(req.body.mobile);
    const nic = req.body.nic;

    const newStudent = new Student({
        name,
        mobile,
        nic
    });

    newStudent.save()
        .then(() => {   // Pass values to database (Create)
            res.json("Added");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
