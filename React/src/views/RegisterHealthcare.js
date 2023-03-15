import React, { Component, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function RegisterHealthcare() {
    const [adminname, setadminname] = useState("");
    const [admincontact, setadmincontact] = useState("");
    const [adminemail, setadminemail] = useState("");
    const [orgname, setorgname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(adminname, admincontact, adminemail, orgname, address, city, state, pincode, password, confirmpassword);
        fetch("http://localhost:3001/register-healthcare", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                adminname,
                admincontact,
                adminemail,
                orgname,
                address,
                city,
                state,
                pincode,
                password,
                confirmpassword
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    // alert("Registration Successful");
                    window.location.href = "thanks-for-registering";
                } else {
                    if (data.error !== "")
                        alert(data.error)
                    else
                        alert("Something went wrong");
                }
            });
    };

    return (
        <main className="healthcare--main">
            <Navbar />
            <div>
                <h1 className="healthcare--title">Register as Healthcare Provider</h1>
                <p className="healthcare--subtitle">
                    To find the best SNCU for your newborns' needs, please provide us with the following details!
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="healthcare--form">
                    <div className="form-field">
                        <label className="register-label">Administrator name
                        </label>
                        <input className="register-input" type="text" name="adminname" onChange={(e) => setadminname(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Contact number
                        </label>
                        <input className="register-input" type="number" name="admincontact" onChange={(e) => setadmincontact(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Email ID
                        </label>
                        <input className="register-input"  type="email" name="adminemail" onChange={(e) => setadminemail(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Organization name
                        </label>
                        <input className="register-input"  type="text" name="orgname" onChange={(e) => setorgname(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Address
                        </label>
                        <input className="register-input"  type="text" name="address" onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">City
                        </label>
                        <input className="register-input"  type="text" name="city" onChange={(e) => setcity(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">State
                        </label>
                        <input className="register-input"  type="text" name="state" onChange={(e) => setstate(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Pincode
                        </label>
                        <input className="register-input"  type="number" name="pincode" onChange={(e) => setpincode(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Password
                        </label>
                        <input className="register-input"  type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="register-label">Confirm Password
                        </label>
                        <input className="register-input"  type="password" name="confirmpassword" onChange={(e) => setconfirmpassword(e.target.value)} />
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