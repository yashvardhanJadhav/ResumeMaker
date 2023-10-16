    import React, { useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom'
    import Alert from '../../components/Alert/Alert'
    import './login.css'

    function Login(props) {
        const { showAlert } = props
        const navigate = useNavigate()
        const [credentials, setCredentials] = useState({
            email: "",
            passworld: ""
        })

        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
        }
        const handleClick = async (e) => {
            e.preventDefault();
            let loginURL = `http://localhost:3000/api/v1/auth/login`
            const response = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials),
            })
            const login = await response.json();
            if (login.success) {
                console.log(login)
                showAlert(true, "Logged in Successfully")
                navigate("/")
                localStorage.setItem("token", login.token)
            }
            else {
                console.log(login)
                showAlert(false, "Enter Valid Credentials")
            }
        }
        return (
            <>
                <div className="flex flex-col items-center  px-6 py-8  md:h-screen lg:py-0 mt-48">
                    <div className="w-full bg-[#1E2837] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#65FEDA] dark:text-white">Your email</label>
                                    <input type="email"  style={{"backgroundColor" : '#111827'}}  name="email" id="email"  pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}' className="emailchng bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  onChange={onChange} required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#65FEDA] dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} required minLength={3}/>
                                </div>
                                <div className="flex items-center justify-between">

                                    <a className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-[#111827] bg-[#58D5BB] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}>Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link to="/signup">
                                        Don’t have an account yet? <a className="font-medium text-white hover:underline dark:text-primary-500">Sign up</a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    export default Login