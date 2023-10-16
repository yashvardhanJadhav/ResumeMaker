import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'

function Skills() {
    const [skillList, setskillList] = useState({
        "skill": [
            {
                "_id": "647b07c4aa81ec5e24aa7ca3",
                "user": "647b06d5aa81ec5e24aa7c91",
                "skill": "HTML",
                "skillLevel": "Begineer",
                "__v": 0
            }
        ]
    })
    const fetchSkill = async () => {
        let fetchURL = `http://localhost:3000/api/v1/userCred/getUserInfo`;
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setskillList(json)
    }
    useEffect(() => {
        fetchSkill()
    }, [])
    const [skills, setSkills] = useState({
        skill: "",
        skillLevel: ""
    })
    const [fadeNext, setfadeNext] = useState(false)
    const onChange = (e) => {
        setSkills({ ...skills, [e.target.name]: e.target.value })
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let skillURL = `http://localhost:3000/api/v1/userCred/skill`
        const response = await fetch(skillURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(skills),
        })
        const skillSave = await response.json();
        if (skillSave.success) {
            setfadeNext(true)
            console.log(skillSave)
        }
        else {
            console.log(skillSave)
            setfadeNext(false)
        }
    }
    const deleteSkill = async (id) => {
        let deleteURL = `http://localhost:3000/api/v1/userCred/deleteSkill/${id}`;
        const response = await fetch(deleteURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const skill = await response.json();
        const newSkill = (skillList.skill).filter((skill) => {
            return skill._id !== id
        })
        fetchSkill()
    }


    return (
        <>
            <Steppers active={5} name={"skills"} />
            <form className='mt-16 container mx-auto' onSubmit={handleClick}>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Skills
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Highlight 3-4 of your top skills.
                </div>
                {
                    skillList.skill.map((skillListEle) => {
                        return <div className="bg-[#1E2837] rounded-md text-white mb-8 p-4">
                            <div className="flex justify-between">
                                <div className="employerName text-base">{skillListEle.skill} - {skillListEle.skillLevel} <span className='ml-2'></span></div>
                                <div>
                                    <i class="fa-solid fa-trash-can fa-xl"  onClick={() => deleteSkill(skillListEle._id)}></i>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div class="grid md:grid-cols-2 md:gap-6">

                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="skill" id="skill" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#65FFDB] peer" placeholder=" " required onChange={onChange} />
                        <label for="skill" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#65FFDB] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skill</label>
                    </div>
                    <select id="skillLevel" name="skillLevel" class="block py-0 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer h-10" onChange={onChange}>
                        <option value={"Select Your Skill"}>Select Your Skill Level</option>
                        <option value="Novice">Novice</option>
                        <option value="Begineer">Begineer</option>
                        <option value="Skillful">Skillful</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Expert">Expert</option>

                    </select>
                </div>

                <div className="flex gap-x-4 justify-center">
                    <div>
                        <Link to='/projectAdd'>

                            <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                        </Link> 
                    </div>
                    <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={fetchSkill} >Add another Skill</button>
                    </div>
                    <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                    <div>
                        {
                            fadeNext ?
                                <Link to='/summary'>

                                    <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                                </Link>
                                : ""
                        }
                    </div>

                </div>

            </form></>
    )
}

export default Skills