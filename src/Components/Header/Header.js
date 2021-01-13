import React, { useState, useEffect } from 'react';
import './Header.css';
import Person from '../../Image/blankUser.png'

const Header = (props) => {


    let hdrValues = [
        {
            name: "Home",
            value: "home"
        },
        {
            name: "Teaching",
            value: "teaching"
        },
        {
            name: "Resume",
            value: "resume"
        },
        {
            name: "Dissertation",
            value: "diss"
        },
        {
            name: "Contact",
            value: "contact"
        },
    ]
    let hdrButtons = []



    return (
        <div className="HeaderContainer">
            <div>
                <h1>Aubree Herrin Ph.D</h1>
                <div className="HeaderButtonContainer">
                    {hdrValues.map((value) =>(
                        <button key={Math.random()}
                        className="HeaderButton"
                        value={value.value}
                        onClick = {(e) => props.changeState({page:e.target.value})}>
                        {value.name}
                    </button>
                    ))}
                    {hdrButtons}
                </div>
            </div>

        </div>
    );




}
export default Header;