import { useState } from 'react'
import ShelterEdit from './ShelterEdit'

function ShelterCard({shelter: {name, address, id}, shelter, setShelters, setRerender}) {
    const [wasClicked, setWasClicked] = useState(false)

    function handleClick() {
        setWasClicked(current => !current)
    }

    return(
        <div>
            <h3>{name}</h3>
            <p>{address}</p>
            <button onClick={handleClick}>Edit</button>
            {wasClicked ? <ShelterEdit setRerender={setRerender} setShelters={setShelters} shelter={shelter} setWasClicked={setWasClicked} />:null}
        </div>
    )
}

export default ShelterCard;