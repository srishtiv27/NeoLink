import React from 'react'
import { CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

const vars = {
    'margin-top': '30px',
    '--cui-btn-color': "white",
    '--cui-btn-bg': "#10152C",
    '--cui-btn-border-color': 'transparent',
    '--cui-btn-padding-x': '40px',
    '--cui-btn-padding-y': '10px',
    '--cui-btn-font-family': 'Lato',
    '--cui-btn-font-size': '15px',
    '--cui-btn-font-weight': '600',
    '--cui-btn-hover-color': 'black',
    '--cui-btn-hover-bg': '#D0EAFE',
    '--cui-btn-hover-border-color': '#10152C',
    '--cui-btn-active-color': 'black',
    '--cui-btn-active-bg': '##D0EAFE',
    '--cui-btn-active-border-color': 'transparent'
}

export default function VolunteerButton(props) {
    return  (
        <CButton style={vars} href={props.href} shape="rounded-pill">{props.text}</CButton>
    )
}