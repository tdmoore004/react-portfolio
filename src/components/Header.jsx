import React from "react";
import Logo from "../images/logos/tannermoore_name.png"

const Header = () => {
    return (
        <header className="top-bar" id="mainNavigation">
            <figure className="top-bar-left">
                <a href="/">
                    <img id="logo" src={Logo} alt="Tanner Moore Logo" loading="lazy">
                    </img>
                </a>
            </figure>
                {/* Responsive navbar menu */}
                <nav className="title-bar" data-responsive-toggle="nav-menu" data-hide-for="medium">
                    <button type="button" data-toggle="nav-menu">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </nav>
                {/* Navbar menu */}
                <nav className="top-bar-right" id="nav-menu">
                    <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
                        <li><a href="/">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li>
                            <a className="social-dropdown">Social</a>
                            <ul className="vertical menu">
                                <li><a href="https://www.linkedin.com/in/tdmoore004/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://github.com/tdmoore004" target="_blank">GitHub</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
    </header>
    )
}

export default Header;