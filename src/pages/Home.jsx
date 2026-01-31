import { Link } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { FaBus, FaUsers, FaMapMarkedAlt, FaSmile } from 'react-icons/fa';
import '../styles/Home.css';
// Local video file is too large for GitHub (250MB+). Using a remote placeholder for deployment.
// To restore local video: Uncomment import and use 'heroVideo' variable.
import heroVideo from '../components/Sda_compressed.mp4';
// const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-open-road-at-sunset-1249-large.mp4";
// Import local images for featured tours
import kashi from './kashi.jpg';
import tirupathi from './tirupathi.jpg';
import rameshwaram from './rameshwaram.jpg';

const featuredTours = [
    {
        id: 1,
        title: 'Kashi Temple Tour',
        location: 'Varanasi',
        duration: 'Flexible Time',
        price: '₹8,999',
        category: 'Temples',
        image: kashi,
        description: 'Experience the spiritual journey of Kashi (Varanasi), one of the oldest living cities in the world.'
    },
    {
        id: 2,
        title: 'Spiritual Tirupati',
        location: 'Tirupati',
        duration: 'Flexible Time',
        price: '₹3,499',
        category: 'Temples',
        image: tirupathi,
        description: 'A peaceful spiritual journey to the abode of Lord Venkateswara.'
    },
    {
        id: 3,
        title: 'Rameshwaram Pilgrimage',
        location: 'Rameshwaram',
        duration: 'Flexible Time',
        price: '₹6,999',
        category: 'Temples',
        image: rameshwaram,
        description: 'Visit the sacred Ramanathaswamy Temple and the holy water bodies (Theerthams).'
    }
];

const stats = [
    { icon: <FaBus />, value: '2+', label: 'Luxury Vehicles' },
    { icon: <FaUsers />, value: '10k+', label: 'Happy Customers' },
    { icon: <FaMapMarkedAlt />, value: '100+', label: 'Destinations' },
    { icon: <FaSmile />, value: '5+', label: 'Years Experience' },
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src={heroVideo} type="video/quicktime" />
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Explore the World with Comfort</h1>
                    <p>Premium tours and travel services for your perfect getaway. Safety, Luxury, and Reliability.</p>
                    <div className="hero-buttons">
                        <Link to="/tours" className="btn btn-primary">Explore Packages</Link>
                        <Link to="/contact" className="btn btn-accent">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2>Welcome to SDA Tours and Travels</h2>
                            <p>Since our inception, SDA Tours and Travels has been dedicated to providing top-notch travel experiences. We specialize in organizing comfortable and memorable tours across India.</p>
                            <p>Whether you need a luxury bus for a wedding, a tempo traveler for a family trip, or a customized tour package, we have it all. Our fleet is well-maintained, and our drivers are experienced professionals ensuring your safety.</p>
                            <Link to="/about" className="btn btn-primary">Read More About Us</Link>
                        </div>
                        <div className="intro-image">
                            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop" alt="Luxury Bus" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Tours */}
            <section className="section featured-tours">
                <div className="container">
                    <div className="section-header">
                        <h2>Popular Tour Packages</h2>
                        <p>Handpicked destinations for your next adventure</p>
                    </div>
                    <div className="tours-grid">
                        {featuredTours.map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/tours" className="btn btn-primary">View All Packages</Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2>What Our Customers Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p>"Amazing experience with SDA Tours! The bus was super comfortable and the driver was very professional. Highly recommended for family trips."</p>
                            <h4>- Surya Kathyakeya Boddi</h4>
                            <span>Visakhapatnam</span>
                        </div>
                        <div className="testimonial-card">
                            <p>"We booked Swift Dezire for our trip to Araku. The vehicle was clean, AC was effective, and the journey was smooth. Great service!"</p>
                            <h4>- Sudhakar Rao</h4>
                            <span>S.Kota</span>
                        </div>
                        <div className="testimonial-card">
                            <p>"Best travel agency for Educational Organisations. Everything was well organized from pickup to drop-off assistance for students. Thank you SDA!"</p>
                            <h4>- Ananth K</h4>
                            <span>Vizianagaram</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
