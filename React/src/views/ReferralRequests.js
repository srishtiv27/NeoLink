import React from 'react';
import ReferralRequestsCard from '../components/ReferralRequestCard';
import { useLocation } from 'react-router-dom';
import NavbarHealthcare from '../components/NavbarHealthcare';

export default function ReferralRequests() {
    const location = useLocation();
    var data = location.state.data;

    if (data.length != 0) {
        return (
            <div>
                <NavbarHealthcare />
                <h1 className="search-SNCU-results--title">Referral Requests</h1>
                {
                    data.map(({ healthcarename, healthcareadminemail }) =>
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