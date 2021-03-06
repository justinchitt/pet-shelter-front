import { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';
import ApplicationAdd from './ApplicationAdd';

function ApplicationsContainer() {
    const [applications, setApplications] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/applications")
        .then((resp) => resp.json())
        .then(setApplications)
    }, [rerender])

    function handleClick() {
        setWasClicked(current => !current)
    }

    function handleDeleteItem(deletedApplication) {
        const updatedApplication = applications.filter((application) => application.id !== deletedApplication.id);
        setApplications(updatedApplication);
    }

    const filteredApplications = applications.filter((application) => {
        return application.name.toLowerCase().includes(search.toLowerCase())
    })

    const appCards = filteredApplications.map((app) => <ApplicationCard key={app.id} app={app} setRerender={setRerender} setApplications={setApplications} handleDeleteItem={handleDeleteItem}/>);
    return (
        <div className="same-container">
            <div className="title-and-search">
                <h1 className="page-title">Applications</h1>
                <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button onClick={handleClick}>{wasClicked?"Hide Form":"Add Application"}</button>
                {wasClicked?<ApplicationAdd setWasClicked={setWasClicked} setApplications={setApplications} />:null}
            </div>
            <div className="same-cards">
                {appCards}
            </div>
        </div>
    )
}

export default ApplicationsContainer;