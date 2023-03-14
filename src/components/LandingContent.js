import React from 'react'
import Button from './Button'
import LandingImage from '../images/landing-page-img.png'

export default function LandingContent() {
    return (
        <main>
            <div className="main--content">
                <h1 className="main--title">Timely care for tiny lives</h1>
                <p className="main--text">NeoLink is committed to improving the care of sick newborns.
                    <br />Join us in our mission to give newborns a fighting chance and prioritize
                    their health through smart referrals to Special Newborn Care Units (SNCUs)
                    and coordinated care.</p>
                <div className="d-grid gap-2 d-md-block">
                    <Button text="SEARCH FOR SNCU"/>
                    <Button text="REGISTER YOUR SNCU"/>
                </div>
            </div>
            <div>
                <img src={LandingImage} className="landing--img"></img>
            </div>
        </main>
    )
}