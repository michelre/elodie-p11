import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Accordeon from "../../components/Accordeon/Accordeon";

import './location.scss'


const Location = () => {

    let {id} = useParams()
    const [location, setLocation] = useState()

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(data => {

            const l = data.find(d => d.id === id)
            setLocation(l)
        })
    }, [])

    if(!location){
        return ''
    }

    return  <div>
        <Slider
            pictures={location.pictures}
        />

        <div className="accordeons">
            <Accordeon 
                title="Description"
            >
                <p>{location.description}</p>
            </Accordeon>

            <Accordeon 
                title="Equipements"
                content={location.equipments}
            >
                <ul>
                    {location.equipments.map(e => <li key={e}>{e}</li>)}
                </ul> 
            </Accordeon>
        </div>

        <h1 className="title-location">{location.title}</h1>
    </div>
    
}

export default Location;