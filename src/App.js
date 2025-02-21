// src/App.js
import React from 'react';
import './App.css'; // Make sure this file has the same CSS as your original "mavili" example

function App() {
  return (
      <div>
        <header>
          <div className="container">
            <h1>Yusuf Öz</h1>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#games">Games</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h2>Game Developer</h2>
            <p>Crafting Immersive Gaming Experiences</p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2>About Me</h2>
            </div>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              With 5 years of experience in game development, I specialize in creating engaging mobile games using Unity
              and C#. My passion lies in crafting experiences that bring joy to players worldwide.
            </p>
          </div>
        </section>

        <section id="games" className="games-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Games</h2>
            </div>
            <div className="games">
              <div className="game">
                <div
                    className="icon"
                    style={{ backgroundImage: 'url("/my-portfolio/Images/LashSalon.png")' }}
                ></div>
                <div className="name-content">
                  <div className="name">Lash Salon</div>
                  <div className="content">A beauty salon management simulation game</div>
                </div>
                <a
                    href="https://apps.apple.com/us/app/lash-salon/id1602974261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-link"
                >
                  <i className="fab fa-app-store-ios"></i> App Store
                </a>
              </div>

              <div className="game">
                <div
                    className="icon"
                    style={{ backgroundImage: 'url("/my-portfolio/Images/SnakeVsBlock.png")' }}
                ></div>
                <div className="name-content">
                  <div className="name">Snake vs Block</div>
                  <div className="content">An addictive arcade game with a unique twist</div>
                </div>
                <a
                    href="https://apps.apple.com/us/app/snake-vs-block/id1233739175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-link"
                >
                  <i className="fab fa-app-store-ios"></i> App Store
                </a>
              </div>

              <div className="game">
                <div
                    className="icon"
                    style={{ backgroundImage: 'url("/my-portfolio/Images/SmallBusiness.jpg")' }}
                ></div>
                <div className="name-content">
                  <div className="name">Small Business</div>
                  <div className="content">Build and manage your own business empire</div>
                </div>
                <a
                    href="https://play.google.com/store/apps/details?id=com.HalfBite.SmallBusiness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-link"
                >
                  <i className="fab fa-google-play"></i> Play Store
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
        CONTACT SECTION - now fully matching your "mavili" HTML
        Make sure .contact, .social-links, etc. classes are defined in App.css
      */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Get in Touch</h2>
            </div>
            <div className="social-links">
              <a href="mailto:yusufozjr@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                  href="https://www.linkedin.com/in/yusuf-oz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                  href="https://www.instagram.com/yufisjr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="tel:+905362925089" title="Phone">
                <i className="fas fa-phone"></i>
              </a>
            </div>
            <div className="contact-info">
              <p>I'm always open to new opportunities and collaborations</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2025 Yusuf Öz. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
