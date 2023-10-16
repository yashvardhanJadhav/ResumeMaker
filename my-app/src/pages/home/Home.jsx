import React, { useState, useEffect } from 'react'
import Alert from '../../components/Alert/Alert'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import template1Img from '../templatePage/template1.png'
import template2Img from '../templatePage/template2.png'



function Home(props) {
    const [alreadyResume, setalreadyResume] = useState(false)


    const userDetailsFetch = async () => {
        const getUserURL = `http://localhost:3000/api/v1/auth/getUser`;
        const response = await fetch(getUserURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const userDetails = await response.json();
        console.log(userDetails)
        setalreadyResume(userDetails.alreadyResume)
    }

    const getUserDetails = () => {
        const token = localStorage.getItem('token')
        return token;
    }

    useEffect(() => {
        userDetailsFetch()
    }, [])
    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-[2.5rem] leading-10 font-extrabold text-3xl mb-4  text-white mt-32">The Best Free Online Resume Builder</h1>
                        <p className="mb-8 leading-relaxed">A Quick and Easy Way to Create Your Professional Resume. 30+ Professional Resume Templates Choose from over thirty modern and professional templates. All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</p>
                        <div className="flex justify-center">
                            <Link to="/personalInfo">
                                <button className="inline-flex text-[#111826] bg-[#65FFDB] border-0 py-4 px-6 focus:outline-none hover:bg-[#00916f] hover:text-white rounded text-xl font-medium">CREATE MY RESUME NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {alreadyResume ? <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 items-center flex-col">


                    <div class="flex flex-wrap -m-4 mt-12 w-1/2">
                        <div class="xl:w-1/2 md:w-1/2 p-4 m-auto">
                            <div className='text-[#65FEDA] text-center text-3xl'>
                                Your Resume
                            </div>
                            <div className="text-white text-sm text-center mb-8">
                                Continue with your created Resume
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 rounded-lg">
                                <Link to='/templatePage'>

                                <img class="h-auto rounded w-full object-cover object-center mb-6" src={template1Img} alt="content" />
                                </Link>

                            </div>
                        </div>
                      
                    </div>

                </div>
            </section> : ""}
        </>
    )
}

export default Home