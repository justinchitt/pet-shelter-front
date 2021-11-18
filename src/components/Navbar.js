import { Link, Router } from "react-router-dom"
import styled from 'styled-components'

function Navbar() {
    return (
        <div>
            <Header>Website Title</Header>
        <MenuBar class="nav-links">
            <li><Link exact to="/"> Home </Link></li>
            <li><Link to="/animals"> Animals </Link></li>
            <li><Link to="/applications"> Applications </Link></li>
            <li><Link to="/shelters"> Shelters </Link></li>
        </MenuBar>
        </div>
    )
}


export default Navbar

const MenuBar = styled.ul`
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    li{
        list-style: none;
        font-size: 1.5em;   
        padding: 5px;     
        a{
            text-decoration: none;
        }
    };
    padding-bottom: 2%;
    padding-right: 2%;
`
const Header = styled.h1`
    display: flex;    
    font-size: 2em;
    justify-content: center;
    
`
