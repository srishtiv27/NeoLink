import React from "react";
import Navbar from "../components/Navbar";
import NeonatalImage from "../images/neonatal-care-img.png";
import NeonatalTips1 from "../images/neonatal-tips-1.png";
import NeonatalTips2 from "../images/neonatal-tips-2.png";
import AboutImage from "../images/babypic.png";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="neonatal--main">
                <div className="about--content">
                    <img src={AboutImage} className="about--img"></img>
                    <div>
                        <h1 className="about--title">What is Neolink?</h1>
                        <p className="about--text">We're a team of healthcare professionals, technologists, and data scientists
                            dedicated to improving the care of sick newborns.
                            Our platform connects healthcare providers with Special Newborn Care Units to
                            ensure timely and appropriate care.
                            <br />
                            We are designed to facilitate the care of sick newborn infants, particularly during their first 28 days of life when they are at the highest risk of dying.</p></div>
                </div>
            </div>
            <div className="mission--main">
                <h1 className="healthcare--title">Our Mission</h1>
                <div className="volunteer--content">
                    <p className="volunteer--text">Our mission is to reduce neonatal mortality by enhancing collaboration, communication, and coordination among healthcare providers. Join us in giving newborns a fighting chance through smart referrals and coordinated care. </p>
                </div>
            </div>

            <div className="contact--content">
                <div className="contact--heading">
                    <h1 className="contact--title">Get in touch with us</h1>
                </div>
                <div>
                    <p className="contact--text">
                        <b>Phone number</b>
                        <br />
                        8800766827
                        <br />
                        <b>Email</b>
                        <br />
                        abcd@gmail.com
                        <br />
                        <b>Address</b>
                        <br />
                        033 Street, Delhi
                    </p></div>
            </div>
        </div>
    )
}