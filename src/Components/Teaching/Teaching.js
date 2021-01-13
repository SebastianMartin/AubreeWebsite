import React, { useState, useEffect } from 'react';
import './Teaching.css';

const Teaching = (props) => {
    const [currentExpanded, setcurrentExpanded] = useState(true)

    let current = [
        {
            name: "1",
            date: "2020",
            syllabus: "2",
            desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
        },
        {
            name: "1",
            date: "2020",
            syllabus: "2",
            desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
        },


    ]

    return (
        <div className="TeachingContainer">
            <div className="TeachingSectionWrapper">
                <div className="TeachingSection">
                    <div onClick={() => setcurrentExpanded(!currentExpanded)} className="TeachingSectionHeader">
                        <h1>Current Classes</h1>
                    </div>
                    <div className="TeachingSectionExpanded">
                        {current.map(
                            (cCLass) => (
                                <div className={currentExpanded ? "TeachingSectionGrid" : "TeachingSectionCollapsed"}>
                                    <h1>
                                        {cCLass.name}
                                    </h1>
                                    <p>{cCLass.date}</p>
                                    <button>Syllabus</button>
                                    <p>{cCLass.desc}</p>
                                </div>
                            ),
                        )}


                    </div>

                </div>
            </div>
            
        </div>
    );




}
export default Teaching;