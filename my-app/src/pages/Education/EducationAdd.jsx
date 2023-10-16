import React, { useEffect, useState } from 'react'
import Steppers from '../../components/steppers/Steppers'
import { Link } from 'react-router-dom'
function EducationAdd() {
    const [educationList, seteducationList] = useState({
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
            }
        ]
    })
    const fetchEducation = async () => {
        let fetchURL = `http://localhost:3000/api/v1/userCred/getUserInfo`;
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        seteducationList(json)
    }
    const deleteEducation = async (id) => {
        let deleteURL = `http://localhost:3000/api/v1/userCred/deleteEducation/${id}`;
        const response = await fetch(deleteURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const education = await response.json();
        const newExperience = (educationList.education).filter((education) => {
            return education._id !== id
        })
        fetchEducation()
    }
    useEffect(() => {
        fetchEducation()
    }, [])
    return (
        <>
            <Steppers active={3} name={"education"} />
            <div className='mt-16 container mx-auto'>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Education
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Add information about your educational background.
                </div>
                {
                    educationList.education.map((educationListEle) => {
                        return <div className="bg-[#1E2837] rounded-md text-white mb-8 p-4">
                            <div className="flex justify-between">
                                <div className="employerName text-base">{educationListEle.degree}, <span className='ml-2'>{educationListEle.schoolName}</span></div>
                                <div>
                                    <Link to='/education' state={educationListEle}>

                                        <i class="fa-solid fa-pen-to-square mr-4 fa-xl"></i>
                                    </Link>
                                    <i class="fa-solid fa-trash-can fa-xl" onClick={() => deleteEducation(educationListEle._id)}></i>
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
                    <Link to='/education'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Another Degree</button>
                    </Link>
                </div>
                <div>
                    <Link to='/project'>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save & Next</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default EducationAdd