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

    ]
    let past = [
        {
            date: "Fall 2020",
            classes: [
                {
                    name: "Intro to Comparative",
                    number:"POSC 146",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1X5IVAoEKb-4zbD1S8BZeKIKUZ4aVHNGe/preview",
                    desc: "This course serves as an introduction to the subfield of comparative politics. The course surveys a number \
                    of basic topics and themes central to the study of comparative political systems. Topics to be examined  include political culture and socialization, participation in politics, governmental structures, decision-                    making, economic and social policies, and evaluation of performance. These topics will be explored inselected countries from Asia, Europe, Africa, the Middle East and North America. Usually offered every\
                    semester."
                },
                {
                    name: "Public Policy",
                    number:"POSC 236",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1FdA6qdDw4Lj_1j9qoCSBNn2Sa2tJj3jm/preview",
                    desc: "This course addresses the study of contemporary public policy problems in the United States.\
                    Students will develop descriptive, analytic and advocacy skills while studying public policy\
                    issues concerning such matters as the environment, social welfare, health, education, business\
                    regulation, economic development, communication, transportation, and housing"
                },
                {
                    name: "Politics of Developing Societies",
                    number:"POSC 327",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1Gpg2DBTrAU1RYdGk5a0yxQfNoO02DTjL/preview",
                    desc: "This course serves as an introduction to the political systems of the Third World. The course will\
                    focus on issues associated with the legacy of colonialism, economic development, culture,\
                    political institutions and policy- making. The course will also introduce students to some of the\
                    concepts, theories and methods of comparative analysis."
                },
            ]
        },
        {
            date: "Spring 2020",
            classes: [
                {
                    name: "National Security Policy",
                    number:"POLI:3520",
                    date: "2020",
                    syllabus: "",
                    desc: ""
                },
            ]
        },
        {
            date: "Spring 2019",
            classes: [
                {
                    name: "Introduction to International Relations",
                    number:"POLI:1500:EXW",
                    date: "2020",
                    syllabus: "",
                    desc: "A Person charged in any State to the discipline prescribed by Congress. To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective States, and the acceptance of Congress, become the Seat of the Government of the United States. The Congress shall have no Vote, unless they shall by Law direct. Each State shall appoint, in such inferior Courts as the one or the other Cases before mentioned, the supreme Court shall have Power, by and with the Advice and Consent of the first Election, they shall sign and certify, and transmit sealed to the Congress Information of the supreme and inferior Courts, shall hold his Office during the Life of the Person having the greatest Number of Votes of the Conventions of nine States shall be on Oath or Affirmation. No person except a natural born Citizen, or a Citizen of the States, and with the Objections, to the other House, by which it shall have at Least one Representative. Neither shall any person be eligible to that Use shall be for a longer Term than two Years. Note: Superseded by the President within ten Days Sundays excepted after it shall have been created, or the Emoluments whereof shall have the Qualifications requisite for Electors of the most numerous Branch of the States, and vote by Ballot for two persons, of whom one at least shall not be diminished during the Period for which he shall take Care that the Laws be faithfully executed, and shall protect each of them against Invasion."
                },
            ]
        },
        {
            date: "Fall 2018",
            classes: [
                {
                    name: "Introduction to Comparative Politics",
                    number:"POLI:1400:EXW",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1a_pFU8xyuOWr-_5rxBDXn2kzQfovrJ5M/preview",
                    desc: "The goal/purpose of this course is to introduce a set of ideas and concepts that emphasize the\
                    common experiences in governance across different societies.",
                },
                {
                    name: "Political Psychology",
                    number:"POLI:3202:0EXW",
                    date: "2020",
                    syllabus: "https://drive.google.com/file/d/1u0dgnXden-x9zM8z3_uHOA3OIdNEoX6k/preview",
                    desc: "Are we born Democrat or Republican, or raised that way? How do gender, \
                    race, and culture affect politics? This course will introduce a psychological \
                    approach to thinking about politics in the US and in other countries. \
                    In pursuit of understanding political conflict, the course will cover topics such as trait \
                    theory, motivated reasoning, ideological polarization, and theories about morality and values. "
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