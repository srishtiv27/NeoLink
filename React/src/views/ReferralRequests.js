import React from 'react';
import ReferralRequestsCard from '../components/ReferralRequestCard';
import { useLocation } from 'react-router-dom';
import NavbarHealthcare from '../components/NavbarHealthcare';

export default function ReferralRequests() {
    const location = useLocation();
    var data = location.state.data;
    var emailUsed = [];
    var uniqueData = [];
    for (let i = 0; i < data.length; i++) {
        if (!emailUsed.includes(data[i].healthcareadminemail)) {
            uniqueData.push(data[i]);
            emailUsed.push(data[i].healthcareadminemail);
        }
    }
 
    if (data.length != 0) {
        return (
            <div>
                <NavbarHealthcare />
                <h1 className="search-SNCU-results--title">Referral Requests</h1>
                {
                    uniqueData.map(({ healthcarename, healthcareadminemail }) =>
                        <ReferralRequestsCard healthcarename={healthcarename}
                            healthcareadminemail={healthcareadminemail} />
                    )
                }
            </div>
        )
    } else {
        return (
            <div>
                <NavbarHealthcare/>
                <h1 className="search-SNCU-results--title">Recommended SNCUs</h1>
                <p className="search-SNCU-results--message">Sorry, we could not find any SNCUs at the moment.</p>
            </div>
        );
    }
}