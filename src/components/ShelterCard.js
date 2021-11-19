import { useState } from 'react'
import ShelterEdit from './ShelterEdit'

function ShelterCard({shelter: {name, address}, shelter, setShelters, setRerender, handleDeleteItem}) {
    const [wasClicked, setWasClicked] = useState(false)

    function handleDelete() {
        fetch(`http://localhost:9292/shelters/${shelter.id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then((item) => handleDeleteItem(item))
    }  

    function handleClick() {
        setWasClicked(current => !current)
    }

    return(
        <div className="same-card">
            <h3>{name}</h3>
            <p>{address}</p>
            <div className="goright">
                <button onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div  className="edit">
                {wasClicked ? <ShelterEdit setRerender={setRerender} setShelters={setShelters} shelter={shelter} setWasClicked={setWasClicked} />:null}
            </div>
        </div>
    )
}

export default ShelterCard;