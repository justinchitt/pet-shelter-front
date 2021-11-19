import {useState, useEffect} from 'react'
import ApplicationEdit from './ApplicationEdit'

function ApplicationCard({app, setRerender, setApplications, app: {name, date, animal_id}, handleDeleteItem}) {
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

    function handleDelete() {
      fetch(`http://localhost:9292/applications/${app.id}`, {
        method: 'DELETE',
      })
        .then(resp => resp.json())
        .then((item) => handleDeleteItem(item))
    }   

  return(
      <div className="same-card">
          <h3>Applicant: {name}</h3>
          <p> Date Submitted: {date}</p>
          <p>Animal Requested: {animalName}</p>
          <div className="goright">
            <button onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          {wasClicked?<ApplicationEdit setApplications={setApplications} setRerender={setRerender} setWasClicked={setWasClicked} app={app} animalName={animalName} />:null}
      </div>
  )
}

export default ApplicationCard;