import React from 'react';
import "./NavBar.css";
import toggleMobileMenu from './navBar';


function NavBar() {


    
    

    return (
        <>
            <nav>
                <ul id="menu">
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Features</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
                 <div className="mobile-bar" onClick={toggleMobileMenu}> {/*onclick="toggleMobileMenu()"; */}
                    <span />
                    <span />
                    <span />
                </div>
            </nav>
        </>
    )
}

export default NavBar