import React, { useState, useEffect } from 'react';
import './Header.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const Header = (props) => {
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const scrollFunction = () => window.scrollTop
        || document.documentElement.scrollTop
        || document.body.scrollTop;
    //{
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         console.log(document.body.scrollTop)
    //     } else {
    //         console.log(document.body.scrollTop)
    //     }
    // }
    let [width, setWidth] = useState(getWidth());
    let [scroll, setScroll] = useState(scrollFunction());


    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        };
        window.addEventListener('resize', resizeListener);


        const scrollListener = () => {
            setScroll(scrollFunction())
            //console.log(scrollFunction())
        };
        window.addEventListener('scroll', scrollListener);
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
            value: "dissertation"
        },
        // {
        //     name: "Contact",
        //     value: "contact"
        // },
    ]


    if (isMobile) {
        // return (
        //     <div className="HeaderContainerMobile">
        //         <div className="HeaderMobileTopBar">
        //             <div className="HeaderIconContainer">
        //                 <div className={expanded ? "containerHeaderIcon" : "change"} onClick={() => setExpanded(!expanded)}>
        //                     <div className="bar1"></div>
        //                     <div className="bar2"></div>
        //                     <div className="bar3"></div>
        //                 </div>
        //             </div>
        //             <div className="HeaderMobileTitle">
        //                 <h1>Aubree Herrin Ph.D</h1>
        //             </div>


        //         </div>
        //         <div className={expanded ? "HeaderMobileDropDownHidden" : "HeaderMobileDropDown"}>
        //             {hdrValues.map((value) => (
        //                 <button key={Math.random()}
        //                     className="HeaderButton"
        //                     value={value.value}
        //                     onClick={(e) => (props.changeState({ page: e.target.value }), setExpanded(!expanded))}>
        //                     {value.name}
        //                 </button>
        //             ))}
        //         </div>



        //     </div>
        // );
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
                        <Link to={"/" + value.value}>
                            <button key={Math.random()}
                                className="HeaderButton"
                                value={value.value}
                                onClick={(e) => ( setExpanded(!expanded),() => (document.body.scrollTop = 0, document.documentElement.scrollTop = 0))}
                            >
                                {value.name}
                            </button>
                        </Link>
                    ))}
                </div>



            </div>
        );
    }
    else {
        return (
            <div className="HeaderContainer">
                <div className={(scrollFunction() > 50) ? "HeaderTitle HeaderTitleHidden" : "HeaderTitle"}>
                    <h1 >

                        Aubree Herrin Ph.D
                    </h1>
                </div>
                <div className="HeaderButtonContainer">
                    {hdrValues.map((value) => (
                        <Link to={"/" + value.value}>
                            <button key={Math.random()}
                                className="HeaderButton"
                                onClick ={() => (document.body.scrollTop = 0, document.documentElement.scrollTop = 0)}
                                value={value.value}>
                                {value.name}
                            </button>
                        </Link>
                    ))}
                </div>


            </div>
        );
    }





}
export default Header;