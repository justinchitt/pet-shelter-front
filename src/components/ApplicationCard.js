
function ApplicationCard({app: {name, date, id, animal_id}}) {
    console.log(id)
    return(
        <div>
            <h3>{name}</h3>
            <p>{date}</p>
        </div>
    )
}

export default ApplicationCard;