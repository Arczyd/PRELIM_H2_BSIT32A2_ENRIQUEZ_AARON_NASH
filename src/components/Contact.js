import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-box">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" className="input-field" placeholder="Full Name" />
                    <input type="email" className="input-field" placeholder="Email" />
                    <input type="text" className="input-field" placeholder="Contact No." />
                    <textarea className="input-field textarea-field" placeholder="Your Message"></textarea>
                    <input type="submit" className="btn" />
                </form>
            </div>
        </section>
    );
};

export default Contact;