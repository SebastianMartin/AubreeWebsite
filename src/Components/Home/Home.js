import React, { useState, useEffect } from 'react';
import './Home.css';
import Person from '../../Image/aubree-herrin.jpg'

const Home = (props) => {
    let awards = [
        {
            name: "Pay it Forward Travel Grant",
            location: "International Studies Association",
            date: "2019"
        },
        {
            name: "Travel Grant",
            location: "American Political Science Association",
            date: "2019"
        },
        {
            name: "Graduate College Summer Fellowship",
            location: "University of Iowa",
            date: "2019"
        },
        {
            name: "Graduate College Post-Comprehensive Research Fellowship",
            location: "University of Iowa",
            date: "2019"
        },
        {
            name: "Graduate Assistantship, Department of Political Science",
            location: "University of Iowa",
            date: "2015-2019"
        },
        {
            name: "Graduate College Presentation Travel Fund Award ",
            location: "University of Iowa Graduate Student Senate",
            date: "2019"
        },
        {
            name: "Travel Award",
            location: "University of Iowa Department of Political Science",
            date: "2015-2019"
        },
        {
            name: "Travel Grant for Annual Meeting and Exhibition",
            location: "American Political Science Association",
            date: "2019"
        },

    ]
    let About = "I am an assistant professor of international relations and comparative politics at Thiel College.\
     I earned by PhD in Political Science from the University of Iowa in 2020. I received my bachelors degree from Wittenberg University.\
     My research focus is the Status of Forces Agreements negotiated between states. How these agreements are negotiated and how their\
      structures influence and reflect the relationship between states."
    let Study = "My research focus is the Status of Forces Agreements negotiated between states.\
       How these agreements are negotiated and how their structures influence and reflect the relationship between states.\
      "


    return (
        <div className="HomeContainer">

            <div className="HomeTopSectionBackground">
                <div className="HomeGrid">

                    <div className="topImage">
                        <div className="topImageBackground">
                            <img
                                className="topImageImage"
                                src={Person}
                                alt="Not Found" />
                        </div>
                    </div>
                    <div className="AboutSection">
                        <h3>
                            Aubree Herrin Ph.D
                        </h3>
                        <p>
                            Assistant Professor of Political Science
                        </p>
                        <p>
                            Thiel College
                        </p>
                    </div>
                </div>
            </div >
            <div className="HomeSectionBacks">
                <div className="HomeGrid">

                    <div className="HomeInfoName LeftSide1">
                        <h2>
                            About Aubree
                            </h2>
                    </div>
                    <div className="HomeInfoDesc RightSide2" style={{ textAlign: "start" }}>
                        <p>
                            {About}
                        </p>
                        <br></br>
                        <p>

                        </p>
                    </div>
                </div>
                <div className="HomeGrid">


                    <div className="HomeInfoDesc LeftSide2">
                        <p>
                            {Study}                        </p>
                    </div>
                    <div className="HomeInfoName RightSide1">
                        <h2>
                            Area of Study
                         </h2>
                    </div>
                </div>



                <div className="HomeGrid">
                    <div className="HomeInfoName LeftSide1">
                        <h2>
                            Awards
                            </h2>
                    </div>
                    <div className="HomeInfoDesc RightSide2" >
                        {awards.map(
                            (award) => (
                                <div className="AwardInfo" key={Math.random()}>
                                    <h4>{award.name}</h4>
                                    <p>{award.date}</p>
                                </div>
                            ),
                        )}
                    </div>
                </div>

            </div>

            {/* <iframe 
            src="https://www.youtube.com/embed/_ui1GobPLC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        </div>
    );




}
export default Home;