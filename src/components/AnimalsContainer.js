
import { useState, useEffect } from 'react';
import AnimalCard from "./AnimalCard";
import { useHistory } from 'react-router-dom';


function AnimalsContainer() {
    let history = useHistory();
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/animals")
        .then((resp) => resp.json())
        .then(setAnimals)
    }, [])

    const animalCards = animals.map((animal) => <AnimalCard key={animal.id} animal={animal}/>);

    return (
        <>
            <h1>Animals</h1>
            <button onClick={()=> history.push('/animals/new')}>Add Animal</button>
            <div className="cards">
                {animalCards}
    
            </div>
        </>
    );

}

export default AnimalsContainer;