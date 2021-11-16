import { Link, Router } from "react-router-dom"

function Navbar() {
    return (
        <li>
            <Link exact to="/"> Home </Link>
            <Link to="/animals"> Animals </Link>
            <Link to="/applications"> Applications </Link>
            <Link to="/shelters"> Shelters </Link>
        </li>
    )
}

export default Navbar