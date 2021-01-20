import React, { useState, useEffect } from 'react';
import './Dissertation.css';

const Dissertation = (props) => {

    return (
        <div className ="DocumentPage">
            <div className = "DocumentPageMain"> 
            <h1>Understanding status of forces agreements: what
shapes jurisdictional control?</h1>
            <iframe  className = "DocumentPageDoc" src="https://drive.google.com/file/d/1ODhHynL6G1MZ_bwpStHKYIuxxf0SbSrz/preview"
             width="100%">
            </iframe>
            </div>
            
        </div>
    );




}
export default Dissertation;