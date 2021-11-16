import { useState } from "react"

function AnimalAdd() {
    const [formData, setFormData] = useState({
        name: "",
        animal_type: "dog",
        breed: "",
        img_url: "",
        shelter: ""
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/animals", {
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
            <label> Animal Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Snoopy" required></input></label>
            <label> Animal type: <select onChange={handleChange} required>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select></label>
            <label> Breed: <input name="breed" type="text" value={formData.breed} onChange={handleChange} placeholder="Chihuahua" required></input></label>
            <label> Image: <input name="img_url" type="text" value={formData.img_url} onChange={handleChange} placeholder="URL" required></input></label>
            <label> Shelter: <input name="shelter" type="text" value={formData.shelter} onChange={handleChange} required></input></label>
            <button className='submit' type="submit">SUBMIT</button>
        </form>
    )
}

export default AnimalAdd