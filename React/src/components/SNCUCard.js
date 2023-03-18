import React from 'react'
// import Button from './Button'
import VolunteerButton from './VolunteerButton'

export default function SNCUCard(props) {

    function handleSubmit(e) {
        e.preventDefault();
        var healthcareadminemail = props.healthcareAdminemail;
        var sncuadminemail = props.email;
        var healthcarename = props.healthcareOrgname;
        var sncuname = props.name;
        // console.log("SNCU Name: ", props.name);
        // console.log("SNCU Email: ", props.email);
        // console.log("Healthcare Provider Name: ", props.healthcareOrgname);
        // console.log("Healthcare Provider Email: ", props.healthcareAdminemail);
        fetch("http://localhost:3001/request-details", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                healthcareadminemail,
                sncuadminemail,
                healthcarename,
                sncuname
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("Details entered successfully");
                    // window.localStorage.setItem("token", data.data);
                    // // window.localStorage.setItem("loggedIn", true);

                    // window.location.href = "search-for-SNCU";
                } else {
                    alert("Error in submitting details");
                }
            });
    }
    return (
        <div className='SNCUCard'>
            <div>
                <h1 className='SNCUCardTitle'>{props.name}</h1>
                <p className='SNCUCardText'> {props.name} is located in {props.city} and specializes in {props.specializations}</p>
            </div>
            <div className='SNCUinformation'>
                <div>
                    <div className='SNCUinformation--row'>
                        <img className="SNCUinfoIcon" src="https://img.icons8.com/ios-glyphs/90/null/phone--v1.png" />
                        <p>{props.phone}</p>
                    </div>
                    <div className='SNCUinformation--row'>
                        <img className="SNCUinfoIcon" src="https://img.icons8.com/ios-glyphs/90/null/new-post.png" />
                        <p>{props.email}</p>
                    </div>
                </div>
                <div>
                    <div className='SNCUinformation--row'>
                        <img className="SNCUinfoIcon" src="https://img.icons8.com/ios-filled/90/null/marker.png" />
                        <p>{props.address}</p>
                    </div>
                    <div className='SNCUinformation--row'>
                        <img className="SNCUinfoIcon" src="https://img.icons8.com/ios-glyphs/90/null/bed.png" />
                        <p>{props.beds} beds</p>
                    </div>
                </div>
            </div>
            <div>
                {/* <VolunteerButton type="button" href="/register-healthcare" text="SEND REQUEST" /> */}
                <button onClick={handleSubmit} className='SNCUCardButton'>SEND REQUEST</button>
            </div>
            
        </div>
    )
}