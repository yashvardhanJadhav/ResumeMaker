import React, { useEffect, useState } from 'react'
import './template2css.css'
function Template2() {
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
            <div class="resume-wrapper" style={{
                "fontSize": fontSize.toString()+"px"
            }}>

                <section class="profile section-padding">
                    <div class="container">
                        <div class="picture-resume-wrapper">

                            <div class="clearfix"></div>
                        </div>
                        <div class="name-wrapper">
                            <h1>{getData.personalInfo[0].firstName} <br />{getData.personalInfo[0].lastName}</h1>
                        </div>
                        <div class="clearfix"></div>
                        <div class="contact-info clearfix">
                            <ul class="list-titles">
                                <li>Call</li>
                                <li>Mail</li>
                                <li>Web</li>
                                <li>Home</li>
                            </ul>
                            <ul class="list-content ">
                                <li>{getData.personalInfo[0].phone}</li>
                                <li>{getData.personalInfo[0].email}</li>
                                <li><a href="#">janderson.com</a></li>
                                <li>{getData.personalInfo[0].city}, {getData.personalInfo[0].country}</li>
                            </ul>
                        </div>
                        <div class="contact-presentation">
                            <p>{getData.summary[0].summaryText}</p>
                        </div>
                        <div class="contact-social clearfix">
                            <ul class="list-titles">
                                <li>linkedin</li>
                                <li>Github</li>
                            </ul>
                            <ul class="list-content">
                                <li><a href={getData.personalInfo[0].linkedin}>@{getData.personalInfo[0].firstName}</a></li>
                                <li><a href={getData.personalInfo[0].github}>@{getData.personalInfo[0].firstName}</a></li>
                            </ul>
                        </div>

                        <div class="section-wrapper clearfix mt-8">
                            <h3 class="section-title">Skills</h3>
                            <ul>
                                <li class="skill-percentage">HTML / HTML5</li>
                                <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                                <li class="skill-percentage">Javascript</li>
                                <li class="skill-percentage">Jquery</li>
                                <li class="skill-percentage">Wordpress</li>
                                <li class="skill-percentage">Photoshop</li>

                            </ul>

                        </div>
                    </div>
                </section>

                <section class="experience section-padding">
                    <div class="container">
                        <h3 class="experience-title">Experience</h3>

                        <div class="experience-wrapper">

                            {getData.experience.map((expEle) => {
                                return <>
                                    <div class="company-wrapper clearfix">
                                        <div class="experience-title">{expEle.employer}</div>
                                        <div class="time">{expEle.startDate.substring(0, 7)} - {expEle.endDate.substring(0, 7)}</div>
                                    </div>

                                    <div class="job-wrapper clearfix">
                                        <div class="experience-title">{expEle.jobTitle}</div>
                                        <div class="company-description">
                                            {expEle.city}, {expEle.state}
                                        </div>
                                        <div class="company-description">
                                            {expEle.jobDescription}
                                        </div>
                                    </div>
                                </>
                            })}



                        </div>

                        {/* //EDUCATION SECTION */}

                        <h3 class="experience-title">Education</h3>

                        <div class="experience-wrapper">

                            {
                                getData.education.map((eduEle) => {
                                    return <>
                                        <div class="collegeName-wrapper clearfix " >
                                            <div class="experience-title">{eduEle.schoolName}</div>
                                            <div class="time">{eduEle.graduationDate.substring(0, 7)}</div>
                                        </div>

                                        <div class=".collegeName-wrapper clearfix ">
                                            <div class="experience-title">{eduEle.degree}</div>
                                            <div class="company-description">
                                                <div className="score">Score - {eduEle.score}</div>
                                                <div className="location">{eduEle.city}, {eduEle.state}</div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }

                        </div>

                        {/* PROJECT SECTION */}
                        <h3 class="experience-title">Projects</h3>

                        <div class="experience-wrapper">
                            {
                                getData.project.map((projectEle) => {
                                    return <>
                                        <div class="company-wrapper clearfix">
                                            <div class="experience-title">{projectEle.projectName}</div>
                                            <div class="time">{projectEle.startDate.substring(0, 7)} - {projectEle.endDate.substring(0, 7)}</div>
                                        </div>

                                        <div class="job-wrapper clearfix">
                                            <div class="company-description">
                                                {projectEle.projectDescription}
                                            </div>
                                        </div>
                                    </>
                                })
                            }


                        </div>




                    </div>
                </section>

                <div class="clearfix"></div>
            </div>
        </>
    )
}

export default Template2