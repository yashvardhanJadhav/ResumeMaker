import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'

function Education() {
    const [education, setEducation] = useState({
        schoolName: "",
        city: "",
        degree: "",
        fieldOfStudy: "",
        score: "",
        state: "",
        graduationDate: ""
    })
    const [fadeNext, setfadeNext] = useState(false)
    const onChange = (e) => {
        setEducation({ ...education, [e.target.name]: e.target.value })
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let educationURL = `http://localhost:3000/api/v1/userCred/education`
        const response = await fetch(educationURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(education),
        })
        const educationSave = await response.json();
        if (educationSave.success) {
            setfadeNext(true)
            console.log(educationSave)
        }
        else {
            console.log(educationSave)
            setfadeNext(false)
        }
    }
    const updateEdu = async () => {
        console.log(location.state._id)
        let editURL = `http://localhost:3000/api/v1/userCred/updateEducation/${location.state._id}`
        const data = education
        const response = await fetch(editURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
        })
        const fetchedEdu = await response.json();
        setfadeNext(true)

    }
    const location = useLocation()
    const prevEdu = () => {
        if (location.state !== null) {
            setEducation({
                schoolName: location.state.schoolName,
                city: location.state.city,
                degree: location.state.degree,
                fieldOfStudy: location.state.fieldOfStudy,
                score: location.state.score,
                state: location.state.state,
                graduationDate: location.state.graduationDate
            })
        }

    }
    useEffect(() => {
        prevEdu()
    }, [])

    return (
        <>
            <Steppers active={3} name={"education"} />
            <form className='mt-16 container mx-auto' onSubmit={handleClick}>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Education
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Add information about your educational background.
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="schoolName" id="schoolName" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={education.schoolName} />
                    <label for="schoolName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">School Name / College Name</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={education.city}/>
                        <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="degree" id="degree" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={education.degree}/>
                        <label for="degree" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Degree</label>
                    </div>
                </div>


                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="fieldOfStudy" id="fieldOfStudy" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={education.fieldOfStudy}/>
                        <label for="fieldOfStudy" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Field of Study</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="score" id="score" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={education.score}/>
                        <label for="score" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Score</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="state" id="state" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={education.state}/>
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="date" name="graduationDate" id="date" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={education.graduationDate}/>
                        <label for="graduationDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Graduation Date</label>
                        <div className="mt-2">

                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Currently Pursuing these Course.</label>
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-4 justify-center">
                    <div>
                        <Link to='/experienceAdd'>

                            <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                        </Link>
                    </div>
                    {location.state === null ? <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                        :
                        <div>
                            <div class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={updateEdu} style={{ "cursor": 'pointer' }}>Update Experience</div>
                        </div>
                    }
                    <div>

                        {
                            fadeNext ? <Link to="/educationAdd">

                                <button class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Next
                                </button>
                            </Link>
                                : ""
                        }
                    </div>

                </div>
            </form>
        </>
    )
}

export default Education