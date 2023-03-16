import React from "react";
import Navbar from "../components/Navbar";
import VolunteerImage from "../images/volunteer-page-img.png";
import VolunteerButton from "../components/VolunteerButton";

export default function NeonatalCare() {
    return (
        <div>
            <Navbar />
            <div className="volunteer--main">
                <h1 className="healthcare--title">Volunteer with us!</h1>
                <div className="volunteer--content">
                    <p className="volunteer--text">Join our community of healthcare professionals, technologists, and
                        data scientists dedicated to improving neonatal health outcomes. As a Neolink volunteer, you'll have
                        the opportunity to use your skills and expertise to make a real impact in the lives of sick newborns
                        and their families. </p>
                </div>
                <div className="volunteer--cards">
                    <div className="volunteer--card">
                        <p> Make a real impact in the lives of sick newborns and their families.</p>
                    </div>
                    <div className="volunteer--card lightblue">
                        <p>Work with a dedicated team of professionals</p>
                    </div>
                    <div className="volunteer--card">
                        <p>Use your skills to improve neonatal health outcomes</p>
                    </div>
                </div>
                </div>
                <div className="volunteer--interested">
                    <img src={VolunteerImage} className="neonatal--img"></img>
                    <div className="volunteer--interested--content">
                        <p>If you're interested in volunteering with Neolink, please reach out to us through our
                            contact page or email us directly, or by filling out the form given below.
                        </p>
                        {/* <br/> */}
                        <p>Let us know how you would like to contribute and what skills or expertise you can bring
                            to the table!
                        </p>
                        <VolunteerButton href="https://forms.gle/rSCVw4wKA4camuSi8" text="VOLUNTEER" />
                    </div>
                </div>
            </div>
    )
}