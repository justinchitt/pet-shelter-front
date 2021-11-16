function ShelterCard({shelter: {name, address, id}}) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{address}</p>
        </div>
    )
}

export default ShelterCard;