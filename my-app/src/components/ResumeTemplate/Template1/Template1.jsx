import React, { useState } from 'react'
import './Simple.css'
import { useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Template1() {

    const _exportPdf = () => {

        html2canvas(document.getElementById("divToPrint"), {
            width: 1500,
            height: 1500,
            scale: 1
        }).then(canvas => {

            const imgData = canvas.toDataURL('image/png',);
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });

    }

    const [fontSize, setFontSize] = useState(14)

    const [getData, setGetData] = useState({
        "personalInfo": [
            {
                "_id": "647b0708aa81ec5e24aa7c93",
                "user": "647b06d5aa81ec5e24aa7c91",
                "firstName": "Animesh ",
                "lastName": "Rathore",
                "address": "Nemawar",
                "city": "Indore",
                "country": "India",
                "zipCode": "48001",
                "email": "animesh123@gmail.com",
                "linkedin": "https://yashvardhan-jadhav.netlify.app/",
                "github": "https://yashvardhan-jadhav.netlify.app/",
                "personalWebsite": "https://yashvardhan-jadhav.netlify.app/",
                "phone": "8109212860",
                "__v": 0
            }
        ],
        "experience": [
            {
                "_id": "647b0719aa81ec5e24aa7c95",
                "user": "647b06d5aa81ec5e24aa7c91",
                "employer": "Capgemini",
                "jobTitle": "Senior Engineer",
                "jobDescription": "These is description of job that i do on my Yash Technologies . Thank you for reading.",
                "city": "Indore",
                "state": "Madhya Pradesh",
                "startDate": "2023-06-11T00:00:00.000Z",
                "endDate": "2023-06-24T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "647b072baa81ec5e24aa7c97",
                "user": "647b06d5aa81ec5e24aa7c91",
                "employer": "TCS",
                "jobTitle": "Software Developer",
                "jobDescription": "These is description of job that i do on my Yash Technologies . Thank you for reading.",
                "city": "Indore",
                "state": "Madhya Pradesh",
                "startDate": "2023-07-09T00:00:00.000Z",
                "endDate": "2023-07-08T00:00:00.000Z",
                "__v": 0
            }
        ],
        "education": [
            {
                "_id": "647b073daa81ec5e24aa7c99",
                "user": "647b06d5aa81ec5e24aa7c91",
                "schoolName": "Saraswati Vidya Madir Sr. Secondary School",
                "city": "Indore",
                "degree": "Secondary",
                "fieldOfStudy": "General",
                "score": "85",
                "state": "Madhya Pradesh",
                "graduationDate": "2023-07-02T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "647b074faa81ec5e24aa7c9b",
                "user": "647b06d5aa81ec5e24aa7c91",
                "schoolName": "Saraswati Vidya Madir Sr. Secondary School",
                "city": "Indore",
                "degree": "Higher Secondary",
                "fieldOfStudy": "Physics Chemistry Maths",
                "score": "91.8",
                "state": "Maharashtra",
                "graduationDate": "2023-06-22T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "647b0767aa81ec5e24aa7c9d",
                "user": "647b06d5aa81ec5e24aa7c91",
                "schoolName": "Medi-Caps University",
                "city": "Indore",
                "degree": "Bachelor in Technology",
                "fieldOfStudy": "Computer Science",
                "score": "91.8",
                "state": "Madhya Pradesh",
                "graduationDate": "2023-06-30T00:00:00.000Z",
                "__v": 0
            }
        ],
        "project": [
            {
                "_id": "647b0795aa81ec5e24aa7c9f",
                "user": "647b06d5aa81ec5e24aa7c91",
                "projectName": "Crypto Tracker",
                "projectDescription": "CryptoTracker is a web application which displays crypto currency detailed analysis.\nTechnology required - React js, Javascript, HTML, CSS,Tailwind css.\nIt takes the data from API.",
                "link": "http://yashvardhan-jadhav.netlify.app",
                "startDate": "2023-06-14T00:00:00.000Z",
                "endDate": "2023-06-09T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "647b07b4aa81ec5e24aa7ca1",
                "user": "647b06d5aa81ec5e24aa7c91",
                "projectName": "Note pad",
                "projectDescription": "CryptoTracker is a web application which displays crypto currency detailed analysis.\nTechnology required - React js, Javascript, HTML, CSS,Tailwind css.\nIt takes the data from AP",
                "link": "http://yashvardhan-jadhav.netlify.app",
                "startDate": "2023-06-29T00:00:00.000Z",
                "endDate": "2023-06-03T00:00:00.000Z",
                "__v": 0
            }
        ],
        "summary": [
            {
                "_id": "647b093caa81ec5e24aa7cd3",
                "user": "647b06d5aa81ec5e24aa7c91",
                "summaryText": "I am a student of Medi-caps University ,Indore with a major in Computer Science. I am passionate about pursuing my major in Information Technology and Computer Science. My goal is to get a job in the Information Technology field after graduating. ",
                "__v": 0
            }
        ],
        "skill": [
            {
                "_id": "647b07c4aa81ec5e24aa7ca3",
                "user": "647b06d5aa81ec5e24aa7c91",
                "skill": "HTML",
                "skillLevel": "Begineer",
                "__v": 0
            },
            {
                "_id": "647b07d3aa81ec5e24aa7ca5",
                "user": "647b06d5aa81ec5e24aa7c91",
                "skill": "Javascript",
                "skillLevel": "Skillful",
                "__v": 0
            },
            {
                "_id": "647b07dcaa81ec5e24aa7ca7",
                "user": "647b06d5aa81ec5e24aa7c91",
                "skill": "React js",
                "skillLevel": "Begineer",
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
    const increaseFontSize = () => {
        setFontSize(fontSize+0.5)
    }
    const decreaseFontSize = () => {
        setFontSize(fontSize-0.5)
    }
    useEffect(() => {
        fetchAllNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className='mt-32 mx-auto flex space-x-1'>

                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto" onClick={increaseFontSize}>
                    <i class="fa-solid fa-plus"></i>
                </button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto" onClick={decreaseFontSize}>
                    <i class="fa-solid fa-minus"></i>
                </button>

            </div>

            <div id="divToPrint" class="container1 mt-12" style={{"fontSize" : fontSize.toString()+'px'}}>
                <div class="header">
                    <div class="full-name">
                        <span class="first-name">{getData.personalInfo[0].firstName}</span>
                        <span class="last-name"> {getData.personalInfo[0].lastName}</span>
                    </div>
                    <div class="contact-info">
                        <span class="email-val">{getData.personalInfo[0].email}</span>
                        <span class="separator"></span>
                        <span class="phone-val">{getData.personalInfo[0].phone}</span>
                        <span class="separator"></span>

                        <span class="phone-val">{getData.personalInfo[0].city}, {getData.personalInfo[0].country}</span>
                        <span class="separator"></span>
                        <a href={getData.personalInfo[0].linkedin} target='_blank'>
                            <span class="phone-val">Linkedin</span>
                        </a>
                        <span class="separator"></span>
                        <a href={getData.personalInfo[0].linkedin} target='_blank'>
                            <span class="phone-val">Github</span>
                        </a>
                        <span class="separator"></span>
                        <a href={getData.personalInfo[0].personalWebsite} target='_blank'>
                            <span class="phone-val">Website</span>
                        </a>
                    </div>

                    <div class="about">
                        <span class="desc">
                            {getData.summary[0].summaryText}
                        </span>
                    </div>
                </div>
                <div class="details">
                    <div class="section">
                        <div class="section__title">Experience</div>
                        <div class="section__list">
                            {
                                getData.experience.map((expEle) => {
                                    return <div class="section__list-item">
                                        <div class="left">
                                            <div class="name">{expEle.employer}</div>
                                            <div class="addr">{expEle.city}, {expEle.state}</div>
                                            <div class="duration">{expEle.startDate.substring(0, 7)} - {expEle.startDate.substring(0, 7)}</div>
                                        </div>
                                        <div class="right">
                                            <div class="name">{expEle.jobTitle}</div>
                                            <div class="desc">{expEle.jobDescription}</div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                    <div class="section">
                        <div class="section__title">Education</div>

                        <div class="section__list">{
                            getData.education.map((eduEle) => {
                                return <div class="section__list-item">
                                    <div class="left">
                                        <div class="name">{eduEle.schoolName}</div>
                                        <div class="addr">{eduEle.city}, India</div>
                                        <div class="addr">Score - {eduEle.score}</div>
                                    </div>
                                    <div class="right">
                                        <div class="name">{eduEle.fieldOfStudy}</div>
                                        <div class="duration">Graduation Date - {eduEle.graduationDate.substring(0, 10)}</div>

                                    </div>
                                </div>

                            })
                        }


                        </div>

                    </div>
                    <div class="section">
                        <div class="section__title">Projects</div>
                        <div class="section__list">

                            {getData.project.map((projectEle) => {
                                return <div class="section__list-item">
                                    <div class="left flex-item">
                                        <div class="flex-item name">{projectEle.projectName}
                                            <a href={projectEle.link} target='_blank'><i class="ml-2 flex-item fa-solid fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div class="right text-right">
                                        <div class="date">{projectEle.startDate.substring(0, 7)} - {projectEle.endDate.substring(0, 7)}</div>
                                    </div>

                                    <div class="text">{projectEle.projectDescription}.</div>
                                </div>
                            })}



                        </div>
                    </div>
                    <div class="section">
                        <div class="section__title">Skills</div>
                        <div class="skills">
                            {getData.skill.map((skillElem) => {
                                return <span class="skills__item name">
                                    {" " + skillElem.skill + ","}
                                </span>

                            })}



                        </div>


                    </div>
                    
                </div>
            </div>
            <div className="mb5">
                <button onClick={_exportPdf}>Print</button>
            </div>
        </>
    )
}

export default Template1