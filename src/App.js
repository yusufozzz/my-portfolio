import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    title: 'Lash Salon',
    description: 'A beauty salon management simulation game',
    icon: '/Images/LashSalon.png',
    link: 'https://apps.apple.com/us/app/lash-salon/id1602974261',
    store: 'App Store'
  },
  {
    title: 'Snake vs Block',
    description: 'An addictive arcade game with a unique twist',
    icon: '/Images/SnakeVsBlock.png',
    link: 'https://apps.apple.com/us/app/snake-vs-block/id1233739175',
    store: 'App Store'
  },
  {
    title: 'Small Business',
    description: 'Build and manage your own business empire',
    icon: '/Images/SmallBusiness.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.HalfBite.SmallBusiness',
    store: 'Play Store'
  }
];

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <motion.h1
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
              Yusuf Öz
            </motion.h1>
            <nav>
              <ul className="flex space-x-6 text-gray-700 font-medium">
                <li><a href="#about" className="hover:text-blue-500">About</a></li>
                <li><a href="#games" className="hover:text-blue-500">Games</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="flex-grow">
          <div className="container mx-auto px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Game Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Crafting Immersive Gaming Experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
              {[
                { stat: '5+ Years', text: 'Experience' },
                { stat: '850K+', text: 'Total Downloads' },
                { stat: '15+', text: 'Published Games' }
              ].map((item, i) => (
                  <motion.div
                      key={i}
                      className="bg-white rounded-xl shadow-md p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
              ))}
            </div>
          </div>

          <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
              <motion.h2
                  className="text-3xl font-bold mb-6 text-gray-800"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p
                  className="max-w-3xl mx-auto text-lg text-gray-700"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                With 5 years of experience in game development, I specialize in creating engaging mobile games using Unity and C#. My passion lies in crafting experiences that bring joy to players worldwide.
              </motion.p>
            </div>
          </section>

          <section id="games" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Featured Games
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {games.map((game, index) => (
                    <motion.div
                        key={index}
                        className="bg-white w-full max-w-md rounded-lg shadow-md p-4 flex items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div
                          className="w-20 h-20 rounded-md bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${game.icon})` }}
                      ></div>
                      <div className="ml-4 flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {game.title}
                        </h3>
                        <p className="text-sm text-gray-600">{game.description}</p>
                      </div>
                      <a
                          href={game.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 bg-blue-600 text-white px-3 py-2 text-sm rounded-md hover:bg-blue-700"
                      >
                        {game.store}
                      </a>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Get in Touch
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-8">
                I'm always open to new opportunities and collaborations.
              </p>
              <div className="flex justify-center space-x-6 text-2xl text-gray-700">
                <a
                    href="mailto:yusufozjr@gmail.com"
                    className="hover:text-blue-600"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/yusuf-oz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://www.instagram.com/yufisjr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="tel:+905362925089"
                    className="hover:text-blue-600"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </section>
        </section>

        <footer className="bg-gray-900 text-white text-center py-4">
          <div className="container mx-auto px-6">
            <p>&copy; 2025 Yusuf Öz. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
