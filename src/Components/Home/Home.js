import React, { useState, useEffect } from 'react';
import './Home.css';
import Person from '../../Image/aubree-herrin.jpg'

const Home = (props) => {
    let awards = [
        {
            name: "Graduate College Summer Fellowship",
            location: "University of Iowa",
            date: "Summer 2019"
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
                    <div className="HomeInfoDesc RightSide2">
                        <p>
                            adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra

                        </p>
                    </div>





                    <div className="HomeInfoDesc LeftSide2">
                        <p>
                            Aubree’s research centers on international relations and comparative politics. She is creating a dataset of status of forces agreements and evaluates these military alliances in her dissertation. She has taught several courses in international relations, comparative politics and American politics. She has experience teaching foreign policy, terrorism, the presidency, and introductory courses in both international relations and comparative politics. She is completing the University’s Graduate Certificate in College Teaching.
                        </p>
                    </div>
                    <div className="HomeInfoName RightSide1">
                        <h2>
                            Area of Study
                            </h2>
                    </div>





                    <div className="HomeInfoName LeftSide1">
                        <h2>
                            Awards
                            </h2>
                    </div>
                    <div className="HomeInfoDesc RightSide2">
                        {awards.map(
                            (award) => (
                                <div className="AwardInfo" key={Math.random()}>
                                    <h4>{award.name}</h4>
                                    <p>{award.location}</p>
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