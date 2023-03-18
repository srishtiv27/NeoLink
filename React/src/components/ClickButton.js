import React from 'react'

export default function ClickButton(props) {
    return (
        <button onClick={props.onclick} className='ClickButton'>{props.text}</button>
    )
}