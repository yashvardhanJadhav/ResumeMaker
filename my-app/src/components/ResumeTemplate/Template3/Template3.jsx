import React, { useEffect, useState } from 'react'
import './template3css.css'
function Template3() {
    const [getData, setGetData] = useState({
        "personalInfo": [
            {
                "_id": "64743bf4fe7e9201a567f321",
                "user": "64743bd1fe7e9201a567f31f",
                "firstName": "Yashvardhan",
                "lastName": "Jadhav",
                "address": "Mandsaur",
                "city": "Mandsaur",
                "country": "India",
                "zipCode": "458001",
                "email": "yashvardhann743@gmail.com",
                "linkedin": "",
                "github ": "",
                "phone": "8109212860",
                "__v": 0
            }
        ],
        "experience": [
            {
                "_id": "64743c08fe7e9201a567f323",
                "user": "64743bd1fe7e9201a567f31f",
                "employer": "Capgemini",
                "jobTitle": "Senior Engineer",
                "city": "Indore",
                "state": "Madhya Pradesh",
                "startDate": "2023-05-01T00:00:00.000Z",
                "endDate": "2023-05-28T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "64743c17fe7e9201a567f325",
                "user": "64743bd1fe7e9201a567f31f",
                "employer": "Cognizant",
                "jobTitle": "Software Developer",
                "city": "Indore",
                "state": "Madhya Pradesh",
                "startDate": "2023-05-16T00:00:00.000Z",
                "endDate": "2023-06-02T00:00:00.000Z",
                "__v": 0
            }
        ],
        "education": [
            {
                "_id": "64743c3afe7e9201a567f327",
                "user": "64743bd1fe7e9201a567f31f",
                "schoolName": "Saraswati Vidya Madir Sr. Secondary School",
                "city": "Mandsaur",
                "degree": "Higher Secondary",
                "fieldOfStudy": "General",
                "score": "85",
                "state": "Madhya Pradesh",
                "graduationDate": "2023-06-09T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "64743c56fe7e9201a567f329",
                "user": "64743bd1fe7e9201a567f31f",
                "schoolName": "Saraswati Vidya Madir Sr. Secondary School",
                "city": "Mandsaur",
                "degree": "Higher Secondary",
                "fieldOfStudy": "Computer Science",
                "score": "91.8",
                "state": "Madhya Pradesh",
                "graduationDate": "2023-05-24T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "64743c79fe7e9201a567f32b",
                "user": "64743bd1fe7e9201a567f31f",
                "schoolName": "Medi-Caps University",
                "city": "Indore",
                "degree": "Bachelor in Technology",
                "fieldOfStudy": "Computer Science",
                "score": "91.8",
                "state": "Madhya Pradesh",
                "graduationDate": "2023-06-10T00:00:00.000Z",
                "__v": 0
            }
        ],
        "project": [
            {
                "_id": "6474a8efeb033bc091a39499",
                "user": "64743bd1fe7e9201a567f31f",
                "projectName": "Crypto Tracker",
                "projectDescription": "These is crypto Tracking application developed my yashvardhan jadhav",
                "link": "http://yashvardhan-jadhav.netlify.app",
                "startDate": "2003-03-25T00:00:00.000Z",
                "endDate": "2000-03-25T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "6474a9e2eb033bc091a3949b",
                "user": "64743bd1fe7e9201a567f31f",
                "projectName": "Note pad",
                "projectDescription": "THESE IS NOTEPAD APPLICATION WHICH HELPS YOU TO SAVE PROJECT AND YOUR NOTE RELATED WORK EASILY",
                "link": "http://yashvardhan-jadhav.netlify.app",
                "startDate": "2003-03-25T00:00:00.000Z",
                "endDate": "2003-03-25T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "6474af9feb033bc091a3949d",
                "user": "64743bd1fe7e9201a567f31f",
                "projectName": "new project",
                "projectDescription": "these is new project developed by me",
                "link": "http://yashvardhan-jadhav.netlify.app",
                "startDate": "2003-03-25T00:00:00.000Z",
                "endDate": "2003-03-25T00:00:00.000Z",
                "__v": 0
            }
        ],
        "summary": [
            {
                "_id": "64743c94fe7e9201a567f32f",
                "user": "64743bd1fe7e9201a567f31f",
                "summaryText": "I am a student of Medi-caps University ,Indore with a major in Computer Science. I am passionate about pursuing my major in Information Technology and Computer Science.",
                "__v": 0
            }
        ],
        "skill": [
            {
                "_id": "6474fa7c9832d58fd7e94cb9",
                "user": "64743bd1fe7e9201a567f31f",
                "skill": "dancing",
                "skillLevel": "Novice",
                "__v": 0
            },
            {
                "_id": "6474faa49832d58fd7e94cbb",
                "user": "64743bd1fe7e9201a567f31f",
                "skill": "helping",
                "skillLevel": "Skillful",
                "__v": 0
            }
        ]
    })

    const fetchAllNotes = async () => {
        let fetchURL = `http://localhost:3000/api/v1/userCred/getUserInfo`;
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json)
        setGetData(json)
    }
    useEffect(() => {
        fetchAllNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="resume-wrapper p-4">
                <h1
                    style={{
                        paddingTop: "6pt",
                        paddingLeft: "6pt",
                        textIndent: "0pt",
                        lineHeight: "28pt",
                        textAlign: "left"
                    }}
                >
                    Yashvardhan Jadhav
                </h1>
                <p
                    className="s1"
                    style={{
                        paddingLeft: "6pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left"
                    }}
                >
                    <span
                        style={{
                            color: "black",
                            fontFamily: "Calibri, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "underline",
                            fontSize: "11pt"
                        }}
                    >
                        yashvardhan-jadhav.com
                    </span>
                    <a
                        href="https://www.linkedin.com/in/yashvardhan-jadhav-319621200/"
                        style={{
                            color: "black",
                            fontFamily: '"Times New Roman", serif',
                            fontStyle: "italic",
                            fontWeight: "normal",
                            textDecoration: "none",
                            fontSize: "11pt"
                        }}
                        target="_blank"
                    >
                        |{" "}
                    </a>
                    <span
                        style={{
                            color: "black",
                            fontFamily: "Calibri, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "underline",
                            fontSize: "11pt"
                        }}
                    >
                        LinkedIn
                    </span>
                    <a
                        href="https://github.com/yashvardhanJadhav"
                        style={{
                            color: "black",
                            fontFamily: '"Times New Roman", serif',
                            fontStyle: "italic",
                            fontWeight: "normal",
                            textDecoration: "none",
                            fontSize: "11pt"
                        }}
                        target="_blank"
                    >
                        |{" "}
                    </a>
                    <span
                        style={{
                            color: "black",
                            fontFamily: "Calibri, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "underline",
                            fontSize: "11pt"
                        }}
                    >
                        GitHub
                    </span>
                    <span className="s2">| </span>
                    <a
                        href="mailto:yashvardhan@gmail.com"
                        style={{
                            color: "black",
                            fontFamily: "Calibri, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "none",
                            fontSize: "11pt"
                        }}
                        target="_blank"
                    >
                        Email:{" "}
                    </a>
                    <span
                        style={{
                            color: "black",
                            fontFamily: "Calibri, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "underline",
                            fontSize: "11pt"
                        }}
                    >
                        yashvardhann743@gmail.com
                    </span>
                    <span className="s2">| </span>Mobile: 8109212860
                </p>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s3"
                    style={{ paddingLeft: "6pt", textIndent: "0pt", textAlign: "left" }}
                >
                    <a name="bookmark0">
                        PERSONAL
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        INFO
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </p>
                <p
                    style={{
                        paddingTop: "10pt",
                        paddingLeft: "6pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    I am a student of Medi-caps University ,Indore with a major in Computer
                    Science. I am passionate about pursuing my major in Information Technology
                    and Computer Science.I enjoy solving technical problems, researching and
                    developing new technologies, designing software applications for different
                    platforms.
                </p>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s3"
                    style={{ paddingLeft: "6pt", textIndent: "0pt", textAlign: "left" }}
                >
                    <a name="bookmark1">
                        EDUCATION
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </p>
                <h2
                    style={{
                        paddingTop: "11pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Bachelor of Technology in Computer Science{" "}
                    <span className="p">Indore, India</span>
                </h2>
                <p
                    className="s4"
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Medicaps University august 2020 – present
                </p>
                <p
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Score – 9.34 CGPA
                </p>
                <h2
                    style={{
                        paddingTop: "6pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Higher Secondary <span className="p">Mandsaur, India</span>
                </h2>
                <p
                    className="s4"
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Saraswati Vidya Mandir august 2019 – 2020
                </p>
                <p
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Score – 91.8 Percentage
                </p>
                <h2
                    style={{
                        paddingTop: "6pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Secondary <span className="p">Mandsaur, India</span>
                </h2>
                <p
                    className="s4"
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Saraswati Vidya Mandir august 2017 – 2018
                </p>
                <p
                    style={{
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        lineHeight: "12pt",
                        textAlign: "left"
                    }}
                >
                    Score – 83.8 Percentage
                </p>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s3"
                    style={{ paddingLeft: "6pt", textIndent: "0pt", textAlign: "left" }}
                >
                    <a name="bookmark2">
                        PROJECTS
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </p>
                <h2
                    style={{
                        paddingTop: "11pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    <span
                        style={{
                            color: "black",
                            fontFamily: '"Trebuchet MS", sans-serif',
                            fontStyle: "normal",
                            fontWeight: "bold",
                            textDecoration: "underline",
                            fontSize: "10pt"
                        }}
                    >
                        CryptoTracker
                    </span>
                    <span className="s4">
                        React.js, Tailwind CSS, CoinGecko API, Javascript{" "}
                    </span>
                    <span className="p">Dec - jan 2022</span>
                </h2>
                <ul id="l1">
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            CryptoTracker is a web application which displays crypto currency
                            detailed analysis.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            Technology required - React js, Javascript, HTML, CSS,Tailwind css.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            It takes the data from API.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            It shows the live detailed analysis of coin.
                        </p>
                        <h2
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "16pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            <a
                                href="http://conference.medicaps.ac.in/"
                                className="s5"
                                target="_blank"
                            >
                                IEEE Conference{" "}
                            </a>
                            <span
                                style={{
                                    color: "black",
                                    fontFamily: '"Trebuchet MS", sans-serif',
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                    fontSize: "10pt"
                                }}
                            >
                                Website
                            </span>
                            <span className="s4">Reacj.js, Tailwind CSS, JavaScript </span>
                            <span className="p">Jan 2023</span>
                        </h2>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            2nd IEEE International Conference on Computer and Communication and
                            Control (IC4-2024) is a forum for presenting new advances and research
                            results in the fields of Intelligent Computing.
                        </p>
                        <h2
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "16pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            <a
                                href="https://github.com/yashvardhanJadhav/noteSaver"
                                className="s5"
                                target="_blank"
                            >
                                Note{" "}
                            </a>
                            <span
                                style={{
                                    color: "black",
                                    fontFamily: '"Trebuchet MS", sans-serif',
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                    fontSize: "10pt"
                                }}
                            >
                                Saver
                            </span>
                            <span className="s4">
                                Javascript, React.js, Tailwind Css, Mongoose, Express, Node js{" "}
                            </span>
                            <span className="p">May - June 2022</span>
                        </h2>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            A <span className="h2">CRUD application </span>exposed using a RESTful
                            API made with Node.js
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            Exposed POST, GET, PATCH and DELETE HTTP methods using{" "}
                            <span className="h2">Express</span>
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            Note Saver is a web application which stores your notes.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            Note Saver has user Login / SignUp Functionality for User.
                        </p>
                        <h2
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "16pt",
                                textIndent: "0pt",
                                textAlign: "left"
                            }}
                        >
                            <span
                                style={{
                                    color: "black",
                                    fontFamily: '"Trebuchet MS", sans-serif',
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                    fontSize: "10pt"
                                }}
                            >
                                NewsHub
                            </span>
                            <span className="s4">Javascript, Bootstrap, News API </span>
                            <span className="p">Dec - jan 2021</span>
                        </h2>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "5pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            News Hub is a web application which displays news all over the world.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            It takes the data from api called News api.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            News Hub has its own chat bot which recommend you latest topic and help
                            you to understand the UI.
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "40pt",
                                textIndent: "-9pt",
                                textAlign: "left"
                            }}
                        >
                            News Hub has its own searching facility for any topic.
                        </p>
                    </li>
                </ul>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s3"
                    style={{ paddingLeft: "6pt", textIndent: "0pt", textAlign: "left" }}
                >
                    <a name="bookmark3">
                        TECHNICAL
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        SKILLS
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </p>
                <h2
                    style={{
                        paddingTop: "11pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Languages <span className="p">: JavaScript, HTML, CSS, C, C++</span>
                </h2>
                <h2
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Frameworks{" "}
                    <span className="p">
                        : React.js, Express, Node.js, Mongoose, Tailwind CSS
                    </span>
                </h2>
                <h2
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Databases <span className="p">: MongoDB</span>
                </h2>
                <h2
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Dev Tools <span className="p">: Visual Studio Code, Git</span>
                </h2>
                <h2
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "16pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}
                >
                    Others <span className="p">: Data Structure and Algorithm</span>
                </h2>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                </p>
                <p
                    className="s3"
                    style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
                >
                    <a name="bookmark4">
                        OTHER
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        INTEREST
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </p>
                <ul id="l2">
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "9pt",
                                paddingLeft: "33pt",
                                textIndent: "-8pt",
                                textAlign: "left"
                            }}
                        >
                            150+ Questions solved on Leetcode
                        </p>
                    </li>
                    <li data-list-text="•">
                        <p
                            style={{
                                paddingTop: "4pt",
                                paddingLeft: "33pt",
                                textIndent: "-8pt",
                                textAlign: "left"
                            }}
                        >
                            250+ Questions solved on codechef
                        </p>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Template3