import React, { Component, useEffect, useReducer, useState } from "react";
import NavbarHealthcare from "../components/NavbarHealthcare";

export default function SearchForSNCU() {
    const [adminname, setadminname] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/healthcare-data", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");

                setadminname(data.data.adminname);

                if (data.data == "token expired") {
                    alert("Token expired login again");
                    window.localStorage.clear();
                    // window.location.href = "./sign-in";
                }
            });
    }, []);

    return (
        <main className="search-for-SNCU-main">
            <NavbarHealthcare />
            <div className="search-for-SNCU-main--content">
                <h1 className="search-for-SNCU--title">Welcome {adminname}!</h1>
            </div>
        </main>
    );
}