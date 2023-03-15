import React, { Component, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function RegisterSNCU() {
    const [adminname, setadminname] = useState("");
    const [admincontact, setadmincontact] = useState("");
    const [adminemail, setadminemail] = useState("");
    const [orgname, setorgname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [beds, setbeds] = useState("");
    const [specializations, setspecializations] = useState("");
    const [staff, setstaff] = useState("");
    const [severity, setseverity] = useState("");
    const [maxage, setmaxage] = useState("");
    const [transport, settransport] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(adminname, admincontact, adminemail, orgname, address, city, state, pincode, beds,
            specializations, staff, severity, maxage, transport, password, confirmpassword);
        fetch("http://localhost:3001/register-sncu", {
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
                beds,
                specializations,
                staff,
                severity,
                maxage,
                transport,
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
                <h1 className="healthcare--title">Register your SNCU</h1>
                <p className="healthcare--subtitle">
                    To facilitate the referral process and ensure timely care for sick newborns, our smart referral system will require some important details from your SNCU.
                </p>
            </div>
            <form className="search-for-SNCU--main-form" onSubmit={handleSubmit}>
                <div className="search-for-SNCU--form">
                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Administrator name
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="adminname" onChange={(e) => setadminname(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Contact number
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="admincontact" onChange={(e) => setadmincontact(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Email ID
                            </label>
                            <input className="search-for-SNCU--input" type="email" name="adminemail" onChange={(e) => setadminemail(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Organization name
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="orgname" onChange={(e) => setorgname(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Address
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="address" onChange={(e) => setaddress(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">City
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="city" onChange={(e) => setcity(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">State
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="state" onChange={(e) => setstate(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Pincode
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="pincode" onChange={(e) => setpincode(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Number of available beds
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="beds" onChange={(e) => setbeds(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Specializations
                            </label>
                            <input className="search-for-SNCU--input" placeholder="One or more(comma separated)" type="text" name="specializations" onChange={(e) => setspecializations(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Staff count
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="staff" onChange={(e) => setstaff(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Severity Level
                            </label>
                            <input className="search-for-SNCU--input" placeholder="High/Medium/Low" type="text" name="severity" onChange={(e) => setseverity(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Maximum Neonate Age
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="maxage" onChange={(e) => setmaxage(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <div className="transport">
                                <label className="search-for-SNCU--label">Transport Availability
                                </label>
                                <label className="search-for-SNCU--label"> <input type="radio" value = "yes" name="transport" onChange={(e) => settransport(e.target.value)}/> Yes</label>
                                <label className="search-for-SNCU--label"> <input type="radio" value = "no" name="transport" onChange={(e) => settransport(e.target.value)}/> No</label>

                            </div>
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Password
                            </label>
                            <input className="search-for-SNCU--input" type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Confirm Password
                            </label>
                            <input className="search-for-SNCU--input" type="password" name="confirmpassword" onChange={(e) => setconfirmpassword(e.target.value)} />
                        </div>
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