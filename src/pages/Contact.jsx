import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully! We will get back to you soon.");
    };

    return (
        <div className="contact-page container section">
            <div className="section-header">
                <h1>Contact Us</h1>
                <p>We are here to help. Reach out to us for bookings or queries.</p>
            </div>

            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info-card">
                    <h2>Get in Touch</h2>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <div>
                            <h3>Phone</h3>
                            <p>+91 9581017373</p>
                            <p>+91 7093702276</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h3>Email</h3>
                            <p>trinadhk.vzm@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h3>Office Address</h3>
                            <p> Old Bus Stand Road, Vizianagaram</p>
                            <p>[Vizianagaram], [Andhra Pradesh] - 535001</p>
                        </div>
                    </div>

                    <div className="social-connect">
                        <h3>Connect Instantly</h3>
                        <a href="https://wa.me/919581017373" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                            <FaWhatsapp /> Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send Message</h2>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" required placeholder="Surya Kathyakeya" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" required placeholder="suryakathyakeya@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" required placeholder="+91..." />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select>
                                <option>General Inquiry</option>
                                <option>Bus Booking</option>
                                <option>Tour Package</option>
                                <option>Complaint/Feedback</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" required placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-section">
                <iframe
                    title="Google Map"
                    src="https://maps.google.com/maps?q=Vizianagaram%20Clock%20Tower&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

export default Contact;
