import {useState, useEffect} from 'react'
import AnimalEdit from './AnimalEdit'

function AnimalCard({handleDeleteItem, animal, animal : {name, animal_type, breed, img_url, shelter_id}, setAnimals, setRerender}){
  const [shelterName, setShelterName] = useState("")
  const [wasClicked, setWasClicked] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:9292/shelters/${shelter_id}`)
    .then(resp => resp.json())
    .then(setShelterName)
  },[])

  function handleDelete() {
    fetch(`http://localhost:9292/animals/${animal.id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then((item) => handleDeleteItem(item))
  }  

  function handleClick() {
    setWasClicked(current => !current)
  }
  
  return(
    <div className="card">
        <img src={img_url} alt={animal_type}/>
        <h4>{name}</h4>
        <p className="grow">{breed}</p>
        <p className="grow">{shelterName}</p>
        <div className="bttn">
          <button onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        {wasClicked?<AnimalEdit setWasClicked={setWasClicked} setRerender={setRerender} setAnimals={setAnimals} animal={animal} shelterName={shelterName}/>:null}
    </div>
  )
}

export default AnimalCard;