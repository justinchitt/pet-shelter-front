import { useState } from 'react'
import ShelterEdit from './ShelterEdit'

function ShelterCard({shelter: {name, address, id}, shelter, setShelters, setRerender, handleDeleteItem}) {
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
        <div>
            <h3>{name}</h3>
            <p>{address}</p>
            <button onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
            <button onClick={handleDelete}>Delete</button>
            {wasClicked ? <ShelterEdit setRerender={setRerender} setShelters={setShelters} shelter={shelter} setWasClicked={setWasClicked} />:null}
        </div>
    )
}

export default ShelterCard;