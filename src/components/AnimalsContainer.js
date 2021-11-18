import { useState, useEffect } from 'react';
import AnimalCard from "./AnimalCard";
import { useHistory } from 'react-router-dom';
import AnimalAdd from './AnimalAdd';

function AnimalsContainer() {
    let history = useHistory();
    const [animals, setAnimals] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState(false)
    const [search, setSearch] = useState("")
    const [filterType, setFilterType] = useState("all")

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

    let filteredAnimals = animals.filter((animal) => {
        return (
            animal.name.toLowerCase().includes(search.toLowerCase()) 
            || 
            animal.breed.toLowerCase().includes(search.toLowerCase())
        )
    })
    
    function filteredAnimalsByType() {
        if (filterType === "all") {
            return filteredAnimals
        } else {
            return filteredAnimals.filter((animal) => {
                return animal.animal_type === filterType
            })
        }  
    }

    console.log(animals)

    const animalCards = filteredAnimalsByType().map((animal) => <AnimalCard setAnimals={setAnimals} key={animal.id} animal={animal} setRerender={setRerender} handleDeleteItem={handleDeleteItem}/>);

    return (
        <div className="container">
            <div className="title-and-search">
            <h1>Animals</h1>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}/>
            <label> View by animal: <select onChange={(e) => setFilterType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select></label>
            <button onClick={handleClick}>{wasClicked?"Hide Form":"Add Animal"}</button>
            {wasClicked ? <AnimalAdd setWasClicked={setWasClicked} setAnimals={setAnimals}/>:null}
            </div>
            <div className="cards">
                {animalCards}
            </div>
        </div>
    );
}

export default AnimalsContainer;