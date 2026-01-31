import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';
import sdaLogo from './SDA Logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={sdaLogo} alt="SDA Tours Logo" className="logo-image" style={{ height: '50px', objectFit: 'contain' }} />
                </Link>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/tours" className="nav-link" onClick={toggleMenu}>Tour Packages</NavLink>
                    <NavLink to="/fleet" className="nav-link" onClick={toggleMenu}>Our Fleet</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>

                    {user && (
                        <button onClick={() => { logout(); toggleMenu(); }} className="btn btn-outline mobile-only" style={{ borderColor: '#F15A29', color: '#F15A29', padding: '0.5rem 1rem' }}>
                            <FaSignOutAlt /> Sign Out
                        </button>
                    )}

                    <a href="tel:+919581017373" className="btn btn-primary mobile-only">
                        <FaPhoneAlt /> Call Now
                    </a>
                </nav>

                <div className="header-actions">
                    {user && (
                        <button onClick={logout} className="btn desktop-only" style={{ border: '1px solid #aaa', color: '#666', padding: '0.6rem 1.2rem' }}>
                            <FaSignOutAlt /> Sign Out
                        </button>
                    )}
                    <a href="tel:+919581017373" className="btn btn-primary desktop-only">
                        <FaPhoneAlt /> Book Now
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
