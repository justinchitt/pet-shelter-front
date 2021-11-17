import {useState, useEffect} from 'react'
import ApplicationEdit from './ApplicationEdit'

function ApplicationCard({app, setRerender, setApplications, app: {name, date, animal_id}}) {
    const [animalName, setAnimalName] = useState("")
    const [wasClicked, setWasClicked] = useState(false)

    useEffect(() => {
      fetch(`http://localhost:9292/animals/${animal_id}`)
      .then(resp => resp.json())
      .then(setAnimalName)
    },[])

    function handleClick() {
        setWasClicked(current => !current)
      }

    return(
        <div>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{animalName}</p>
            <button onClick={handleClick}>Edit</button>
            {wasClicked?<ApplicationEdit setApplications={setApplications} setRerender={setRerender} setWasClicked={setWasClicked} app={app} animalName={animalName} />:null}
        </div>
    )
}

export default ApplicationCard;