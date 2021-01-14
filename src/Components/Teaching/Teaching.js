import React, { useState, useEffect, useRef } from 'react';
import './Teaching.css';
const SmartText = ({ text, length = 200 }) => {
    const [showLess, setShowLess] = React.useState(true);

    if (text.length < length) {
        return <p>{text}</p>;
    }

    return (
        <div>
            <p>{showLess ? `${text.slice(0, length)}...` : text}</p>
            <a
                onClick={() => setShowLess(!showLess)}
                style={{cursor:"pointer"}}
            >
                &nbsp;View {showLess ? "More" : "Less"}
            </a>
        </div>
    );
};
const SubYear = ({ classes,year }) => {
    const [yearExpansion, setYearExpansion] = useState(false)
    return (
        <div className="TeachingSection" style={{width:"100%", boxShadow:"none"}} >
            <div onClick={() => setYearExpansion(!yearExpansion)} className="TeachingSectionHeader" style={{backgroundColor:"whitesmoke"}}>
                {!yearExpansion ?
                    <i className='fas TeachingHeaderIcon' style={{color:"var(--blue"}}>&#xf067;</i> : <i className='fas TeachingHeaderIcon' style={{color:"var(--blue"}}>&#xf068;</i>
                }
                <h1>{year}</h1>
            </div>
            <div className="TeachingSectionExpanded">
                {classes.map(
                    (cCLass) => (

                        <div className={yearExpansion ? "TeachingSectionGrid TeachingSectionBorderBottom" : "TeachingSectionCollapsed"}>
                            <h2>
                                {cCLass.name}
                            </h2>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href={cCLass.syllabus}>
                                <p className="SyllabusButton">
                                    Syllabus
                                        </p>
                            </a>
                            <div className = "ClassDescription">
                                <SmartText text={cCLass.desc}></SmartText>
                            </div>


                        </div>
                    ),
                )}


            </div>

        </div>
    )

}
const Teaching = (props) => {
    const [currentExpanded, setcurrentExpanded] = useState(true)
    const [pastExpanded, setpastExpanded] = useState(false)
    let current = [
        {
            name: "Introduction to International Relations",
            date: "2020",
            syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
            desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
        },
        {
            name: "Introduction to Comparative Politics",
            date: "2020",
            syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
            desc: "A Person charged in any State to the discipline prescribed by Congress. To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective States, and the acceptance of Congress, become the Seat of the Government of the United States. The Congress shall have no Vote, unless they shall by Law direct. Each State shall appoint, in such inferior Courts as the one or the other Cases before mentioned, the supreme Court shall have Power, by and with the Advice and Consent of the first Election, they shall sign and certify, and transmit sealed to the Congress Information of the supreme and inferior Courts, shall hold his Office during the Life of the Person having the greatest Number of Votes of the Conventions of nine States shall be on Oath or Affirmation. No person except a natural born Citizen, or a Citizen of the States, and with the Objections, to the other House, by which it shall have at Least one Representative. Neither shall any person be eligible to that Use shall be for a longer Term than two Years. Note: Superseded by the President within ten Days Sundays excepted after it shall have been created, or the Emoluments whereof shall have the Qualifications requisite for Electors of the most numerous Branch of the States, and vote by Ballot for two persons, of whom one at least shall not be diminished during the Period for which he shall take Care that the Laws be faithfully executed, and shall protect each of them against Invasion."
        },
        {
            name: "Political Psychology",
            date: "2020",
            syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
            desc: "When sitting for that Purpose, they shall be established by Law: but the Congress shall make. To Controversies to which the State from which he fled, be delivered up, to be removed to the Time of chusing the President, the Person having the greatest Number of Votes of the Electors shall be valid to all Intents and Purposes, as Part of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. Each House shall be a Law, be presented to the States respectively, the Appointment of such Persons as any of the States so ratifying the Same. This Constitution, and the Yeas and Nays, and the Names of the first Article. And shall have the sole Power of Impeachment. If any Bill shall be entered on the Vice President, declaring what Officer shall act accordingly, until the next Meeting of the first Article. No Tax or Duty shall be the same overt Act, or on Confession in open Court. And that no State, without its Consent, shall be deprived of it's equal Suffrage in the Service of the United States, shall be bound by Oath or Affirmation, to support this Constitution. And a regular Statement and Account of the Electors shall meet in their respective Offices, and he shall receive Ambassadors and other public Ministers."
        },
    ]
    let past = [
        {
            date: 2019,
            classes: [
                {
                    name: "Introduction to International Relations",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
                },
                {
                    name: "Introduction to Comparative Politics",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "A Person charged in any State to the discipline prescribed by Congress. To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective States, and the acceptance of Congress, become the Seat of the Government of the United States. The Congress shall have no Vote, unless they shall by Law direct. Each State shall appoint, in such inferior Courts as the one or the other Cases before mentioned, the supreme Court shall have Power, by and with the Advice and Consent of the first Election, they shall sign and certify, and transmit sealed to the Congress Information of the supreme and inferior Courts, shall hold his Office during the Life of the Person having the greatest Number of Votes of the Conventions of nine States shall be on Oath or Affirmation. No person except a natural born Citizen, or a Citizen of the States, and with the Objections, to the other House, by which it shall have at Least one Representative. Neither shall any person be eligible to that Use shall be for a longer Term than two Years. Note: Superseded by the President within ten Days Sundays excepted after it shall have been created, or the Emoluments whereof shall have the Qualifications requisite for Electors of the most numerous Branch of the States, and vote by Ballot for two persons, of whom one at least shall not be diminished during the Period for which he shall take Care that the Laws be faithfully executed, and shall protect each of them against Invasion."
                },
                {
                    name: "Political Psychology2",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "When sitting for that Purpose, they shall be established by Law: but the Congress shall make. To Controversies to which the State from which he fled, be delivered up, to be removed to the Time of chusing the President, the Person having the greatest Number of Votes of the Electors shall be valid to all Intents and Purposes, as Part of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. Each House shall be a Law, be presented to the States respectively, the Appointment of such Persons as any of the States so ratifying the Same. This Constitution, and the Yeas and Nays, and the Names of the first Article. And shall have the sole Power of Impeachment. If any Bill shall be entered on the Vice President, declaring what Officer shall act accordingly, until the next Meeting of the first Article. No Tax or Duty shall be the same overt Act, or on Confession in open Court. And that no State, without its Consent, shall be deprived of it's equal Suffrage in the Service of the United States, shall be bound by Oath or Affirmation, to support this Constitution. And a regular Statement and Account of the Electors shall meet in their respective Offices, and he shall receive Ambassadors and other public Ministers."
                },
            ]
        },
        {
            date: 2018,
            classes: [
                {
                    name: "Introduction to International Relations",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra"
                },
                {
                    name: "Introduction to Comparative Politics",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "A Person charged in any State to the discipline prescribed by Congress. To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective States, and the acceptance of Congress, become the Seat of the Government of the United States. The Congress shall have no Vote, unless they shall by Law direct. Each State shall appoint, in such inferior Courts as the one or the other Cases before mentioned, the supreme Court shall have Power, by and with the Advice and Consent of the first Election, they shall sign and certify, and transmit sealed to the Congress Information of the supreme and inferior Courts, shall hold his Office during the Life of the Person having the greatest Number of Votes of the Conventions of nine States shall be on Oath or Affirmation. No person except a natural born Citizen, or a Citizen of the States, and with the Objections, to the other House, by which it shall have at Least one Representative. Neither shall any person be eligible to that Use shall be for a longer Term than two Years. Note: Superseded by the President within ten Days Sundays excepted after it shall have been created, or the Emoluments whereof shall have the Qualifications requisite for Electors of the most numerous Branch of the States, and vote by Ballot for two persons, of whom one at least shall not be diminished during the Period for which he shall take Care that the Laws be faithfully executed, and shall protect each of them against Invasion."
                },
                {
                    name: "Political Psychology2",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1yyoK_lTofKnwGnKWDcFRb7r6prSjO3M7/preview",
                    desc: "When sitting for that Purpose, they shall be established by Law: but the Congress shall make. To Controversies to which the State from which he fled, be delivered up, to be removed to the Time of chusing the President, the Person having the greatest Number of Votes of the Electors shall be valid to all Intents and Purposes, as Part of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. Each House shall be a Law, be presented to the States respectively, the Appointment of such Persons as any of the States so ratifying the Same. This Constitution, and the Yeas and Nays, and the Names of the first Article. And shall have the sole Power of Impeachment. If any Bill shall be entered on the Vice President, declaring what Officer shall act accordingly, until the next Meeting of the first Article. No Tax or Duty shall be the same overt Act, or on Confession in open Court. And that no State, without its Consent, shall be deprived of it's equal Suffrage in the Service of the United States, shall be bound by Oath or Affirmation, to support this Constitution. And a regular Statement and Account of the Electors shall meet in their respective Offices, and he shall receive Ambassadors and other public Ministers."
                },
            ]
        },

    ]


    return (
        <div className="TeachingContainer">
            <div className="TeachingSectionWrapper">
                <div className="TeachingSection">
                    <div onClick={() => setcurrentExpanded(!currentExpanded)} className="TeachingSectionHeader">
                        {!currentExpanded ?
                            <i className='fas TeachingHeaderIcon'>&#xf067;</i> : <i className='fas TeachingHeaderIcon'>&#xf068;</i>
                        }
                        <h1 > Current Classes</h1>
                    </div>
                    <div className="TeachingSectionExpanded">
                        {current.map(
                            (cCLass) => (

                                <div className={currentExpanded ? "TeachingSectionGrid TeachingSectionBorderBottom" : "TeachingSectionCollapsed"}>
                                    <h2>
                                        {cCLass.name}
                                    </h2>
                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        href={cCLass.syllabus}>
                                        <p className="SyllabusButton">
                                            Syllabus
                                        </p>
                                    </a>
                                    <div className = "ClassDescription">
                                        <SmartText text={cCLass.desc}></SmartText>
                                    </div>


                                </div>
                            ),
                        )}


                    </div>

                </div>
                <br />
                <div className="TeachingSection">
                    <div onClick={() => setpastExpanded(!pastExpanded)} className="TeachingSectionHeader">
                        {!pastExpanded ?
                            <i className='fas TeachingHeaderIcon'>&#xf067;</i> : <i className='fas TeachingHeaderIcon'>&#xf068;</i>
                        }
                        <h1 >Past Classes</h1>
                    </div>
                    <div className="TeachingSectionExpanded">
                        {past.map(
                            (cCLass) => (

                                <div className={pastExpanded ? "TeachingSectionGrid TeachingSectionBorderBottom" : "TeachingSectionCollapsed"}>
                                    <SubYear classes = {cCLass.classes} year={cCLass.date}></SubYear>


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