import React, { useState, useEffect } from 'react';
import './Footer.css';


const Footer = (props) => {

    return (
        <footer>
            <div className="footerContainer">
                <div className="footerwrapper noleftborder">
                    <h1>Theil College:</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.2552171847915!2d-80.38611194864636!3d41.41197820233081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833b6c3d45a1eab%3A0x51bddff2c6a36816!2sThiel%20College!5e0!3m2!1sen!2sus!4v1610597345232!5m2!1sen!2sus"
                        className="footerMap"
                        title="Thiel University"
                        aria-hidden="false"
                        tabIndex="0">

                    </iframe>

                </div>
                <div className="footerwrapper">

                    <h1>Contact:</h1>
                    <div className="footerInfo">
                            <div className="footerDoubleGrid">
                                <h4>Email:</h4>
                                <a href="mailto:aherrin@thiel.edu">
                                    <p>aherrin@thiel.edu</p>
                                </a>
                            </div>
                            <div className="footerDoubleGrid">
                                <h4>LinkedIn:</h4>
                                <a href="mailto:aherrin@thiel.edu">
                                    <p>aherrin@thiel.edu</p>
                                </a>
                            </div>
                            <div className="footerDoubleGrid">
                                <h4>Facebook:</h4>
                                <a href="mailto:aherrin@thiel.edu">
                                    <p>aherrin@thiel.edu</p>
                                </a>
                            </div>

                    </div>
                </div>
                <div className="footerwrapper">
                <h1>Website Info:</h1>
                    <div className="footerInfo">
                            <div className="footerDoubleGrid">
                                <h4>Created by:</h4>
                                <a href="mailto:aherrin@thiel.edu">
                                    <p>Sebastian Martin</p>
                                </a>
                            </div>
                            {/* <div className="footerDoubleGrid">
                                <h4>Portfolio:</h4>
                                <a href="mailto:aherrin@thiel.edu">
                                    <p>aherrin@thiel.edu</p>
                                </a>
                            </div> */}
                    </div>
                </div>
            </div>

        </footer>
    );




}
export default Footer;