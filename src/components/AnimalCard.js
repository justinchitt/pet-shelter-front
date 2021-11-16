
function AnimalCard({handleDeleteItem, animal : {name, animal_type, breed, img_url, shelter_id }}){
  // function handleDelete() {
  //       fetch(`http://localhost:9292/${categorys}/${category}.${id}`, {
  //         method: 'DELETE',
  //       })
  //         .then(resp => resp.json())
  //         .then((item) => handleDeleteItem(item))
  //     }  
  
  return(
        <div>
            // delete card
            // edit card
            <img src={img_url} alt={animal_type}/>
            <h4>{name}</h4>
            <p></p>



    

  
        </div>
    )
}

export default AnimalCard;