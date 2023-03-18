import React from 'react'

export default function ClickButton(props) {
    return <button onClick={props.handleSubmit} className='ClickButton'>{props.text}</button>
}