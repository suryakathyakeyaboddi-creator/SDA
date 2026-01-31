import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaChrome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>SDA Tours & Travels</h3>
                    <p>Your trusted partner for memorable journeys. Experience comfort, safety, and luxury with our premium fleet and curated tour packages.</p>
                    <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#bdc3c7' }}>
                        <strong>Owners:</strong><br />
                        K TRINADH<br />
                        K UMA MAHESWARA RAO
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://www.instagram.com/sda_tours_travels?igsh=MXR4cXc5c3V4NHFldQ==" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://wa.me/919581017373" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" aria-label="Localhost"><FaChrome /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tours">Tour Packages</Link></li>
                        <li><Link to="/fleet">Our Fleet</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>
                            <FaMapMarkerAlt />
                            <span> Vizianagaram, Andhra Pradesh, India - 535001</span>
                        </li>
                        <li>
                            <FaPhone />
                            <span><a href="tel:+919581017373">+91 9581017373</a>, <a href="tel:+917093702276">+91 7093702276</a></span>
                        </li>
                        <li>
                            <FaEnvelope />
                            <span><a href="mailto:trinadhk.vzm@gmail.com">trinadhk.vzm@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SDA Tours and Travels. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
