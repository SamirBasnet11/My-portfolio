import React, { useState, useEffect } from 'react';
import './App.css';
import project1Image from './project1.png'; // Import image for Project 1
import project2Image from './project1.png'; // Import image for Project 2

function App() {
    const email = 'sameerbasnet10@gmail.com';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true); // Set isLoaded to true when component mounts
    }, []);

    const handleContactClick = () => {
        window.location.href = `mailto:${email}`;
    };

  
        
    return (
        <div class="portfolio-container">
        <div className={`App ${isLoaded ? 'loaded' : ''}`}>
            <header>
               <h1>Samir Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT ME</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT ME</a></li>
                        <li><a href="#profile">PROFILE</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                 <section id="home" className="home-section">
                    <div className="hero-content">
                      <h2>Welcome to My Portfolio</h2>
                     <div className="scroll-down-arrow"></div>
                </div>
                </section>

                <section id="about" className="about-section">
                    <div className="about-content">
                        <h2>About Me</h2>
                        <p>Hi, I'm Samir, a frontend developer with a flair for creativity. Currently honing my skills on a dynamic team, I'm passionate about crafting delightful web experiences that leave a lasting impression. Let's build something amazing together!</p>
                    </div>
                </section>

                <section id="projects" className="projects-section">
                    <h2>Projects</h2>
                    <div className="projects-container">
                        <div className="project">
                            <h3>Project 1</h3>
                            <p>Description of Project 1</p>
                            <img src={project1Image} alt="Project 1" />
                        </div>
                        <div className="project">
                            <h3>Project 2</h3>
                            <p>Description of Project 2</p>
                            <img src={project2Image} alt="Project 1" />
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact-section">
                    <div className="contact-container">
                        <h2>Contact Me</h2>
                        <p>If you want to work together or have any inquiries, feel free to send me an email:</p>
                        <button onClick={handleContactClick} className="contact-button">Send Email</button>
                    </div>
                </section>
                <section id="profiles" className="profiles-section">
                    <h2>Profile</h2>
                    <div className="profile-links">
                        <a href="https://github.com/SamirBasnet11" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/samir-basnet-857474262/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/sameer.james/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Samir's Portfolio. All rights reserved.</p>
            </footer>
        </div>
        </div>
    );
}

export default App;

