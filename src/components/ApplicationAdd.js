import { useState } from "react"

function ApplicationAdd({setApplications, setWasClicked}) {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        animal_name: ""
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/applications", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setApplications(current => [data, ...current])
            setFormData({
                name: "",
                date: "",
                animal_name: ""
            })
            setWasClicked(false)
        });
    }

    return (
        <form onSubmit={handleSubmit} className="add">
            <label>Your Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="First Last" required></input></label>
            <label> Date: <input name="date" type="text" value={formData.date} onChange={handleChange} placeholder="YYYY-MM-DD" required></input></label>
            <label> Animal Name: <input name="animal_name" type="text" value={formData.animal_name} onChange={handleChange} placeholder="Justin's Sister" required></input></label>
            <button className='submit' type="submit">Submit</button>
        </form>
    )
}

export default ApplicationAdd