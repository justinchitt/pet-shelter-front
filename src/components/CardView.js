

function CardView({animal : {name, animal_type, breed, img_url, shelter_id }}){
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

export default CardView;