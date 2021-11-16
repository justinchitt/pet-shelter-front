import { useHistory } from 'react-router-dom';

function Animals() {
    let history = useHistory();
    return (
        <>
        <button onClick={()=> history.push('/animals/new')}>Add Animal</button>
        <h1>Animals</h1>
        </>
    )
}

export default Animals