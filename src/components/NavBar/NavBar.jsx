import React from 'react';
import "./NavBar.css";
import toggleMobileMenu from './navBar';
import { NavLink } from 'react-router';


function NavBar() {


    return (
        <>
            <nav>
                <ul id="menu">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        {/* <a href="#">About</a> */}
                        <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li>
                        <a href="#">nada</a>
                    </li>
                    <li>
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                </ul>
                <div className="mobile-bar" onClick={toggleMobileMenu}>
                    <span />
                    <span />
                    <span />
                </div>
            </nav>
        </>
    )
}

export default NavBar