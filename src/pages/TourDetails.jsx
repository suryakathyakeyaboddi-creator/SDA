import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaUsers, FaCheck, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import '../styles/TourDetails.css';

// Mock Data (Ideally this would be fetched from an API or shared context)
const tourData = {
    1: {
        id: 1,
        title: 'Hyderabad to Goa Escape',
        location: 'Goa',
        duration: '4 Days / 3 Nights',
        price: 8999,
        category: 'Beach',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop',
        description: 'Experience the sun, sand, and sea with our luxury bus tour to Goa. Enjoy beach parties, water sports, and sightseeing.',
        itinerary: [
            { day: 1, title: 'Departure from Hyderabad', desc: 'Overnight journey in Luxury Sleeper Bus.' },
            { day: 2, title: 'Arrival in Goa', desc: 'Check-in to hotel. Evening at Calangute Beach. Dinner and overnight stay.' },
            { day: 3, title: 'North Goa Sightseeing', desc: 'Visit Fort Aguada, Baga Beach, Anjuna Beach. Water sports activities.' },
            { day: 4, title: 'South Goa & Return', desc: 'Visit Old Goa Churches, Mangueshi Temple. Return journey to Hyderabad in evening.' }
        ],
        inclusions: ['AC Sleeper Bus', '3 Star Hotel Accommodation', 'Breakfast & Dinner', 'Sightseeing in AC Bus'],
        exclusions: ['Lunch', 'Personal Expenses', 'Entry Tickets', 'Water Sports Charges']
    },
    // Default fallback for other IDs for demo purposes
    default: {
        title: 'Tour Package Details',
        location: 'Destination',
        duration: '3 Days',
        price: 5000,
        category: 'General',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
        description: 'Detailed description of the tour package goes here.',
        itinerary: [
            { day: 1, title: 'Day 1', desc: 'Arrival and leisure.' },
            { day: 2, title: 'Day 2', desc: 'Sightseeing.' },
            { day: 3, title: 'Day 3', desc: 'Departure.' }
        ],
        inclusions: ['Travel', 'Stay', 'Breakfast'],
        exclusions: ['Lunch', 'Personal Expenses']
    }
};

const TourDetails = () => {
    const { id } = useParams();
    const tour = tourData[id] || tourData.default;
    const [bookingForm, setBookingForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: 1
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({ ...bookingForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${bookingForm.name}! We have received your inquiry for ${tour.title}. We will contact you shortly.`);
        // Here you would typically send data to a backend or email service
    };

    return (
        <div className="tour-details-page">
            {/* Hero Header */}
            <div className="tour-header" style={{ backgroundImage: `url(${tour.image})` }}>
                <div className="tour-header-overlay">
                    <div className="container">
                        <span className="tour-category-tag">{tour.category}</span>
                        <h1>{tour.title}</h1>
                        <div className="tour-header-meta">
                            <span><FaMapMarkerAlt /> {tour.location}</span>
                            <span><FaClock /> {tour.duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container tour-content-layout">
                <div className="tour-info">
                    <section className="info-section">
                        <h2>Overview</h2>
                        <p>{tour.description}</p>
                    </section>

                    <section className="info-section">
                        <h2>Itinerary</h2>
                        <div className="timeline">
                            {tour.itinerary.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker">{item.day}</div>
                                    <div className="timeline-content">
                                        <h3>Day {item.day}: {item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="info-section">
                        <div className="inclusions-grid">
                            <div className="inclusions">
                                <h3><FaCheck className="text-success" /> Inclusions</h3>
                                <ul>
                                    {tour.inclusions.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                            <div className="exclusions">
                                <h3><FaTimes className="text-danger" /> Exclusions</h3>
                                <ul>
                                    {tour.exclusions.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Booking Sidebar */}
                <aside className="booking-sidebar">
                    <div className="booking-card">
                        <div className="price-tag">
                            <span className="amount">₹{tour.price}</span>
                            <span className="per-person">/ per person</span>
                        </div>

                        <form onSubmit={handleSubmit} className="booking-form">
                            <h3>Book This Tour</h3>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" required value={bookingForm.name} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" required value={bookingForm.phone} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required value={bookingForm.email} onChange={handleInputChange} />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" name="date" required value={bookingForm.date} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Guests</label>
                                    <input type="number" name="guests" min="1" required value={bookingForm.guests} onChange={handleInputChange} />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Send Inquiry</button>
                        </form>
                        <p className="form-note">No payment required now. We will contact you to confirm.</p>
                    </div>

                    <div className="help-widget">
                        <h4>Need Help?</h4>
                        <p>Call us for custom requirements</p>
                        <a href="tel:+919581017373" className="btn btn-outline btn-block">+91 9581017373</a>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TourDetails;
