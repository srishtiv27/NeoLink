import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import LandingImage from "../images/landing-page-img.png";

export default function RegisterHealthcare() {
    return (
        <main className="healthcare--main">
            <Navbar />
            <div>
                <h1 className="healthcare--title">Register as Healthcare Provider</h1>
                <p className="healthcare--subtitle">
                    To find the best SNCU for your newborns' needs, please provide us with the following details!
                </p>
            </div>
            <div className="healthcare--form">
                <form>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                </form>
            </div>
        </main>
    );
}
