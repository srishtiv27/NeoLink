import React from 'react'
import ClickButton from './ClickButton';
// import Button from './Button'
import VolunteerButton from './VolunteerButton'
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';
import { useEffect, useState } from "react";

export default function SNCUCard(props) {
    // function sendEmail(e) {
    //     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    //     emailjs.sendForm('service_gz1tomd', 'template_0pe5c6y', e.target, 'ipcVlGm78dm-XGRbs')
    //         .then((result) => {
    //             window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }
    const onSubmit = (e) => {
        // e.preventDefault();
        send(
            'service_gz1tomd',
            'template_0pe5c6y',
            toSend,
            'ipcVlGm78dm-XGRbs'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const [toSend, setToSend] = useState({
        from_name: 'NeoLink',
        to_name: 'Medstar SNCU',
        message: 'Hi! You have a new referral request',
        reply_to: 'nehalgupta8501@gmail.com',
    });
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onSubmit();
            console.log("Sent email");
        } catch(e) {
            console.log(e);
        }
       
       
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
                    alert("Request Sent");
                    // window.localStorage.setItem("token", data.data);
                    // // window.localStorage.setItem("loggedIn", true);

                    // window.location.href = "";
                } else {
                    alert("Error in sending request");
                }
            });
    };
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
                {/* <button onClick={handleSubmit} className='SNCUCardButton'>SEND REQUEST</button> */}
                <ClickButton handleSubmit={handleSubmit} text="SEND REQUEST"></ClickButton>
            </div>

        </div>
    )
}