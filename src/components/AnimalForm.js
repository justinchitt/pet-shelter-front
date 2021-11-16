import { useState } from "react"

function AnimalForm() {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        breed: "",
        img_url: "",
        shelter: ""

    })

    return (
        <h1>Applications</h1>
    )
}

export default AnimalForm