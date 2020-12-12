import React from "react";
import Logo from "../images/tannermoore_productions.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

console.log(Logo);

const Footer = () => {
    return (
        <footer className="callout large secondary">
            <div className="grid-container grid-x">

                <nav className="large-8 cell logo-links hidden-large">
                    <a className="footer-links" href="https://www.linkedin.com/in/tdmoore004/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="footer-links" href="https://github.com/tdmoore004">
                        <i className="fab fa-github"></i>
                    </a>
                </nav>

                <figure className="large-4 cell copyright">
                    <img className="footer-logo" src={Logo} alt="Tanner Moore Productions">
                    </img>
                        <figcaption className="copyright">
                            Copyright &#169; 2020 All Rights Reserved
                        </figcaption>
                </figure>

                    <nav className="large-8 cell logo-links hidden-medium">
                        <a className="footer-links" href="https://www.linkedin.com/in/tdmoore004/">
                            <FontAwesomeIcon className="fab fa-linkedin-in" icon={faLinkedinIn} />
                        </a>
                        <a className="footer-links" href="https://github.com/tdmoore004">
                            <FontAwesomeIcon className="fab fa-github" icon={faGithub} />
                        </a>
                    </nav>
            </div>
        </footer>
    )
}

export default Footer;