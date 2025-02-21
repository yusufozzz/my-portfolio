import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {GlobeAltIcon, SparklesIcon, DevicePhoneMobileIcon} from '@heroicons/react/24/outline';
import { Typed } from 'react-typed';
import {FaSun, FaMoon} from 'react-icons/fa';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    {
      title: 'Lash Salon',
      description: 'A beauty salon management simulation game',
      icon: '/Images/LashSalon.png',
      link: 'https://apps.apple.com/us/app/lash-salon/id1602974261',
      store: 'App Store',
      downloads: '100K+',
      rating: 4.8,
    },
    {
      title: 'Snake vs Block',
      description: 'An addictive arcade game with a unique twist',
      icon: '/Images/SnakeVsBlock.png',
      link: 'https://apps.apple.com/us/app/snake-vs-block/id1233739175',
      store: 'App Store',
      downloads: '500K+',
      rating: 4.6,
    },
    {
      title: 'Small Business',
      description: 'Build and manage your own business empire',
      icon: '/Images/SmallBusiness.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.HalfBite.SmallBusiness',
      store: 'Play Store',
      downloads: '250K+',
      rating: 4.7,
    },
  ];

  return (
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div
            className="min-h-screen bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-black dark:to-black text-gray-800 dark:text-white transition-colors duration-700">
          <button
              onClick={() => setDarkMode(!darkMode)}
              className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-md p-3 rounded-full"
          >
            {darkMode ? <FaSun className="text-yellow-400"/> : <FaMoon className="text-gray-600"/>}
          </button>

          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)`,
                  transform: `translateY(${scrollY * 0.4}px)`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8}}
                  className="text-center"
              >
                <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                  <Typed
                      strings={['Yusuf Öz', 'Game Developer', 'Creative Designer']}
                      typeSpeed={80}
                      backSpeed={40}
                      loop
                  />
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Crafting Immersive Gaming Experiences
                </p>
                <div className="flex justify-center gap-4">
                  <a
                      href="#games"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition duration-300"
                  >
                    View Projects
                  </a>
                  <a
                      href="#contact"
                      className="border border-gray-800 dark:border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition duration-300"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>
          </header>
          <section className="py-20 dark:bg-gray-800/50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {icon: GlobeAltIcon, stat: '5+ Years', text: 'Experience'},
                  {icon: SparklesIcon, stat: '850K+', text: 'Total Downloads'},
                  {icon: DevicePhoneMobileIcon, stat: '15+', text: 'Published Games'},
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.2}}
                        className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-700/30 backdrop-blur-lg shadow-lg"
                    >
                      <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-500 dark:text-blue-400"/>
                      <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section id="games" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">Featured Games</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        whileHover={{y: -10}}
                        className="bg-white/70 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg"
                    >
                      <div className="aspect-square relative">
                        <img
                            src={game.icon || '/api/placeholder/400/400'}
                            alt={game.title}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                            <p className="text-gray-300 mb-4">{game.description}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-yellow-400">★ {game.rating}</span>
                              <span className="text-gray-400">{game.downloads} downloads</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <a
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
                        >
                          Download on {game.store}
                        </a>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section id="contact" className="py-20 dark:bg-gray-800/50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and exciting collaborations. Let's bring your game idea
                to life!
              </p>
              <div className="flex justify-center gap-6">
                {[
                  {icon: 'fas fa-envelope', link: 'mailto:yusufozjr@gmail.com'},
                  {icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/yusuf-oz/'},
                  {icon: 'fab fa-instagram', link: 'https://www.instagram.com/yufisjr/'},
                  {icon: 'fas fa-phone', link: 'tel:+905362925089'},
                ].map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.1}}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/70 hover:bg-blue-600 transition duration-300 shadow-lg"
                    >
                      <i className={`${social.icon} text-2xl`}></i>
                    </motion.a>
                ))}
              </div>
            </div>
          </section>

          <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
            <div className="container mx-auto px-6">
              <p>&copy; 2025 Yusuf Öz. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
  );
};

export default Portfolio;
