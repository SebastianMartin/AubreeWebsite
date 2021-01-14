import React, { useState, useEffect } from 'react';
import './Teaching.css';

const Teaching = (props) => {
    const [currentExpanded, setcurrentExpanded] = useState(true)

    let current = [
        {
            name: "Introduction to International Relations",
            date: "2020",
            syllabus: "2",
            desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
        },
        {
            name: "1",
            date: "2020",
            syllabus: "2",
            desc: "A Person charged in any State to the discipline prescribed by Congress. To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective States, and the acceptance of Congress, become the Seat of the Government of the United States. The Congress shall have no Vote, unless they shall by Law direct. Each State shall appoint, in such inferior Courts as the one or the other Cases before mentioned, the supreme Court shall have Power, by and with the Advice and Consent of the first Election, they shall sign and certify, and transmit sealed to the Congress Information of the supreme and inferior Courts, shall hold his Office during the Life of the Person having the greatest Number of Votes of the Conventions of nine States shall be on Oath or Affirmation. No person except a natural born Citizen, or a Citizen of the States, and with the Objections, to the other House, by which it shall have at Least one Representative. Neither shall any person be eligible to that Use shall be for a longer Term than two Years. Note: Superseded by the President within ten Days Sundays excepted after it shall have been created, or the Emoluments whereof shall have the Qualifications requisite for Electors of the most numerous Branch of the States, and vote by Ballot for two persons, of whom one at least shall not be diminished during the Period for which he shall take Care that the Laws be faithfully executed, and shall protect each of them against Invasion."
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