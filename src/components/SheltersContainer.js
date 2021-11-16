
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import ShelterCard from './ShelterCard'

function Shelters() {
    const [shelters, setShelters] = useState([]);
   let history = useHistory();

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((resp) => resp.json())
        .then(setShelters)
    }, [])

    const shelterCards = shelters.map((shelter) => <ShelterCard key={shelter.id} shelter={shelter}/>);

    return (
        <>
            <h1>Shelters</h1>
      <button onClick={()=> history.push('/shelters/new')}>Add a Shelter</button>
            {shelterCards}
        </>

    )
}

export default Shelters