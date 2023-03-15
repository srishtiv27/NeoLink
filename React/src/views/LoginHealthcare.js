import React, { Component, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function LoginHealthcare() {
    const [adminemail, setadminemail] = useState("");
    const [password, setpassword] = useState("");
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(adminname, admincontact, adminemail, orgname, address, city, state, pincode, password, confirmpassword);
    //     fetch("http://localhost:3001/register", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             adminemail,
    //             password
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data, "userRegister");
    //             if (data.status === "ok") {
    //                 alert("Registration Successful");
    //             } else {
    //                 if(data.error !== "")
    //                     alert(data.error)
    //                 else
    //                     alert("Something went wrong");
    //             }
    //         });
    // };

    return (
        <main className="healthcare--main">
            <Navbar />
            <div>
                <h1 className="healthcare--title">Login as Healthcare Provider</h1>
                <p className="healthcare--subtitle">
                    To find the best SNCU for your newborns' needs, please provide us with the following details!
                </p>
            </div>
            <form>
                <div className="healthcare--form">
                    
                    <div className="form-field">
                        <label>Email ID
                        </label>
                        <input type="email" name="adminemail" onChange={(e) => setadminemail(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label>Password
                        </label>
                        <input type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
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
