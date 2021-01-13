import React, { useState, useEffect } from 'react';
import './Header.css';
import Person from '../../Image/blankUser.png'

const Header = (props) => {
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        };
        window.addEventListener('resize', resizeListener);

    }, [])
    const isMobile = (width <= 1200);

    const [expanded, setExpanded] = useState(true)


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


    if (isMobile) {
        return (
            <div className="HeaderContainerMobile">
                <div className="HeaderMobileTopBar">
                    <div className="HeaderIconContainer">
                        <div className={expanded ? "containerHeaderIcon" : "change"} onClick={() => setExpanded(!expanded)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    <div className="HeaderMobileTitle">
                        <h1>Aubree Herrin Ph.D</h1>
                    </div>


                </div>
                <div className={expanded ? "HeaderMobileDropDownHidden" : "HeaderMobileDropDown"}>
                    {hdrValues.map((value) => (
                        <button key={Math.random()}
                            className="HeaderButton"
                            value={value.value}
                            onClick={(e) => (props.changeState({ page: e.target.value }), setExpanded(!expanded))}>
                            {value.name}
                        </button>
                    ))}
                </div>



            </div>
        );
    }
    else {
        return (
            <div className="HeaderContainer">
                <div>
                    <h1>Aubree Herrin Ph.D</h1>
                    <div className="HeaderButtonContainer">
                        {hdrValues.map((value) => (
                            <button key={Math.random()}
                                className="HeaderButton"
                                value={value.value}
                                onClick={(e) => props.changeState({ page: e.target.value })}>
                                {value.name}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        );
    }





}
export default Header;