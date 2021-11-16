import { useState, useEffect } from 'react';
import CardView from "./CardView";


function Animals() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/animals")
        .then((resp) => resp.json())
        .then(setAnimals)
    }, [])

    const animalCards = animals.map((animal) => <CardView key={animal.id} animal={animal}/>);

    return (
        <>
            <h1>Animals</h1>
            <div className="cards">
                {animalCards}
            </div>
        </>
    );
}

export default Animals;