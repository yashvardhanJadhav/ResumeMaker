import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Outlet, Link, useLocation } from "react-router-dom";
function Navbar(props) {
    const {userDetailVar} = props
    const { capFirstLetter } = props
   
    const getPageLocation = () => {
        const location = useLocation()
        return location.pathname
    }

    const conditionalsButton = () => {
        if (getPageLocation() == '/login') {
            return <Link to="/signup">
                <button
                    className="nav-links mr-8 bg-[#0B182F] hover:bg-[#1D4652] hover:text-white text-[#65FEDA] font-medium py-2 px-8 rounded-md border-2 border-X[#65FEDA]">
                    Sign up
                </button>
            </Link>
        }
        else if (getPageLocation() == '/signup') {
            return <Link to="/login">
                <button
                    className="nav-links mr-8 bg-[#0B182F] hover:bg-[#1D4652] hover:text-white text-[#65FEDA] font-medium py-2 px-8 rounded-md border-2 border-[#65FEDA]">
                    Log in
                </button>
            </Link>
        }
        else {
            return <Link to="/signup">
                <button
                    className="nav-links mr-8 bg-[#0B182F] hover:bg-[#1D4652] hover:text-white text-[#65FEDA] font-medium py-2 px-8 rounded-md border-2 border-X[#65FEDA]">
                    Log Out
                </button>
            </Link>
        }
    }
    return (
        <>
            <header className="navBlur fixed top-0 w-full  shadow-lg" id="navbar" >
                <div className="nav flex sm:m-4 my-4 justify-between items-center">
                    <div className="logo">
                        <i className="fa-solid fa-2x fa-layer-group ml-8"></i>

                        <Link to="/">
                            <div className="logoTitle text-[#65FEDA] inline-flex text-3xl font-bold ml-4">RESUME BUILDER</div>
                        </Link>
                    </div>

                    <div className="flex flex-row flex-wrap">
                        {(getPageLocation() !== "/login" && getPageLocation() !== "/signup") ? <>
                            <i className="fa-solid fa-circle-user self-center fa-xl iconColor text-[#5288dc] py-2.5"></i>
                            <span className="self-center text-sm whitespace-nowrap text-white font-bold dispnone ml-3">Hi, {capFirstLetter(userDetailVar.name)}</span>
                        </>
                        :
                        ""
                        }
                        {conditionalsButton()}
                        <button type="button" className="toggler mr-8" data-modal-target="defaultModal"
                            data-modal-toggle="defaultModal"><i className="fa-solid fa-2x fa-bars"></i></button>
                    </div>
                </div>

            </header>
            <Outlet />
        </>
    )
}

export default Navbar