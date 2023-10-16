import React, { useState } from 'react'

function Alert(props) {
    const { type, message } = props;
    return (
        <>
            <header className="sticky top-[4.5rem] z-50">
                {
                    type === "" ? "" :
                        <div id="alert-border-2" className={`flex p-4 mb-4 text-${props.type ? "green-800" : "red-800"} border-t-4 border-${props.type ? "green-300" : "red-300"} bg-${props.type ? "green-50" : "red-50"} dark:text-red-400 dark:bg-gray-800 dark:border-red-800`} role="alert">
                            <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div className="ml-3 text-sm font-medium">
                                {props.message}
                            </div>

                        </div>
                }
            </header>
        </>
    )
}

export default Alert    