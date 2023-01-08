//https://sujeitoprogramador.com/rn-api/?api=posts
import React, { useEffect, useState } from "react"



const Posts = () => {

    const [nutri, setNutri] = useState([])
    
    const loadApi = () => {
        let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
        fetch(url).
        then((r) => r.json()).
        then((json) => {
            console.log(json)
            setNutri(json)
        })
    }

    useEffect(
        () => {
            loadApi();
        }, []
    )

    return (
        <>
            <h1>teste</h1>
        </>
    )
}

export default Posts