import React from "react";
import Navbar from "../components/Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import logo from "../images/neolink-logo.png";
import medstarlogo from "../images/medstar-logo.png";
import NavbarHealthcare from "../components/NavbarHealthcare";
import ClickButton from "../components/ClickButton";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
   
    const location = useLocation();
    // var data = location.state.data;
    var sncuadminemail = window.localStorage.getItem("adminemail");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(sncuadminemail);
        fetch("http://localhost:3001/get-details", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                sncuadminemail
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "Referral Details found");
                if (data.status == "ok") {
                    alert("Successful");
                    // window.localStorage.setItem("token", data.data);
                    // window.localStorage.setItem("adminemail", adminemail);
                    // window.localStorage.setItem("loggedIn", true);
                    navigate("/referral-requests", { state: { data: data.data } });
                    // window.location.href = "referral-requests";
                } else {
                    alert("Error");
                }
            });
    }
    return (
        <div className="dashboard">
            {/* <div class="sidenav">
                <div className="sidenav--content">
                    <a href="#">Dashboard</a>
                    <a href="#">Facilities</a>
                    <a href="#">Requests</a>
                    <a href="#">Settings</a>
                    <a href="#">Log out</a>
                </div>
            </div> */}
            <div className="dashboard--main-content">
                <NavbarHealthcare />
                <h1 className="dashboard--title">Hi, Rainbow Children SNCU!</h1>
                <div className="dashboard--cards">
                    <div className="header--card">
                        <div className="header--icon">
                            <img
                                className="header--icon-align"
                                src="https://img.icons8.com/bubbles/100/null/patient-care.png"
                            />
                        </div>
                        <div className="header--info-align">
                            <p className="header--card-name">Total patients</p>
                            <p className="header--card-info">20</p>
                        </div>
                    </div>
                    <div className="header--card">
                        <div className="header--icon">
                            <img
                                className="header--icon-align"
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/null/external-staff-music-festival-flaticons-lineal-color-flat-icons.png"
                            />
                        </div>
                        <div className="header--info-align">
                            <p className="header--card-name">Staff count</p>
                            <p className="header--card-info">15</p>
                        </div>
                    </div>
                    <div className="header--card">
                        <div className="header--icon">
                            <img
                                className="header--icon-align"
                                src="https://img.icons8.com/color/100/null/single-bed.png"
                            />
                        </div>
                        <div className="header--info-align">
                            <p className="header--card-name">Beds Available</p>
                            <p className="header--card-info">10</p>
                        </div>
                    </div>
                </div>
                <div className="emergency--alert">
                    {/* emergency alerts */}
                    <div>
                        <div className="emergency--alert-card">
                            <div className="emergency--button-image">
                                {/* <VolunteerButton text="REFERRAL REQUESTS"></VolunteerButton> */}
                                <ClickButton handleSubmit={handleSubmit} text="REFERRAL REQUESTS"></ClickButton>
                                <img src={medstarlogo} className="medstar--icon" alt="logo" />
                            </div>
                            <div className="emergency--info-align">
                                <p className="emergency--title">Today's Updates at Rainbow Children SNCU</p>
                                <br />
                                <div className="emergency--alert-box">
                                    <p>
                                        Saloni's temperature has exceeded 38°C, started medication
                                        for fever
                                    </p>
                                </div>
                                <br />
                                <div className="emergency--alert-box">
                                    <p>
                                        Anmol is being treated for acute pneumonia, no issues as of
                                        now
                                    </p>
                                </div>
                                <br />
                                <div className="emergency--alert-box">
                                    <p>
                                        Ria's heart rhythm is irregular, electrocardiogram test
                                        authorised
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
