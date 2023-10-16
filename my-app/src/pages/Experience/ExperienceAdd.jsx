import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'


function ExperienceAdd() {
    const [experienceList, setexperienceList] = useState({
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
            }, {
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
            }
        ]
    })
    const fetchExperience = async () => {
        let fetchURL = `http://localhost:3000/api/v1/userCred/getUserInfo`;
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setexperienceList(json)
    }
    const deleteExperience = async (id) => {
        let deleteURL = `http://localhost:3000/api/v1/userCred/deleteExperience/${id}`;
        const response = await fetch(deleteURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const experience = await response.json();
        const newExperience = (experienceList.experience).filter((experience) => {
            return experience._id !== id
        })
        fetchExperience()
    }
    useEffect(() => {
        fetchExperience()
    }, [])

    return (
        <>
            <Steppers active={2} name={"experience"} />
            {/* Modal */}



            <div className='mt-16 container mx-auto'>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Experience
                </div>
                <div className="text-white text-sm text-center mb-8">
                    List your work experience, from the most recent to the oldest.
                </div>

                {
                    experienceList.experience.map((experienceListEle) => {
                        return <div className="bg-[#1E2837] rounded-md text-white mb-8 p-4">
                            <div className="flex justify-between">
                                <div className="employerName text-base">{experienceListEle.employer}, <span className='ml-2'>{experienceListEle.jobTitle}</span></div>
                                <div>
                                    <Link to='/experience' state={experienceListEle}>
                                        <i class="fa-solid fa-pen-to-square mr-4 fa-xl"></i>
                                    </Link>
                                    <span onClick={() => deleteExperience(experienceListEle._id)}>
                                        <i class="fa-solid fa-trash-can fa-xl"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="flex gap-x-4 justify-center mt-18">
                <div>
                    <Link to='/experience'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                    </Link>
                </div>
                <div>
                    <Link to='/experience'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Another Position</button>
                    </Link>
                </div>
                <div>
                    <Link to='/education'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save & Next</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default ExperienceAdd