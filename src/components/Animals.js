
import { useState, useEffect } from 'react';
import CardView from "./CardView";
import { useHistory } from 'react-router-dom';


function Animals() {
  let history = useHistory();
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
      <button onClick={()=> history.push('/animals/new')}>Add Animal</button>
            <div className="cards">
                {animalCards}
    
            </div>
        </>
    );

}

export default Animals;