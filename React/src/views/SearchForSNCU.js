import React, { Component, useEffect, useReducer, useState } from "react";
import NavbarHealthcare from "../components/NavbarHealthcare";
import Button from "../components/Button";

export default function SearchForSNCU() {
    const [adminname, setadminname] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/healthcare-data", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");

                setadminname(data.data.adminname);

                if (data.data === "token expired") {
                    alert("Token expired login again");
                    window.localStorage.clear();
                    // window.location.href = "./sign-in";
                }
            });
    }, []);

    return (
        <main className="healthcare--main">
            <NavbarHealthcare />
            <h1 className="healthcare--title">Search for SNCU</h1>
            <p className="healthcare--subtitle">
                Help us in referring you to the best SNCU by providing us some details.
            </p>
            <form className="search-for-SNCU--main-form">
                <div className="search-for-SNCU--form">
                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Location
                            </label>
                            <input className="search-for-SNCU--input" type="text" name="adminname" />
                        </div>
                        <div className="transport">
                            <label className="search-for-SNCU--label">Transport Required
                            </label>
                           
                            <label className="search-for-SNCU--label"> <input type="radio" name="transport" /> Yes</label>
                            <label className="search-for-SNCU--label"> <input type="radio" name="transport" /> No</label>
                           
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label" >Heart Rate(bpm)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="heartrate" />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label" >Temperature(°C)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="temperature" />
                        </div>
                    </div>
                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label" >Breathing Rate(bpm)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="breathingrate" />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label" >Blood Pressure(mmHg)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="bloodpressure" />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label" >Blood Glucose(mmol/L)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="bloodglucose" />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Oxygen Level(%)
                            </label>
                            <input className="search-for-SNCU--input" type="number" name="oxygenlevel" />
                        </div>

                    </div>
                </div>
                <div className="submit-button">
                    <Button type="submit" text="SUBMIT" />
                </div>
            </form>
        </main>
    );
}