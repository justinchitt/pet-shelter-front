import { Link, Router } from "react-router-dom"


function Navbar() {
    return (
        <div>
            <h1>Website Title</h1>
        <ul className="nav-links">
            <li className="nav-links"><Link exact to="/" className="nav-links"> Home </Link></li>
            <li className="nav-links"><Link to="/animals" className="nav-links"> Animals </Link></li>
            <li className="nav-links"><Link to="/applications"> Applications </Link></li>
            <li className="nav-links"><Link to="/shelters"> Shelters </Link></li>
        </ul>
        </div>
    )
}


export default Navbar


