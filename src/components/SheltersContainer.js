import { useState, useEffect } from 'react'
import ShelterCard from './ShelterCard'

function Shelters() {
    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((resp) => resp.json())
        .then(setShelters)
    }, [])

    const shelterCards = shelters.map((shelter) => <ShelterCard key={shelter.id} shelter={shelter}/>);

    return (
        <>
            <h1>Shelters</h1>
            {shelterCards}
        </>

    )
}

export default Shelters