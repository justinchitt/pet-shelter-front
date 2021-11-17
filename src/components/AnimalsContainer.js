import { useState, useEffect } from 'react';
import AnimalCard from "./AnimalCard";
import { useHistory } from 'react-router-dom';
import AnimalAdd from './AnimalAdd';
function AnimalsContainer() {
    let history = useHistory();
    const [animals, setAnimals] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState()
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/animals")
        .then((resp) => resp.json())
        .then(setAnimals)
    }, [rerender])

    function handleClick() {
        setWasClicked(current => !current)
    }

    function handleDeleteItem(deletedAnimal) {
        const updatedAnimals = animals.filter((animal) => animal.id !== deletedAnimal.id);
        setAnimals(updatedAnimals);
        }


   
    const filteredAnimals = animals.filter((animal) => {
        return (
            animal.name.toLowerCase().includes(search.toLowerCase()) 
            || 
            animal.breed.toLowerCase().includes(search.toLowerCase())
        )
    })
    

console.log(filteredAnimals)
console.log(search)


    const animalCards = filteredAnimals.map((animal) => <AnimalCard setAnimals={setAnimals} key={animal.id} animal={animal} setRerender={setRerender} handleDeleteItem={handleDeleteItem}/>);

    return (
        <>
            <h1>Animals</h1>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button onClick={handleClick}>Add Animal</button>
            {wasClicked ? <AnimalAdd wasClicked={wasClicked} setAnimals={setAnimals}/>:null}
            <div className="cards">
                {animalCards}
            </div>
        </>
    );
}

export default AnimalsContainer;

