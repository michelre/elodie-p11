import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Location = () => {

    let {id} = useParams()
    const [location, setLocation] = useState()

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(data => {
            const l = data.find(d => d.id === id)
            setLocation(l)
        })
    })

    return (
        location && <>
           <h1>{location.title}</h1>
        </>
    )
}

export default Location;