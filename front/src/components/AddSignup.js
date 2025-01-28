import React, { useState } from "react";
import axios from "axios";

export default function AddSignup() {
    const [fname, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newSignup = { fname, email, password };

        axios.post("http://localhost:8070/signup/sign", newSignup)
            .then(() => {
                alert("Student added successfully");
                setFName("");
                setEmail("");
                setPassword("");
            })
            .catch((err) => {
                alert("Error adding student: " + err.message);
            });
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="fname">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="Enter name"
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
