import { NavLink } from "react-router-dom"

import './navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <h2>
                <NavLink to={'/'}>Blog</NavLink>
            </h2>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'new'} className={'new-btn'}>New Post</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar