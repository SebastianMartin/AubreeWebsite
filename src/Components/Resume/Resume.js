import React, { useState, useEffect } from 'react';
import './Resume.css';

const Resume = (props) => {
    return (
        <div className="DocumentPage">
            <div className="DocumentPageMain">
                <h1>Resume</h1>
                <iframe className="DocumentPageDoc" src= "https://drive.google.com/file/d/1EfDtWZp_TCGUb7VEOOxyI6abx2QbKK84/preview"
                 width="100%">
                </iframe>
            </div>

        </div>
    );




}
export default Resume;