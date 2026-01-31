import { Link } from 'react-router-dom';
import { FaClock, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/TourCard.css';

const TourCard = ({ tour }) => {
    return (
        <div className="tour-card">
            <div className="tour-image">
                <img src={tour.image} alt={tour.title} />
            </div>
            <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-meta">
                    <div className="meta-item">
                        <FaClock className="meta-icon" /> {tour.duration}
                    </div>
                    <div className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" /> {tour.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
