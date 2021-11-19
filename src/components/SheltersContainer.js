
import { useState, useEffect } from 'react'
import ShelterCard from './ShelterCard'
import ShelterAdd from './ShelterAdd'

function Shelters() {
    const [shelters, setShelters] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState(false)
    const [search, setSearch] = useState("")
    
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

    const filteredShelters = shelters.filter((shelter) => {
        return (
            shelter.name.toLowerCase().includes(search.toLowerCase()) 
            || 
            shelter.address.toLowerCase().includes(search.toLowerCase())
        ) 
    })

    const shelterCards = filteredShelters.map((shelter) => <ShelterCard setRerender={setRerender} setShelters={setShelters} key={shelter.id} shelter={shelter} handleDeleteItem={handleDeleteItem}/>);

    return (

        <div className="same-container">
            <div className="title-and-search">
            <h1 className="page-title">Shelters</h1>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button onClick={handleClick}>{wasClicked?"Hide Form":"Add Shelter"}</button>
            {wasClicked?<ShelterAdd setWasClicked={setWasClicked} setShelters={setShelters} />:null}
            </div>
            <div className="same-cards">
            {shelterCards}
            </div>
        </div>
    )
}

export default Shelters