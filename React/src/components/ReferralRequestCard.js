import React from "react";

export default function ReferralRequestsCard(props) {
    return (
        <div className="referral-requests-card">
            <h1 className="referral-requests-card--title">{props.healthcarename}</h1>
            <div className="referral-requests-card--row">
                <img className="referral-request-card--icon" src="https://img.icons8.com/ios-glyphs/30/null/new-post.png" />
                <p className="referral-requests-card--subtitle">{props.healthcareadminemail}</p>
            </div>
        </div>
    )
}