import React, { Component, useEffect, useReducer, useState } from "react";
import { useLocation } from 'react-router-dom';
import SNCUCard from "../components/SNCUCard";

export default function SearchSNCUResults() {
    const location = useLocation();
    // const [data, setData] = useState(localStorage.getItem("data"));
    // console.log("Search SNCU Results: " + location.state.data.orgname);
    const data = location.state.data;

    // useEffect(() => {
    //     var data = window.localStorage.getItem("data");
    //     // console.log("Search SNCU Results: " + data);
    // });

    return data.map((el) => {
        return (
            <div>
                <SNCUCard name={el.orgname} city={el.city} specializations={el.specializationsArr} phone={el.admincontact}
                    email={el.adminemail} address={el.address} beds={el.beds} />
            </div>
        )
    });

}
