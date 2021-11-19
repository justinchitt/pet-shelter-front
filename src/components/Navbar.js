import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div id="nav-bar">
            <h1 id="title">The Best Friend Business</h1>
        <ul className="nav-links">
            <li className="nav-links"><Link exact to="/" className="nav-links"> Home </Link></li>
            <li className="nav-links"><Link to="/animals" className="nav-links"> Animals </Link></li>
            <li className="nav-links"><Link to="/applications" className="nav-links"> Applications </Link></li>
            <li className="nav-links"><Link to="/shelters" className="nav-links"> Shelters </Link></li>
        </ul>
        </div>
    )
}

export default Navbar