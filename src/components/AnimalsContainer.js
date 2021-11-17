import { useState, useEffect } from 'react';
import AnimalCard from "./AnimalCard";
import { useHistory } from 'react-router-dom';
import AnimalAdd from './AnimalAdd';
function AnimalsContainer() {
    let history = useHistory();
    const [animals, setAnimals] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/animals")
        .then((resp) => resp.json())
        .then(setAnimals)
    }, [])

    function handleClick() {
        setWasClicked(current => !current)
    }

    const animalCards = animals.map((animal) => <AnimalCard setAnimals={setAnimals} key={animal.id} animal={animal}/>);

    return (
        <>
            <h1>Animals</h1>
            <button onClick={handleClick}>Add Animal</button>
            {wasClicked ? <AnimalAdd setAnimals={setAnimals}/>:null}
            <div className="cards">
                {animalCards}
            </div>
        </>
    );
}

export default AnimalsContainer;