import React, { Component } from "react";
import { Link } from "react-router-dom";

// Importing name logo for header.
import nameLogo from "../assets/images/logos/tannermoore_name.png";

// Importing Font Awesome ellipsis for responsive navbar.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// Importing jQuery for functional Foundation resonsiveness.
import $ from "jquery";

// Header content.
class Header extends Component {

    // Initializing Foundation for JS functionality.
    componentDidMount() {
        $(document).foundation();
    }

    // Rendering the Header/Navbar.
    render() {
        return (
            <header className="top-bar" id="mainNavigation">
                <figure className="top-bar-left">

                    {/* Name logo and link back to about. */}
                    <Link to="/react-portfolio">
                        <img id="logo" src={nameLogo} alt="Tanner Moore Logo" loading="lazy">
                        </img>
                    </Link>

                </figure>

                {/* Responsive navbar menu */}
                <nav className="title-bar" data-responsive-toggle="nav-menu" data-hide-for="medium">
                    <button type="button" data-toggle="nav-menu">
                        <FontAwesomeIcon className="fas fa-ellipsis-v" icon={faEllipsisV} />
                    </button>
                </nav>

                {/* Navbar menu */}
                <nav className="top-bar-right" id="nav-menu">
                    <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
                        <li><Link to="/react-portfolio">About</Link></li>
                        <li><Link to="/react-portfolio/portfolio">Portfolio</Link></li>
                        <li><Link to="/react-portfolio/contact">Contact</Link></li>
                        <li>
                            <a className="social-dropdown">Social</a>
                            <ul className="nested vertical menu">
                            <li><a href="https://www.linkedin.com/in/tdmoore004/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/tdmoore004" target="_blank" rel="noreferrer">GitHub</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
            </header>
        )
    }
}

export default Header;