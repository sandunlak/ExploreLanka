import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeliveryHeader = () => {
    return (
        <nav 
            className="navbar navbar-expand-lg" 
            style={{
                backgroundColor: "#f8f9fa", 
                position: "fixed", 
                top: 0, 
                left: 0, 
                width: "100%", 
                zIndex: 1000,
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" // Optional: adds shadow for better visibility
            }}
        >
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/"
                    style={{ color: "blue", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                    ExploreLanka
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto" style={{ fontSize: "1rem" }}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{ color: "black" }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reservations" className="nav-link" style={{ color: "black" }}>
                                Reservations
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" style={{ color: "black" }}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                to="/signup"
                                className="btn"
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    marginRight: "10px",
                                    fontWeight: "bold",
                                    padding: "5px 15px",
                                }}
                            >
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/signin"
                                className="btn"
                                style={{
                                    backgroundColor: "#343a40",
                                    color: "white",
                                    fontWeight: "bold",
                                    padding: "5px 15px",
                                }}
                            >
                                Signin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DeliveryHeader;
