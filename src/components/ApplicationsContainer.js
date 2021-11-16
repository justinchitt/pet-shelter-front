
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApplicationCard from './ApplicationCard';

function ApplicationsContainer() {
    const [applications, setApplications] = useState([]);
  let history = useHistory();
   
    useEffect(() => {
        fetch("http://localhost:9292/applications")
        .then((resp) => resp.json())
        .then(setApplications)
    }, [])

    const appCards = applications.map((app) => <ApplicationCard key={app.id} app={app}/>);
    return (
        <>
        <h1>Applications</h1>
            <button onClick={()=> history.push('/applications/new')}>Submit an Application</button>
        {appCards}

        </>
    )
}


export default ApplicationsContainer;

