import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  BookOpen, 
  Briefcase, 
  User, 
  Send, 
  Moon, 
  Sun, 
  ChevronUp,
  ExternalLink
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Header */}
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-all duration-300 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <span className="inline-block transform hover:scale-105 transition-transform">Bharath</span>
              </a>
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="nav-link">About</a>
                <a href="#education" className="nav-link">Education</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <a 
                  href="#contact" 
                  className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bharath</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  <span className="typing-text">Web Developer & IT Professional</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  A passionate B.Tech graduate in Information Technology, specializing in web development and thriving in professional environments. Let's build something amazing together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="btn-primary"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="btn-secondary"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center animate-fade-in">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/public/Bharath.jpg" 
                    alt="Bharath" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path 
                fill="currentColor" 
                className="text-white dark:text-gray-900"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <User className="section-icon" />
              <h2 className="section-title">About Me</h2>
              <div className="section-line"></div>
            </div>
            <div className="mt-12 max-w-4xl mx-auto text-center animate-on-scroll">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Bharath, a B.Tech graduate in Information Technology, specializes in web development and thrives in professional environments. Adept at front-end and back-end development, with a strong grasp of coding frameworks and scalable solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Passionate about collaborating with industry experts, continuously expanding technical expertise, and contributing to innovative projects. Actively exploring AI development, entrepreneurship, and digital marketing to enhance problem-solving and leadership abilities.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Enthusiastic about communication and team-building, aiming to integrate technology and strategic thinking for impactful solutions.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-on-scroll">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Development</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Skilled in creating responsive and interactive web applications using modern technologies and frameworks.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-on-scroll" data-delay="200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Design</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Experienced in creating visually appealing and user-friendly interfaces with tools like Wix Studio.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-on-scroll" data-delay="400">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Digital Marketing</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Knowledge of digital marketing strategies to enhance online presence and reach target audiences effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <BookOpen className="section-icon" />
              <h2 className="section-title">Education</h2>
              <div className="section-line"></div>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-0">B.Tech in Information Technology</h3>
                    <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Currently Pursuing</span>
                  </div>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">Jeppiaar Institute of Technology</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focusing on programming, web development, data structures, and software engineering principles.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll" data-delay="200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-0">Higher Secondary Education</h3>
                    <span className="px-4 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Completed</span>
                  </div>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">Meenakshi Ammal Matric Higher Secondary School</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed with a focus on mathematics and computer science, laying the foundation for technical education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <h2 className="section-title">Skills & Expertise</h2>
              <div className="section-line"></div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="animate-on-scroll">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">HTML, CSS, JavaScript</span>
                      <span className="text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-blue-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Web Design (Wix Studio)</span>
                      <span className="text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-teal-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Python</span>
                      <span className="text-gray-700 dark:text-gray-300">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-purple-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Java</span>
                      <span className="text-gray-700 dark:text-gray-300">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-orange-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">C</span>
                      <span className="text-gray-700 dark:text-gray-300">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll" data-delay="200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Communication</span>
                      <span className="text-gray-700 dark:text-gray-300">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-green-500 h-2.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Digital Marketing</span>
                      <span className="text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-red-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
                      <span className="text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-yellow-500 h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Team Collaboration</span>
                      <span className="text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-pink-500 h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Project Management</span>
                      <span className="text-gray-700 dark:text-gray-300">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="skill-progress-bar bg-cyan-500 h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Fields of Interest</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-on-scroll">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating responsive, interactive, and user-friendly web interfaces.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center" data-delay="100">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Data Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyzing and interpreting complex data sets to derive valuable insights.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center" data-delay="200">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Game Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building interactive gaming experiences with modern technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <Briefcase className="section-icon" />
              <h2 className="section-title">Projects</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Programming Information Interface</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    An interface providing comprehensive information about programming concepts, languages, and best practices using HTML, CSS, and JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">JavaScript</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll" data-delay="200">
                <div className="h-48 bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="19" y1="12" x2="5" y2="12"></line></svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coding Practice Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    An interactive platform for practicing coding skills with features like code editor, problem sets, and real-time feedback using HTML, CSS, and JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">JavaScript</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center animate-on-scroll">
              <a href="https://github.com/Bharath-12062006" className="inline-flex items-center btn-secondary">
                <Github size={18} className="mr-2" />
                See More on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-icon"><path d="M21.5 15v4a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <h2 className="section-title">Certifications</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500 animate-on-scroll">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Infosys - Introduction to Python</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive introduction to Python programming language, covering fundamentals, data structures, and practical applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Issued by Infosys</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Verified</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500 animate-on-scroll" data-delay="100">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">FutureSkills Prime - Digital 101 Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive introduction to digital technologies, trends, and their applications in modern business environments.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Issued by FutureSkills Prime</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">Verified</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500 animate-on-scroll" data-delay="200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">SkillRack - Python 3.x Programming Course</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Hands-on course covering Python 3.x programming with practical exercises and real-world applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Issued by SkillRack</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Hands-On</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="section-heading">
              <Send className="section-icon" />
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                      <a href="tel:6383954734" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        6383954734
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                      <a href="mailto:bharathentrepreneur7@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        bharathentrepreneur7@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        NO.49 Vazhaithottam street, Uthiramerur, Kanchipuram district-603406
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/bharath"
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://github.com/Bharath-12062006"
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.skillrack.com/bharath"
                        className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                        aria-label="SkillRack"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md animate-on-scroll" data-delay="200">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-gray-900 dark:bg-gray-950 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Bharath</h3>
                <p className="text-gray-400 mb-4 max-w-md">
                  A passionate B.Tech graduate in Information Technology, specializing in web development and thriving in professional environments.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/bharath"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/Bharath-12062006"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.skillrack.com/bharath"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    aria-label="SkillRack"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                  <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-2" />
                    <a href="tel:6383954734" className="hover:text-white transition-colors">6383954734</a>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Mail size={16} className="mr-2" />
                    <a href="mailto:bharathentrepreneur7@gmail.com" className="hover:text-white transition-colors">bharathentrepreneur7@gmail.com</a>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <MapPin size={16} className="mr-2 mt-1" />
                    <span>Uthiramerur, Kanchipuram district, Tamil Nadu</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Bharath. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 animate-fade-in z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;