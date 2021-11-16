import { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';

function ApplicationsContainer() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/applications")
        .then((resp) => resp.json())
        .then(setApplications)
    }, [])

    const appCards = applications.map((app) => <ApplicationCard key={app.id} app={app}/>);
    return (
        <>
        <h1>Applications</h1>
        {appCards}
        </>
    )
}

export default ApplicationsContainer;