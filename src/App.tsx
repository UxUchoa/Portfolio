import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Github, Linkedin, Download, Menu, X, Eye, Calendar, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Mock project data representing Behance portfolio
  const projects = [
    {
      id: 1,
      title: "Banking App Redesign",
      category: "Mobile UX/UI",
      description: "Complete redesign of a mobile banking application focusing on user experience and accessibility.",
      image: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UX Research", "Mobile Design", "Prototyping"],
      year: "2024"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform design with focus on conversion optimization and user journey.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Conversion", "Web Design"],
      year: "2023"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "Dashboard Design",
      description: "Comprehensive financial dashboard for real estate investment management platform.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Data Visualization", "Dashboard", "Analytics"],
      year: "2023"
    },
    {
      id: 4,
      title: "Healthcare Mobile App",
      category: "Mobile UX/UI",
      description: "Patient-centered healthcare app design focusing on appointment management and health tracking.",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Healthcare", "Mobile", "User Research"],
      year: "2022"
    }
  ];

  const skills = [
    { name: "UX Research", level: 95 },
    { name: "UI Design", level: 98 },
    { name: "Prototyping", level: 92 },
    { name: "User Testing", level: 88 },
    { name: "Information Architecture", level: 90 },
    { name: "Design Systems", level: 94 }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", "Adobe Illustrator", 
    "Miro", "InVision", "Principle", "After Effects", "Zeplin"
  ];

  const experience = [
    {
      period: "2023 - Present",
      role: "UX Researcher",
      company: "Banco do Brasil",
      description: "Leading user research initiatives for digital banking products, conducting usability studies and design validation."
    },
    {
      period: "2021 - 2023",
      role: "Senior UX/UI Designer",
      company: "ImoBanco",
      description: "Designed end-to-end user experiences for real estate fintech platform, increasing user engagement by 40%."
    },
    {
      period: "2019 - 2021",
      role: "UX/UI Designer",
      company: "AevoTech",
      description: "Created user-centered designs for enterprise software solutions, collaborated with cross-functional teams."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Lucas Uchôa</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium text-lg">👋 Hi there!</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  I'm <span className="text-blue-600">Lucas Uchôa</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A UX/UI Designer with <span className="font-semibold text-blue-600">6 years of experience</span> crafting digital experiences that delight users and drive business results.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Eye size={20} />
                  <span>View My Work</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a href="mailto:lucasismael03@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://www.behance.net/Lucas_-vieira" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <ExternalLink size={24} />
                </a>
                <a href="https://wa.me/5583996698962" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">LU</span>
                    </div>
                    <p className="text-gray-600 text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Brazil, I specialize in creating user-centered digital interfaces that combine aesthetics with functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                I've had the privilege of working with leading companies like <span className="font-semibold text-blue-600">Banco do Brasil</span>, <span className="font-semibold text-blue-600">ImoBanco</span>, and <span className="font-semibold text-blue-600">AevoTech</span>, where I've consistently delivered impactful design solutions.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                My approach combines user research, data-driven insights, and creative problem-solving to create digital experiences that not only look great but also solve real user problems and drive business objectives.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Brazil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="text-gray-700">6+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700">50+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="text-blue-600" size={20} />
                  <span className="text-gray-700">Continuous Learning</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools I Master</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Portfolio Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Each project showcases problem-solving through design thinking, user research, and data-driven solutions.
            </p>
            <a 
              href="https://www.behance.net/Lucas_-vieira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View Full Portfolio on Behance</span>
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">{project.category}</span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">A journey of growth and impactful design solutions</p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center space-x-2 text-blue-600 font-medium mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
                  <h4 className="text-lg text-blue-600 font-medium mb-3">{job.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education & Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Design Technology</h4>
                <p className="text-gray-600 text-sm">Unipê</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Google UX Design Certificate</h4>
                <p className="text-gray-600 text-sm">In Progress</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">UX Design Intensive</h4>
                <p className="text-gray-600 text-sm">Awari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on your next project? I'd love to hear about your design challenges and how we can solve them together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:lucasismael03@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Mail className="text-blue-400" size={24} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">lucasismael03@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+5583996698962"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Phone className="text-blue-400" size={24} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">+55 83 996698962</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5583996698962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Phone className="text-green-400" size={24} />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-300">+55 83 996698962</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Lucas Uchôa. All rights reserved. Crafted with passion for great design.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;