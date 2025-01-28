//model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({

    uname : {
        type : String,
        required:true
    },
    uemail : {
        type : String,
        required:true

    },
    upassword : {
        type : String,
        required:true
    }

})

const Login = mongoose.model("Login",loginSchema);

module.exports = Login;