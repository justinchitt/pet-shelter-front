import CardView from "./CardView";

function AllCards() {

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

export default AllCards;