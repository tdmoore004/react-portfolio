import React from "react";

// Importing profile picture.
import profilePic from "../assets/images/profilepic-philippines-0015.jpg";

// Constant for rendering About page content.
const About = () => {
    return (
        <main className="card grid-container grid-x align-center about">

            {/* Headline introducing who I am. */}
            <h3 className="card-divider about">
                Full-Stack Web Developer &amp; Digital Media Guru...
            </h3>

            <section className="card-section">

                {/* Profile picture */}
                <img id="profilePic" src={profilePic} alt="Tanner Moore Profile Picture" loading="lazy" />

                {/* Introduction to who I am and what I do. */}
                <p className="aboutMe">Capable of designing a logo to highlight your brand while also developing a polished and responsive webpage to attract clients.</p>
                <p className="aboutMe">Worked my way through college, earning a Bachelor of Science in communication, with a minor in design, as well as a certificate in full-stack web development from the University of Utah. Experienced with front-end web development technologies such as HTML, CSS and JavaScript as well as key layout and design principles.</p>
                <p className="aboutMe">My passion for design, experience with digital media and skills with front-end web development technologies make me a valuable asset on any design or development team.</p>
                <p className="aboutMe">Learn more about my skills and experience <a className="resumeLink" href="/files/tanner-moore-resume.pdf">here</a>.</p>

            </section>
            
        </main>
    )
}

export default About;