import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'
function ProjectAdd() {
    const [projectList, setprojectList] = useState({
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
            }
        ]
    })


    const fetchProject = async () => {

        let fetchURL = `http://localhost:3000/api/v1/userCred/getUserInfo`;
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setprojectList(json)
    }
    const deleteProject = async (id) => {
        let deleteURL = `http://localhost:3000/api/v1/userCred/deleteProject/${id}`;
        const response = await fetch(deleteURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const project = await response.json();
        const newProject = (projectList.project).filter((project) => {
            return project._id !== id
        })
        fetchProject()
    }
    useEffect(() => {
        fetchProject()
    }, [])
    return (
        <>
            <Steppers active={4} name={"project"} />
            <div className='mt-16 container mx-auto'>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Project
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Add information about your Project Works.
                </div>
                {
                    projectList.project.map((projectListEle) => {
                        return <div className="bg-[#1E2837] rounded-md text-white mb-8 p-4">
                            <div className="flex justify-between">
                                <div className="employerName text-base">{projectListEle.projectName} <span className='ml-2'></span></div>
                                <div>
                                    <Link to='/project' state={projectListEle}>

                                        <i class="fa-solid fa-pen-to-square mr-4 fa-xl"></i>
                                    </Link>
                                    <i class="fa-solid fa-trash-can fa-xl" onClick={() => deleteProject(projectListEle._id)}></i>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="flex gap-x-4 justify-center mt-18">

                <div>
                    <Link to='/project'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                    </Link>
                </div>
                <div>
                    <Link to='/project'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Another Project</button>
                    </Link>
                </div>
                <div>
                    <Link to='/skills'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save & Next</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default ProjectAdd