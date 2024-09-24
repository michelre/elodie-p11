import './home.scss'
import { useEffect, useState } from 'react'

import Card from '../../components/Card/Card'

const Home = () => {

    const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then((data) => {
      setLocations(data)
    })
  }, [])

  return (
    <>
      <ul className="locations">
        {locations.map((location) => {
          return <li key={location.id}>
            <Card 
              title={location.title} 
              image={location.cover}  
              id={location.id}
            />
          </li>
        })}
      </ul>
    </>
  )

}

export default Home;