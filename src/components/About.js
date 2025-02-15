import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h1>ABOUT ME</h1>
            <div className="aboutme-content">
                <h2>My name is Aaron Nash Enriquez. I grew up in Summitville, Putatan, Muntinlupa, and I'm currently a 3rd-year IT student at Lyceum of Alabang. My goal is to become a game developer as it was my passion to create games people will like and be entertained. As the eldest of four siblings, I'm committed to supporting my family financially while also striving to live a fulfilling, happy, and healthy life.</h2>
            </div>
            <section id="education">
                <h1 className="section-title">Education</h1>
                <div className="timeline">
                    {/* Timeline items here */}
                </div>
            </section>
        </section>
    );
};

export default About;