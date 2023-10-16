import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Alert from './components/Alert/Alert'
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import Experience from './pages/Experience/Experience';
import ExperienceAdd from './pages/Experience/ExperienceAdd';
import Education from './pages/Education/Education';
import EducationAdd from './pages/Education/EducationAdd';
import Skills from './pages/Skills/Skills';
import Summary from './pages/Summary/Sumamary';
import Footer from './components/Footer/Footer';
import ResumePage from './pages/ResumePage/ResumePage';
import Project from './pages/Project/Project';
import ProjectAdd from './pages/Project/ProjectAdd';
import Template2 from './components/ResumeTemplate/Template2/Template2';
import TemplatePage from './pages/TemplatePage/TemplatePage';
function App() {
    const [userDetailVar, setuserDetailVar] = useState({
        name: "",
        email : ""
    })
    const userDetails = async () => {
        const getUserURL = `http://localhost:3000/api/v1/auth/getUser`;
        const response = await fetch(getUserURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const userDetails = await response.json();
        setuserDetailVar(userDetails)
    }
    const [alertData, setAlertData] = useState({
        type: "",
        message: ""
    })


    const capFirstLetter = (word) => {
        if (word === '') {
            return 'user'
        }
        else {
            const firstLetter = word[0].toUpperCase()
            word = word.substring(1)
            const final = firstLetter.concat(word)
            return final
        }
    }
    useEffect(() => {
      userDetails()
    }, [])
    

    const showAlert = (alertType, alertMsg) => {
        setAlertData({
            type: alertType,
            message: alertMsg
        })
        setTimeout(() => {
            setAlertData({
                type: "",
                message: ""
            })
        }, 2000);
    }
    return (
        <>
            <div className="flex-wrapper">
                <BrowserRouter>
                    <Navbar capFirstLetter={capFirstLetter} userDetailVar={userDetailVar}/>
                    <Alert message={alertData.message} type={alertData.type} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login showAlert={showAlert} />} />
                        <Route path="signup" element={<SignUp showAlert={showAlert} />} />
                        <Route path="personalInfo" element={<PersonalInfo showAlert={showAlert} />} />
                        <Route path="experience" element={<Experience showAlert={showAlert} />} />
                        <Route path="experienceAdd" element={<ExperienceAdd showAlert={showAlert} />} />
                        <Route path="education" element={<Education showAlert={showAlert} />} />
                        <Route path="educationAdd" element={<EducationAdd showAlert={showAlert} />} />
                        <Route path="skills" element={<Skills showAlert={showAlert} />} />
                        <Route path="summary" element={<Summary showAlert={showAlert} />} />
                        <Route path="resumePage" element={<ResumePage showAlert={showAlert} />} />
                        <Route path="project" element={<Project showAlert={showAlert} />} />
                        <Route path="projectAdd" element={<ProjectAdd showAlert={showAlert} />} />
                        <Route path="templatePage" element={<TemplatePage showAlert={showAlert} userDetailVar={userDetailVar}/>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
