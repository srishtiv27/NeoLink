import React, { Component, useEffect, useReducer, useState } from "react";
import NavbarHealthcare from "../components/NavbarHealthcare";
import Button from "../components/Button";
import SNCUCard from "../components/SNCUCard";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { useNavigate } from "react-router-dom";

export default function SearchForSNCU() {
    const navigate = useNavigate();
    const [location, setlocation] = useState("");
    const [transport, settransport] = useState("");
    const [severity, setseverity] = useState("");
    const [beds, setbeds] = useState("");
    const [maxage, setmaxage] = useState("");
    const [specializations, setspecializations] = useState("");
    const [optionSelected, setoptionSelected] = useState(null);
    var healthcareOrgname = window.localStorage.getItem("healthcareOrgname");
    var healthcareAdminemail = window.localStorage.getItem("healthcareAdminemail");
    // console.log(healthcareOrgname);

    const Option = (props) => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };

    const specializationsOptions = [
        { label: "Cardiology", value: 1 },
        { label: "Neurology", value: 2 },
        { label: "Physiology", value: 3 },
        { label: "Ventilator", value: 4 },
        { label: "Nutrition", value: 5 },
        { label: "Orthopediatrics", value: 6 },
        { label: "Opthalmology", value: 7 },
        { label: "Oncology", value: 8 },
        { label: "Pharmacology", value: 9 },
    ];

    var handleChange = (selected) => {
        setoptionSelected(selected);
        setspecializations(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(location, transport, severity, beds, maxage, specializations);
        console.log("handle submit");
        fetch("http://localhost:3001/search-sncu", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                location, transport, severity, beds, maxage, specializations
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                var resultData = data.data;
                console.log("handle submit 2");
                // alert("Successful");
                var d2 = "rosowlia";
                navigate("/search-sncu-results", { state: { data: resultData, healthCareData: "rosowlia", healthcareOrgname: healthcareOrgname, healthcareAdminemail: healthcareAdminemail } });

                // navigate("/search-sncu-results", {state: {resultData, "rosowlia"}});
                // window.localStorage.setItem("loggedIn", true);
                // window.localStorage.setItem("data", data.data);
                // window.location.href = "search-sncu-results";
            });
    };

    return (
        <main className="healthcare--main">
            <NavbarHealthcare />
            <h1 className="healthcare--title">Search for SNCU</h1>
            <p className="healthcare--subtitle">
                Help us in referring you to the best SNCU by providing us some details.
            </p>
            <form className="search-for-SNCU--main-form" onSubmit={handleSubmit}>
                <div className="search-for-SNCU--form">
                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Location</label>
                            <input
                                className="search-for-SNCU--input"
                                type="text"
                                name="location"
                                onChange={(e) => setlocation(e.target.value)}
                            />
                        </div>
                        <div >
                            <label className="specialization--label">
                                Transport Required
                            </label>

                            <label className="specialization--label">
                                {" "}
                                <input type="radio" name="transport" value="yes" onChange={(e) => settransport(e.target.value)} /> Yes
                            </label>
                            <label className="specialization--label">
                                {" "}
                                <input type="radio" name="transport" value="no" onChange={(e) => settransport(e.target.value)} /> No
                            </label>
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Severity Level</label>
                            <input
                                className="search-for-SNCU--input"
                                placeholder="High/Medium/Low"
                                type="text"
                                name="severity"
                                onChange={(e) => setseverity(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Beds Required</label>
                            <input
                                className="search-for-SNCU--input"
                                type="number"
                                name="beds"
                                onChange={(e) => setbeds(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="search-for-SNCU--label">Neonate Age</label>
                            <input
                                className="search-for-SNCU--input"
                                placeholder="In Days"
                                type="number"
                                name="maxage"
                                onChange={(e) => setmaxage(e.target.value)}
                            />
                        </div>
                        <div className="specialization">
                            <label className="specialization--label">Specialization(s) Required</label>
                            <ReactSelect
                                className="specialization--input"
                                name="specializations"
                                options={specializationsOptions}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={true}
                                components={{
                                    Option
                                }}
                                onChange={handleChange}
                                allowSelectAll={true}
                                value={optionSelected}
                            />
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
