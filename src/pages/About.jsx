import '../styles/About.css';
import { FaAward, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Banner */}
            <div className="about-hero">
                <div className="container">
                    <h1>About SDA Tours</h1>
                    <p>Your journey, our passion. Delivering excellence in travel since 2010.</p>
                </div>
            </div>

            <div className="container section about-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>Sri Durga Ayyappa Tours and Travels started with a simple vision: to make travel comfortable, safe, and accessible to everyone. Founded by [K TRINADH], we began with a single bus and a dream to connect people to destinations.</p>
                        <p>Over the years, we have grown into a reputed travel company in [Vizianagaram], known for our punctuality and hospitality. We take pride in having served thousands of happy customers, from daily commuters to holiday travelers.</p>

                        <h2>Our Mission</h2>
                        <p>We strive to provide the highest quality travel services by combining modern vehicles with old-school hospitality. Our goal is to ensure that every mile you travel with us is safe, comfortable, and memorable.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1000&auto=format&fit=crop" alt="Team or Office" />
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="why-us-section">
                    <h2 className="text-center">Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaShieldAlt className="feature-icon" />
                            <h3>Safety First</h3>
                            <p>Regular maintenance of vehicles and experienced drivers ensure a safe journey.</p>
                        </div>
                        <div className="feature-card">
                            <FaAward className="feature-icon" />
                            <h3>Premium Quality</h3>
                            <p>Luxury interiors, clean seats, and modern amenities for a superior experience.</p>
                        </div>
                        <div className="feature-card">
                            <FaHandshake className="feature-icon" />
                            <h3>Customer Support</h3>
                            <p>24/7 assistance for all your booking queries and travel needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
