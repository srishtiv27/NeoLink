import React from 'react';
import ReferralRequestsCard from '../components/ReferralRequestCard';
import { useLocation } from 'react-router-dom';

export default function ReferralRequests() {
    const location = useLocation();
    const data = location.state.data;

    return (
        <div>
            <h1>Hi! I am the referral requests page.</h1>
            <ReferralRequestsCard healthcarename={data[0].healthcarename} healthcareadminemail={data[0].healthcareadminemail} />
        </div>
    )
}