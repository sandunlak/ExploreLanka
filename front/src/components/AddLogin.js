import React,{useState} from "react";
import axios from "axios";
export default function AddLogin(){
    
    const[uname,setuName]=useState("");
    const[uemail,setuEmail]=useState("");
    const[upassword,setuPassword]=useState("");


    function sendData(e){
        e.preventDefault();
        
        const newLogin={
            uname,
            uemail,
            upassword
        }
        axios.post("http://localhost:8070/login/log", newLogin)
.then(()=>{
            alert("Student added")
            setuName("");
            setuEmail("");
            setuPassword("");
        }).catch((err)=>{
            alert(err)
        })
    }




    return(
        <div className="container">
            <form onSubmit={sendData}>
  <div class="form-group">
    <label for="uname">uname</label>
    <input type="text" class="form-control" id="uname" placeholder="Enter Student name" 
    onChange={(e)=>{
        setuName(e.target.value); //Assign value to the setName
    }}/>
    
  </div>
  <div class="form-group">
    <label for="uemail">uemail</label>
    <input type="text" class="form-control" id="uemail" placeholder="Enter  email"
    onChange={(e)=>{
        setuEmail(e.target.value); //Assign value to the setMobile
    }}/>
    
  </div>
  <div class="form-group">
    <label for="upassword">upassword</label>
    <input type="text" class="form-control" id="nic" placeholder="Enter  password"
    onChange={(e)=>{
        setuPassword(e.target.value); //Assign value to the setNic
    }}/>
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}