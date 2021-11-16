import { useState } from "react"

function ShelterForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: ""
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("", {
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
            <label> Shelter Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="La Casa de Perritos" required></input></label>
            <label> Address: <input name="address" type="text" value={formData.address} onChange={handleChange} placeholder="Snoopy" required></input></label>
            <button className='submit' type="submit">SUBMIT</button>
        </form>
    )
}

export default ShelterForm