import { Link } from "react-router-dom"
import "./Footer.css"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Career", path: "/careers" },
    { name: "Our Partners", path: "/partners" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ]

  const services = [
    { name: "Staffing", path: "/services/staffing" },
    { name: "Search & Recruitment", path: "/services/search-recruitment" },
    { name: "skilling & Learning", path: "/services/skilling-learning" },
    { name: "Managed Services", path: "/services/managed-services" },
    { name: "Apprenticeship", path: "/services/apprenticeship" },
    { name: "Compliance", path: "/services/compliance" },
    { name: "Security Services", path: "/services/SecurityServices" },
  ]

  const industries = [
    "Information Technology",
    "Fintech",
    "E-Commerce",
    "Manufacturing",
    "Healthcare",
    "Banking & Finance",
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="./whiteLogo.png" alt="Hullect Services" />
              {/* <span className="footer-logo-text">Hullect Services</span> */}
            </div>
            <p className="footer-description">
              Your trusted partner in staffing and managed outsourcing services. We connect exceptional talent with
              leading companies across industries.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon"><FaEnvelope size={(30)} /></span>
                <a href="mailto:connect@hullectservices.com">connect@hullectservices.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaPhone size={(30)} /></span>
                <a href="tel:9120018844">+91 9120018844</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaGlobe size={(30)} /></span>
                <a href="https://www.hullectservices.com" target="_blank" rel="noopener noreferrer">
                  www.hullectservices.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Industries</h3>
            <ul className="footer-links">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Certifications</h3>
            <div className="certifications">
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>Startup India Registered</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>CII Member</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon"></span>
                <span>PASARA Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Hullect Services Private Limited. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="https://www.facebook.com/hullectservicespvtltd/?ti=as"  target="_blank" rel="noopener noreferrer">
                      <FaFacebookF  size={30}/>
                    </a>
                    <a href="https://www.instagram.com/hullectservices/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/posts/hullect-services-pvt-ltd_hullect-services-pvt-ltd-linkedin-activity-6826091504340144128-U725/"  target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn size={30} />
                    </a>
                    <a href="https://www.google.com/maps/place/Hullect+Services+Private+Limited/@26.8266997,81.0084445,17z/data=!3m1!4b1!4m6!3m5!1s0x399be3989c5e0a3d:0xa7dfa5771d5febbb!8m2!3d26.8266997!4d81.0084445!16s%2Fg%2F11mx5wp9zf!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                      <FaMapMarkerAlt size={30} />
                    </a>
                    <a href="tel:+91 91200 18844" >
                      <FaPhoneAlt size={30} />
                    </a>
                    <a href="https://wa.me/919120018844" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={30} />
                    </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
