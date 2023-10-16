    import React, { useEffect, useState } from 'react'
    import Template1 from '../../components/ResumeTemplate/Template1/Template1'
    import Template2 from '../../components/ResumeTemplate/Template2/Template2'
    import { useLocation } from 'react-router-dom'

    function ResumePage() {
        const location = useLocation();
        const propsData = location.state;       

        return (
            <>
                {propsData && propsData.template === "template1" ?
                    <Template1 />
                    :
                    <Template2 />
                }
            </>
        )
    }

    export default ResumePage