import React from "react";
import Navbar from "../components/Navbar";

export default function ThanksForRegistering() {
    return (
        <main className="thanks-for-registering-main">
            <Navbar />
            <div className="thanks-for-registering-main--content">
                <h1 className="thanks-for-registering-main--title">Thank you for Registering!</h1>
                {/* <p className="landing-main--text">
                    Thank you for Registering!
                    <br />
                    Now you can log in to 
                </p> */}
            </div>
        </main>
    );
}