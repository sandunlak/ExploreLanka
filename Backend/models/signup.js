//model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema = new Schema({

    fname : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true

    },
    password : {
        type : String,
        required:true
    }

})

const Signup = mongoose.model("Signup",signupSchema);

module.exports = Signup;