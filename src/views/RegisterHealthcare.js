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
            <form>
                <div className="healthcare--form">
                    <div className="form-field">
                        <label>Administrator name
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Contact number
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Email ID
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Organization name
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Address
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>City
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>State
                        </label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <label>Pincode
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <br/>
                <br/>
                <div classname="submit-button">
                    <Button href="/register-healthcare" text="SUBMIT" />
                </div>
                <br/>
                <br/>
            </form>
        </main>
    );
}
