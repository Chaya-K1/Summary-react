import React from "react";
import "../css/Home.css";
import logo from "../Images/O-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
    return (
        <>
            <div className='container'>
                <img src={logo} className="m-5 center d-inline rgba-white-strong"></img><h1 className='d-inline font-weight-bold display-1'>ptics</h1>
            </div>
        </>
    )
}