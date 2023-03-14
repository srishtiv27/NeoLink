import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import LandingImage from "../images/landing-page-img.png";
import RegisterHealthcare from "./RegisterHealthcare";

export default function LandingContent() {
    return (
        <main className="landing-main">
            <Navbar />
            <div className="landing-main--content">
                <h1 className="landing-main--title">Timely care for tiny lives</h1>
                <p className="landing-main--text">
                    NeoLink is committed to improving the care of sick newborns.
                    <br />
                    Join us in our mission to give newborns a fighting chance and
                    prioritize their health through smart referrals to Special Newborn
                    Care Units (SNCUs) and coordinated care.
                </p>
                <div className="d-grid gap-2 d-md-block">
                    <Button href="/register-healthcare" text="SEARCH FOR SNCU" />
                    <Button href="/register-healthcare" text="REGISTER YOUR SNCU" />
                </div>
            </div>
            <div>
                <img src={LandingImage} className="landing-main--img"></img>
            </div>
        </main>
    );
}
