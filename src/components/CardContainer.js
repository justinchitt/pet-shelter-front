import CardView from "./CardView";

function CardContainer({animals}) {

    const animalCards = animals.map((animal) => <CardView key={animal.id} animal={animal}/>);

    return(
        <div>
            //search goes here
            //form goes here
            <div className="cards">
                {animalCards}
            </div>
        </div>
    )
}

export default CardContainer;