import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Steppers from '../../components/steppers/Steppers'
function Sumamary() {
    const [summary, setSummary] = useState({
        summaryText: ""
    })
    const [fadeNext, setfadeNext] = useState(false)
    const onChange = (e) => {
        setSummary({ ...summary, [e.target.name]: e.target.value })
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let summaryURL = `http://localhost:3000/api/v1/userCred/summary`
        const response = await fetch(summaryURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(summary),
        })
        const summarySave = await response.json();
        if (summarySave.success) {
            setfadeNext(true)
            console.log(summarySave)
        }
        else {
            console.log(summarySave)
            setfadeNext(false)
        }
    }
    return (
        <>
            <Steppers active={6} name={"about"} />
            <form className='mt-16 container mx-auto' onSubmit={handleClick}>
                <div className='text-[#65FEDA] text-center text-2xl'>
                    About You
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Write a short summary telling more about yourself, your strengths and experience.
                </div>


                <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">Summary</label>
                <textarea id="summaryText" name="summaryText" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-[#65FFDB] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={onChange} required></textarea>

                <div className="flex gap-x-4 justify-center">
                    <div>
                        <Link to='/skills'>

                            <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                        </Link>
                    </div>
                    <div>

                        <button type="submit" class="mt-8 text-[#111827] flex mx-auto bg-[#65FFDB] hover:bg-[#00916f] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                    <div>

                        {
                            fadeNext ? <Link to="/templatePage">

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

export default Sumamary