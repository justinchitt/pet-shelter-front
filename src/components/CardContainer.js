import CardView from "./CardView";

function CardContainer({animals}) {

    const animalCards = animals.map((animal) => <CardView key={animal.id} animal={animal}/>);

    function handleDeleteItem(deletedItem) {
        const updatedItems = ItemList.filter((deletedItem) => item.id !== deletedItem.id);
          setItemList(updatedItems);
        }

    return(
        <div>
            //search goes here
            //form goes here
            <div className="cards">


                <CardView handleDeleteItem={handleDeleteItem}/>

            </div>
        </div>
    )
}

export default CardContainer;