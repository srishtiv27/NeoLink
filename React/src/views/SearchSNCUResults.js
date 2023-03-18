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
            if (j !== specializationsLength - 2) {
                specializationsString += ", ";
            }
        }
        if (specializationsLength !== 1) {
            specializationsString += " and " + specializationsArr[specializationsLength - 1] + ".";
        } else {
            specializationsString = specializationsArr[0] + ".";
        }
        return specializationsString;
    }

    return data.map((el) => {
        return (
            <div>
                <SNCUCard name={el.orgname} city={el.city} specializations={formatSpecializations(el.specializationsArr)} phone={el.admincontact}
                    email={el.adminemail} address={el.address} beds={el.beds} healthcareAdminemail={healthcareAdminemail} healthcareOrgname={healthcareOrgname} />
            </div>
        )
    });

}
