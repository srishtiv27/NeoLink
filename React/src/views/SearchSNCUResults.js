import React, { Component, useEffect, useReducer, useState } from "react";
import { useLocation } from 'react-router-dom';
import SNCUCard from "../components/SNCUCard";

export default function SearchSNCUResults() {
    const location = useLocation();
    const data = location.state.data;
    const healthCareData = location.state.healthCareData;
    const healthcareOrgname = location.state.healthcareOrgname;
    const healthcareAdminemail = location.state.healthcareAdminemail;
    // const healthCareData = location.state.healthcareData;
    // console.log("hey" + healthCareData);
    // const { data,  healthCareData } = location.state;
    // console.log("hello" + data);

    function formatSpecializations(specializationsArr) {
        var specializationsString = "";
        var specializationsLength = specializationsArr.length;
        for (let j = 0; j < specializationsLength - 1; j++) {
            specializationsString += specializationsArr[j];
            if (j != specializationsLength - 2) {
                specializationsString += ", ";
            }
        }
        if (specializationsLength != 1) {
            specializationsString += " and " + specializationsArr[specializationsLength - 1] + ".";
        } else {
            specializationsString = specializationsArr[0] + ".";
        }
        return specializationsString;
    }

    return (
        <div>
            <h1>Hello!</h1>
            {data.map(({ orgname, city, specializationsArr, admincontact, adminemail, address, beds }) =>
                <SNCUCard name={orgname} city={city} specializations={formatSpecializations(specializationsArr)} phone={admincontact}
                    email={adminemail} address={address} beds={beds} healthcareAdminemail={healthcareAdminemail} healthcareOrgname={healthcareOrgname} />

            )}
        </div>
    );

    // return (
    //     <div>
    //         <h1>Title</h1>
    //         cards
    //     </div>
    // )

}
