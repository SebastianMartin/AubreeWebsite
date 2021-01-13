import React, { useState, useEffect } from 'react';
import './Dissertation.css';
import diss from '../../Content/dissertation.pdf'

const Dissertation = (props) => {

    return (
        <div className ="Dissertation">
            <div className = "DissertationMain"> 
            <h1>Understanding Status of Forces Agreements</h1>
            <iframe  className = "DissertationDoc" src={diss} width="100%">
            </iframe>
            </div>
            
        </div>
    );




}
export default Dissertation;