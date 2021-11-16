import {useState, useEffect} from 'react'

function ApplicationCard({app: {name, date, id, animal_id}}) {
    const [animalName, setAnimalName] = useState("")

    useEffect(() => {
      fetch(`http://localhost:9292/animals/${animal_id}`)
      .then(resp => resp.json())
      .then(setAnimalName)
    },[])
    console.log(animal_id)

    return(
        <div>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{animalName}</p>
        </div>
    )
}

export default ApplicationCard;