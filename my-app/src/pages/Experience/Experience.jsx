import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'
function Experience() {
    const [dateError, setDateError] = useState(false)
    const [experience, setExperience] = useState({
        employer: "",
        jobTitle: "",
        jobDescription: "",
        city: "",
        state: "",
        startDate: "",
        endDate: ""
    })
    const [fadeNext, setfadeNext] = useState(false)

    // form input change function
    const onChange = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value })
    }

    // start date less then end date function
    const checkDate = () => {
        const strDate = experience.startDate;
        const endDate = experience.endDate;
        const fdate = new Date(strDate);
        const tdate = new Date(endDate);
        if (fdate.valueOf() > tdate.valueOf()) {
            return false
        }
        else {
            return true
        }
    }

    // submit the data 
    const handleClick = async (e) => {
        e.preventDefault();
        if (!checkDate()) {
            setDateError(true)
            return
        }
        else {
            setDateError(false)
        }
        console.log("yashvardhan jadhav")
        let experienceURL = `http://localhost:3000/api/v1/userCred/experience`
        const response = await fetch(experienceURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(experience),
        })
        const experienceSave = await response.json();
        if (experienceSave.success) {
            setfadeNext(true)
            console.log(experienceSave)
        }
        else {
            console.log(experienceSave)
            setfadeNext(false)
        }
    }

    // for edit update experience
    const updateExp = async () => {
        console.log(location.state._id)
        let editURL = `http://localhost:3000/api/v1/userCred/updateExperience/${location.state._id}`
        const data = experience
        const response = await fetch(editURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
        })
        const fetchedExp = await response.json();
        setfadeNext(true)

    }

    // for gettting state from experienceAdd in state for location
    const location = useLocation();
    const prevExp = () => {
        if (location.state !== null) {

            setExperience({
                employer: location.state.employer,
                jobTitle: location.state.jobTitle,
                jobDescription: location.state.jobDescription,
                city: location.state.city,
                state: location.state.state,
                startDate: location.state.startDate,
                endDate: location.state.endDate
            })
        }

    }

    // use effect function
    useEffect(() => {
        prevExp()
    }, [])


    return (
        <>
            <Steppers active={2} name={"experience"} />
            <form className='mt-16 container mx-auto' onSubmit={handleClick}>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Experience
                </div>
                <div className="text-white text-sm text-center mb-8">
                    List your work experience, from the most recent to the oldest.
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="employer" id="employer" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={experience.employer} />
                        <label for="employer" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employer</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="jobTitle" id="jobTitle" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={experience.jobTitle} />
                        <label for="jobTitle" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="jobDescription" id="jobDescription" onChange={onChange} class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " minLength={2} required value={experience.jobDescription} />
                    <label for="jobDescription" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description (15 words)</label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={experience.city} />
                        <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="state" id="state" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={experience.state} />
                        <label for="state" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="date" name="startDate" id="startDate" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={experience.startDate.substring(0, 10)} />
                        <label for="startDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:tranxslate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
                        {dateError ? <div className='text-sm text-[#FF0000]'>start date should be less then end date</div> : ""
                        }

                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="date" name="endDate" id="endDate" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={experience.endDate.substring(0, 10)} />
                        <label for="endDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
                        <div className="mt-2">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Currently Working on these Job.</label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 justify-center">
                    <div>
                        <Link to='/personalInfo'>

                            <button class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                        </Link>
                    </div>
                    {location.state === null ? <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                        :
                        <div>
                            <div class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={updateExp} style={{ "cursor": 'pointer' }}>Update Experience</div>
                        </div>
                    }


                    <div>

                        {
                            fadeNext ? <Link to="/experienceAdd">

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

export default Experience