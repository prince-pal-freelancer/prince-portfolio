import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Menu, X, Award, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import mockData from '../data/mock';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-text">Prince Pal</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {['About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {['About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="mobile-nav-link"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-profile">
              <div className="hero-avatar">
                <img 
                  src={mockData.profile.photos[1].url} 
                  alt="Prince Pal"
                  className="avatar-image"
                />
              </div>
              <div className="hero-badge">
                <Badge variant="outline" className="profession-badge">
                  Civil Engineer & Entrepreneur
                </Badge>
              </div>
            </div>
            <h1 className="hero-title">
              Building Tomorrow's
              <span className="accent-text"> Infrastructure</span>
            </h1>
            <p className="hero-description">
              {mockData.profile.tagline}
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Startup Founded</span>
              </div>
            </div>
            <div className="hero-actions">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="cta-primary"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="cta-secondary"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <ChevronDown className="scroll-arrow" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about building the future</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                {mockData.profile.about}
              </p>
              <p className="about-paragraph">
                My unique combination of technical expertise and entrepreneurial mindset allows me to approach challenges from multiple perspectives, whether I'm designing infrastructure solutions or building business strategies.
              </p>
              
              <div className="education-highlights">
                <h3 className="subsection-title">Education</h3>
                <div className="education-item">
                  <div className="education-details">
                    <h4>Diploma in Civil Engineering</h4>
                    <p>Government Polytechnic Bareilly • 2021-2024 • 70%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="photo-gallery">
                <div className="main-photo">
                  <img 
                    src={mockData.profile.photos[0].url} 
                    alt={mockData.profile.photos[0].alt}
                    className="profile-photo main"
                  />
                  <div className="photo-overlay">
                    <span className="photo-caption">{mockData.profile.photos[0].caption}</span>
                  </div>
                </div>
                <div className="secondary-photo">
                  <img 
                    src={mockData.profile.photos[1].url} 
                    alt={mockData.profile.photos[1].alt}
                    className="profile-photo secondary"
                  />
                  <div className="photo-overlay">
                    <span className="photo-caption">{mockData.profile.photos[1].caption}</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-info-card">
                <div className="profile-info">
                  <h3>Prince Pal</h3>
                  <p>Civil Engineer & Entrepreneur</p>
                  <div className="profile-highlights">
                    <div className="highlight">
                      <span className="highlight-number">2+</span>
                      <span className="highlight-label">Years Experience</span>
                    </div>
                    <div className="highlight">
                      <span className="highlight-number">3</span>
                      <span className="highlight-label">Major Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technical and business competencies</p>
          </div>
          <div className="skills-grid">
            {mockData.skills.map((category, index) => (
              <Card key={index} className="skill-category">
                <CardHeader>
                  <CardTitle className="skill-category-title">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="skills-list">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                          <div 
                            className="skill-bar"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">Building expertise through diverse projects</p>
          </div>
          <div className="experience-timeline">
            {mockData.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <Card className="experience-card">
                  <CardHeader>
                    <div className="experience-header">
                      <div>
                        <CardTitle className="job-title">{exp.position}</CardTitle>
                        <CardDescription className="company-name">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="date-badge">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="job-description">{exp.description}</p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Engineering solutions and business ventures</p>
          </div>
          <div className="projects-grid">
            {mockData.projects.map((project, index) => (
              <Card key={index} className="project-card">
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <Badge variant={project.type === 'Engineering' ? 'default' : 'secondary'} className="project-type-badge">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="project-header">
                    <CardTitle className="project-title">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="project-subtitle">{project.subtitle}</CardDescription>
                  {project.company && (
                    <div className="project-company">
                      <strong>{project.company}</strong> • {project.location}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="project-status">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                      className="status-badge"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="project-actions">
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-subtitle">Continuous learning and professional development</p>
          </div>
          
          <div className="certificates-grid">
            {mockData.certificates.map((cert, index) => (
              <Card key={index} className="certificate-card">
                <CardHeader>
                  <div className="certificate-header">
                    <div className="certificate-icon">
                      <Award className="award-icon" />
                    </div>
                    <div className="certificate-info">
                      <CardTitle className="certificate-title">{cert.title}</CardTitle>
                      <CardDescription className="certificate-org">{cert.organization}</CardDescription>
                    </div>
                    <Badge variant="outline" className="cert-type-badge">
                      {cert.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="certificate-details">
                    <div className="cert-meta">
                      <div className="cert-meta-item">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                      <div className="cert-meta-item">
                        <CheckCircle size={16} />
                        <span>{cert.type}</span>
                      </div>
                    </div>
                    
                    <p className="certificate-description">{cert.description}</p>
                    
                    <div className="certificate-skills">
                      <h4>Skills Covered:</h4>
                      <div className="skills-tags">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="skill-tag">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="certificate-issuer">
                      <strong>Issued by:</strong> {cert.issuer}
                    </div>
                    
                    <div className="certificate-actions">
                      <Button variant="outline" size="sm" className="view-cert-btn">
                        <ExternalLink size={16} />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="achievements-section">
            <h3 className="achievements-title">Additional Achievements</h3>
            <div className="achievements-grid">
              {mockData.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <CheckCircle className="achievement-icon" />
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <Badge variant="outline" size="sm">{achievement.category}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Ready to discuss your next project</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>{mockData.contact.email}</p>
                  </div>
                </div>
                <div className="contact-method">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>{mockData.contact.phone}</p>
                  </div>
                </div>
                <div className="contact-method">
                  <MapPin className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Gurgaon, India</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <Button variant="outline" size="sm">
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Github size={16} />
                  GitHub
                </Button>
              </div>
            </div>
            
            <div className="contact-form-container">
              <Card className="contact-form-card">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="contact-form">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" placeholder="Project inquiry" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows="4" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <Button className="submit-btn">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Prince Pal</h3>
              <p>Civil Engineer & Entrepreneur</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('about')}>About</button></li>
                  <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                  <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                  <li><button onClick={() => scrollToSection('certificates')}>Certificates</button></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li>{mockData.contact.email}</li>
                  <li>{mockData.contact.phone}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Prince Pal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;