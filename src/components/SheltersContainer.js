
import { useState, useEffect } from 'react'
import ShelterCard from './ShelterCard'
import ShelterAdd from './ShelterAdd'

function Shelters() {
    const [shelters, setShelters] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((resp) => resp.json())
        .then(setShelters)
    }, [rerender])

    function handleClick() {
        setWasClicked(current => !current)
    }

    function handleDeleteItem(deletedShelter) {
        const updatedShelters = shelters.filter((shelter) => shelter.id !== deletedShelter.id);
        setShelters(updatedShelters);
        }

    const shelterCards = shelters.map((shelter) => <ShelterCard setRerender={setRerender} setShelters={setShelters} key={shelter.id} shelter={shelter} handleDeleteItem={handleDeleteItem}/>);

    return (
        <>
            <h1>Shelters</h1>
            {wasClicked?<ShelterAdd setWasClicked={setWasClicked} setShelters={setShelters} />:null}
            <button onClick={handleClick}>Add a Shelter</button>
            {shelterCards}
        </>

    )
}

export default Shelters