import { useEffect, useState } from 'react'
import template1Img from './template1.png'
import template2Img from './template2.png'
import { Link } from 'react-router-dom'

function TemplatePage(props) {
    const { userDetailVar } = props
    const template1 = {
        template: "template1"
    }
    const template2 = {
        template: "template2"
    }

    const editNote = async () => {
        let editURL = `http://localhost:3000/api/v1/auth/updateUser/${userDetailVar.email}`
        const data = {
            "alreadyResume": true
        }
        const response = await fetch(editURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
        })
        const note = await response.json();
    }

    useEffect(() => {
        editNote()
    }, [])




    return (
        <>
            <div className="container mx-auto mt-28">
                <div className='text-[#65FEDA] text-center text-2xl'>
                    Select Template for your Resume
                </div>
                <div className="text-white text-sm text-center mb-8">
                    Add information about your Project Works.
                </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-12 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="px-32 md:w-1/2">
                                <Link to="/resumePage" state={template1}>
                                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img class="lg:h-auto md:h-36 w-full object-cover" src={template1Img} alt="blog" />
                                    </div>
                                </Link>
                            </div>
                            <div class="px-32 md:w-1/2">
                                <Link to="/resumePage" state={template2}>

                                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img class="lg:h-auto md:h-36 w-full object-cover" src={template2Img} alt="blog" />

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TemplatePage