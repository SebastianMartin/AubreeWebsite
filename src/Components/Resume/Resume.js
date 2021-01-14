import React, { useState, useEffect } from 'react';
import './Resume.css';

const Resume = (props) => {
    return (
        <div className="DocumentPage">
            <div className="DocumentPageMain">
                <h1>Resume</h1>
                <iframe className="DocumentPageDoc" src= "https://drive.google.com/file/d/1jjGlKsahTY6Fs6ZQwmM7U4uG-J5JokgS/preview"
                 width="100%">
                </iframe>
            </div>

        </div>
    );




}
export default Resume;