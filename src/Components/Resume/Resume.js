import React, { useState, useEffect } from 'react';
import './Resume.css';
import resume from '../../Content/herrinCV.pdf'

const Resume = (props) => {

    return (
        <div className ="Resume">
            <div className = "ResumeMain"> 
            <h1>Understanding status of forces agreements: what
shapes jurisdictional control?</h1>
            <iframe  className = "ResumeDoc" src={resume} width="100%">
            </iframe>
            </div>
            
        </div>
    );




}
export default Resume;