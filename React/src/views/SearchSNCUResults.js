import React, { Component, useEffect, useReducer, useState } from "react";

export default function SearchSNCUResults() {
    const [data, setData] = useState(localStorage.getItem("data"));
    console.log("Search SNCU Results: " + data);

    useEffect(() => {
        var data = window.localStorage.getItem("data");
        // console.log("Search SNCU Results: " + data);
    });

    return (
        <div>
            <h1>Hi! I am the Search for SNCU Page</h1>
        </div>
    )
}
