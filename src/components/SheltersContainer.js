import { useHistory } from 'react-router-dom';

function Shelters() {
    let history = useHistory();
    return (
        <>
            <h1>Shelters</h1>
            <button onClick={()=> history.push('/shelters/new')}>Add a Shelter</button>
        </>
    )
}

export default Shelters