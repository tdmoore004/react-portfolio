import React from "react";

// Contact page content.
const Contact = () => {
    return (
        <main className="card grid-container grid-x align-center contact">

            {/* Page header */}
            <h3 className="card-divider contact">
                Contact Me
            </h3>

            {/* Contact information. Future home for contact form. */}
            <section className="card-section">
                <p className="aboutMe">Phone: <a className="resumeLink" href="tel:3852457184">(385) 245-7184</a></p>
                <p className="aboutMe">Email: <a className="resumeLink" href="mailto:tdmoore004@gmail.com">tdmoore004@gmail.com</a></p>
                <p className="aboutMe">Contact form coming soon!</p>
            </section>
            
        </main>
    )
}

export default Contact;