import React, { Component, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function LoginSNCU() {
    const navigate = useNavigate();
    const [adminemail, setadminemail] = useState("");
    const [password, setpassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(adminemail, password);
        fetch("http://localhost:3001/login-sncu", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                adminemail,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    // var beds = data.data.beds;
                
                    alert("Login successful");
                    window.localStorage.setItem("token", data.data);
                    window.localStorage.setItem("adminemail", adminemail);
                    // window.localStorage.setItem("loggedIn", true);
                    // window.location.href = "dashboard";
                    navigate("/dashboard", { state: { data: data.data} });
                } else {
                    alert("Invalid username/password");
                }
            });
    }

    return (
        <main className="healthcare--main">
            <Navbar />
            <div>
                <h1 className="healthcare--title">Login as SNCU</h1>
                {/* <p className="healthcare--subtitle">
                    To find the best SNCU for your newborns' needs, please provide us with the following details!
                </p> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="healthcare--form">

                    <div className="form-field">
                        <label className="register-label">Email ID
                        </label>
                        <input className="register-input"  type="email" name="adminemail" onChange={(e) => setadminemail(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Password
                        </label>
                        <input className="register-input" type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                    </div>
                </div>
                <br />
                <br />
                <div className="submit-button">
                    <Button type="submit" text="SUBMIT" />
                </div>
                <br />
                <br />
            </form>
        </main>
    );
}
