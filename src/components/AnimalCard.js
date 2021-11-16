import {useState, useEffect} from 'react'

function AnimalCard({handleDeleteItem, animal : {name, animal_type, breed, img_url, shelter_id, id }}){
  const [shelterName, setShelterName] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:9292/shelters/${shelter_id}`)
    .then(resp => resp.json())
    .then(setShelterName)
  },[])


  // function handleDelete() {
  //   fetch(`http://localhost:9292/${categorys}/${category}.${id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(resp => resp.json())
  //   .then((item) => handleDeleteItem(item))
  // }  
  
  return(
        <div>
            // delete card
            // edit card
            <img src={img_url} alt={animal_type}/>
            <h4>{name}</h4>
            <p>{breed}</p>
            <p>{shelterName}</p>
        </div>
  )
}

export default AnimalCard;