function CardView({handleDeleteItem}){

    function handleDelete() {
        fetch(`http://localhost:9292/${categorys}/${category}.${id}`, {
          method: 'DELETE',
        })
          .then(resp => resp.json())
          .then((item) => handleDeleteItem(item))
      }

    return(
        <div>
            <button id="deleteCard" onClick={handleDelete}>Delete</button>
            // card information goes here
        </div>
    )
}

export default CardView;