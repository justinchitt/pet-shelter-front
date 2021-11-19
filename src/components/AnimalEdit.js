import { useState } from "react"

function AnimalEdit({setAnimals, animal, shelterName, setRerender, setWasClicked}) {
    const [formData, setFormData] = useState({
        name: animal.name,
        animal_type: animal.animal_type,
        breed: animal.breed,
        img_url: animal.img_url,
        shelter: shelterName
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/animals/${animal.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setAnimals(current => [...current])
            setFormData({
            name: "",
            animal_type: "dog",
            breed: "",
            img_url: "",
            shelter: ""})
            setRerender(current => !current)
            setWasClicked(false)
        })
    }

    return (
        <div id="animal-edit">
        <form onSubmit={handleSubmit}>
            <label> Animal Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Snoopy" required></input></label>
            <label> Animal type: <select onChange={handleChange} required>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select></label>
            <label> Breed: <input name="breed" type="text" value={formData.breed} onChange={handleChange} placeholder="Chihuahua" required></input></label>
            <label> Image: <input name="img_url" type="text" value={formData.img_url} onChange={handleChange} placeholder="URL" required></input></label>
            <label> Shelter: <input name="shelter" type="text" value={formData.shelter} onChange={handleChange} placeholder="Lucky Paws" required></input></label>
            <button className='submit' type="submit">Submit</button>
        </form>
        </div>
    )
}

export default AnimalEdit