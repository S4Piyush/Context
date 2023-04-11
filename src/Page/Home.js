import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../App';

function Home() {
    const [editData, setEditdata] = useState()
    const { data, dispatch } = useContext(context);

    useEffect(() => {
        if (data) {
            setEditdata(data)
        }
    }, [data])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log('res', res)
                dispatch({ type: "Edti", payload: res.data })
            })
    }, [])
    return (
        <div>
            {
                editData?.micro.map((ele) => {
                    return (
                        <li>{ele?.name}</li>
                    )
                })

            }

        </div>
    )
}

export default Home