import React from "react";
import Navbar from "../components/Navbar";
import NeonatalImage from "../images/neonatal-care-img.png";
import NeonatalTips1 from "../images/neonatal-tips-1.png";
import NeonatalTips2 from "../images/neonatal-tips-2.png";

export default function NeonatalCare() {
    return (
        <div>
            <Navbar />
            <div className="neonatal--main">
                <h1 className="healthcare--title">Let's learn about Neonatal Care!</h1>
                <div className="neonatal--content">
                    <p className="neonatal--text">Neonatal care refers to medical care provided to newborn infants, particularly those
                        who are sick or premature. Neonatal care is crucial during the first 28 days of a
                        newborn's life, as this is the period when they are at the highest risk of mortality.
                        <br />
                        <br />
                        Neonatal care involves monitoring vital signs, providing nutrition, administering
                        medications, and treating any medical conditions that the newborn may have. </p>
                    <img src={NeonatalImage} className="neonatal--img"></img>
                </div>
            </div>
            <div className="neonatal--main">
                <h1 className="healthcare--title">Tips for new parents</h1>
                <div className="neonatal--content">
                    <img src={NeonatalTips1} className="neonatal--img"></img>
                    <div className="neonatal--tips">
                        <div className="neonatal--tip">
                            <p>
                                Wash your hands before handling your baby and keep your
                                baby's environment clean to reduce the risk of infections.
                            </p>
                        </div>
                        <div className="neonatal--tip lightblue">
                            <p>
                                Breastfeed your baby for the first six months and continue
                                along with complementary foods for up to two years or more.
                            </p>
                        </div>
                        <div className="neonatal--tip">
                            <p>
                                Place your baby on their back to sleep to reduce the risk of
                                Sudden Infant Death Syndrome (SIDS).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="neonatal--main">
                <div className="neonatal--content">
                    <div className="neonatal--tips">
                        <div className="neonatal--tip lightblue">
                            <p>
                                Take your baby for regular checkups with a pediatrician to ensure that
                                they are developing normally, and to detect any health issues early.
                            </p>
                        </div>
                        <div className="neonatal--tip">
                            <p>
                                Respond to your baby's cries and cues promptly to ensure their needs
                                are met, and to promote bonding and attachment.
                            </p>
                        </div>
                        <div className="neonatal--tip lightblue">
                            <p>
                                Smoking and exposure to secondhand smoke can increase the risk of
                                respiratory infections and other health problems for your baby.
                            </p>
                        </div>
                    </div>
                    <img src={NeonatalTips2} className="neonatal--img"></img>
                </div>
            </div>
        </div>
    )
}