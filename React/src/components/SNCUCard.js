import React from 'react'
import VolunteerButton from './VolunteerButton'

export default function SNCUCard(props) {
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
                <VolunteerButton type="button" href="/register-healthcare" text="SEARCH FOR SNCU" />
            </div>
            
        </div>
    )
}