import { useState } from "react"

function ApplicationAdd() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        animal_name: ""
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
        console.log(formData)
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
            console.log(data)
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Your Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="First Last" required></input></label>
            <label> Date: <input name="date" type="text" value={formData.date} onChange={handleChange} placeholder="MM/DD/YYYY" required></input></label>
            <label> Animal Name: <input name="animal_name" type="text" value={formData.animal_name} onChange={handleChange} placeholder="Justin's Sister" required></input></label>
            <button className='submit' type="submit">SUBMIT</button>
        </form>
    )
}

export default ApplicationAdd