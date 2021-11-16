import { useHistory } from 'react-router-dom';

function ApplicationsContainer() {
    let history = useHistory();
    return (
        <>
            <h1>Applications</h1>
            <button onClick={()=> history.push('/applications/new')}>Submit an Application</button>
        </>
    )
}

export default ApplicationsContainer