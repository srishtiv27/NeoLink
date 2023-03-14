import React from "react";
import Navbar from "../components/Navbar";
import NeonatalImage from "../images/neonatal-care-img.png";
import NeonatalTips1 from "../images/neonatal-tips-1.png";
import NeonatalTips2 from "../images/neonatal-tips-2.png";

export default function NeonatalCare() {
    return (
        <div>
            <Navbar />
            <div className="volunteer--main">
                <h1 className="volunteer--title">Volunteer with us!</h1>
                <div className="volunteer--content">
                    <p className="volunteer--text">Join our community of healthcare professionals, technologists, and 
                    data scientists dedicated to improving neonatal health outcomes. As a Neolink volunteer, you'll have 
                    the opportunity to use your skills and expertise to make a real impact in the lives of sick newborns
                    and their families. </p>
                </div>
            </div>
        </div>
    )
}