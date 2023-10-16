import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'

function Project() {
    const [dateError, setDateError] = useState(false)

    const [project, setProject] = useState({
        projectName: "",
        projectDescription: "",
        link: "",
        startDate: "",
        endDate: "",
    })
    const [fadeNext, setfadeNext] = useState(false)
    const onChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    const checkDate = () => {
        const strDate = project.startDate;
        const endDate = project.endDate;
        const fdate = new Date(strDate);
        const tdate = new Date(endDate);
        if (fdate.valueOf() > tdate.valueOf()) {
            return false
        }
        else {
            return true
        }
    }
    const handleClick = async (e) => {
        e.preventDefault();
        if (!checkDate()) {
            setDateError(true)
            return
        }
        else {
            setDateError(false)
        }
        let projectURL = `http://localhost:3000/api/v1/userCred/project`
        const response = await fetch(projectURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(project),
        })
        const projectSave = await response.json();
        if (projectSave.success) {
            setfadeNext(true)
            console.log(projectSave)
        }
        else {
            console.log(projectSave)
            setfadeNext(false)
        }
    }
    const updatePro = async () => {
        console.log(location.state._id)
        let editURL = `http://localhost:3000/api/v1/userCred/updateProject/${location.state._id}`
        const data = project
        const response = await fetch(editURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
        })
        const fetchedPro = await response.json();
        setfadeNext(true)

    }
    const location = useLocation();
    const prevPro = () => {
        if (location.state !== null) {
            setProject({
                projectName: location.state.projectName,
                projectDescription: location.state.projectDescription,
                link: location.state.link,
                startDate: location.state.startDate,
                endDate: location.state.endDate
            })
        }

    }
    useEffect(() => {
        prevPro()
    }, [])
    return (
        <>
            <Steppers active={4} name={"project"} />
            <form className='mt-16 container mx-auto' onSubmit={handleClick}>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Project
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Add information about your Project Works.
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="projectName" id="projectName" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={project.projectName} />
                    <label for="projectName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Name</label>
                </div>

                <label for="projectDescription" class="block mb-2 text-sm font-medium text-white dark:text-white">Project Description</label>
                <textarea id="" name="projectDescription" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-[#65FFDB] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Project Description here..." onChange={onChange} required value={project.projectDescription}></textarea>


                <div class="relative z-0 w-full mb-6 mt-6 group">
                    <input type="text" name="link" id="link" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={project.link} />
                    <label for="link" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Link</label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="date" name="startDate" id="startDate" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB]  peer" placeholder=" " required onChange={onChange} value={project.startDate.substring(0, 10)} />
                        <label for="startDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
                        {dateError ? <div className='text-sm text-[#FF0000]'>start date should be less then end date</div> : ""}
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="date" name="endDate" id="endDate" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} value={project.endDate.substring(0, 10)} />
                        <label for="endDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
                        <div className="mt-2">

                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Currently working on the Project.</label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 justify-center">
                    <div>
                        <Link to='/educationAdd'>

                            <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                        </Link>
                    </div>
                    {location.state === null ? <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                        :
                        <div>
                            <div class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={updatePro} style={{ "cursor": 'pointer' }}>Update Project</div>
                        </div>
                    }
                    <div>

                        {
                            fadeNext ? <Link to="/projectAdd">

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

export default Project