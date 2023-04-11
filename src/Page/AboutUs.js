import React, { useContext, useEffect } from 'react'
import { context } from '../App';


function AboutUs() {
    const { data, dispatch } = useContext(context);
    useEffect(() => {
        if (data) {
            console.log('data🧨', data)

        }
    }, [])

    return (
        <div>AboutUs</div>
    )
}

export default AboutUs