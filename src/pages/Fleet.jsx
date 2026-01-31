import { FaUsers, FaWifi, FaSnowflake, FaTv, FaBolt, FaSuitcase, FaMusic } from 'react-icons/fa';
import '../styles/Fleet.css';

// Import local images
import bus1 from './bus1.jpeg';
import bus2 from './bus2.jpeg';
import bus3 from './bus3.jpeg';
import bus4 from './bus4.jpeg';
import bus5 from './bus5.jpeg';
import bus6 from './bus6.jpeg';
import bus7 from './bus7.jpeg';

import car1 from './car1.jpeg';
import car2 from './car2.jpeg';
import car3 from './car3.jpeg';
import car4 from './car4.jpeg';
import car5 from './car5.jpeg';
import car6 from './car6.jpeg';

const fleetData = [
    // Buses - All same model as per user instruction
    {
        id: 'b1',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus1,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b2',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus2,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b3',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus3,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b4',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus4,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b5',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus5,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b6',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus6,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    {
        id: 'b7',
        name: 'Luxury Bus',
        type: 'Seater Coach',
        seats: 45,
        image: bus7,
        features: ['Dolby-dts Audio', 'Charging Points', 'Reclining Seats', 'TV'],
        description: 'Premium Seater Coach ensuring a smooth and comfortable journey for long-distance travel. Perfect for large groups.'
    },
    // Cars
    {
        id: 'c1',
        name: 'Swift Dezire Car',
        type: 'Sedan',
        seats: 6,
        image: car1,
        features: ['AC', 'Comfort Seating', 'Leather Seats', 'Music System', 'Trunk Space'],
        description: 'Ideal for small families and corporate travel. Offers a comfortable and quiet ride.'
    },
    {
        id: 'c2',
        name: 'Swift Dezire Car',
        type: 'Sedan',
        seats: 6,
        image: car2,
        features: ['AC', 'Leather Seats', 'Bluetooth', 'Ample Legroom', 'Music System'],
        description: 'Experience premium comfort with our well-maintained luxury fleet cars.'
    },
    {
        id: 'c3',
        name: 'Swift Dezire Car',
        type: 'Sedan',
        seats: 6,
        image: car3,
        features: ['AC', 'USB Charging', 'Music System', 'Clean Interiors', 'Leather Seats'],
        description: 'Reliable and economical choice for city commutes and airport transfers.'
    },
    {
        id: 'c4',
        name: 'Swift Dezire Car',
        type: 'Sedan',
        seats: 6,
        image: car4,
        features: ['AC', 'Comfort Seating', 'Leather Seats', 'Music System', 'Trunk Space'],
        description: 'Professional service for business travelers requiring punctuality and comfort.'
    },
    {
        id: 'c5',
        name: 'Swift Dezire Car',
        type: 'SUV',
        seats: 6,
        image: car5,
        features: ['AC', 'Reclining Seats', 'Roof Carrier', 'High Ground Clearance'],
        description: 'Spacious Sedan perfect for outstation trips and rough terrains. Travels with ease.'
    },
    {
        id: 'c6',
        name: 'Swift Dezire Car',
        type: 'Sedan',
        seats: 6,
        image: car6,
        features: ['AC', 'Compact', 'Easy Parking', 'Fuel Efficient'],
        description: 'Great for quick city hops and navigating traffic with ease.'
    }
];

const Fleet = () => {
    return (
        <div className="fleet-page section container">
            <div className="section-header">
                <h1>Our Premium Fleet</h1>
                <p>Choose from our wide range of well-maintained vehicles for a safe and comfortable journey.</p>
            </div>

            <div className="fleet-grid">
                {fleetData.map(vehicle => (
                    <div key={vehicle.id} className="vehicle-card">
                        <div className="vehicle-image">
                            <img src={vehicle.image} alt={vehicle.name} />
                            <span className="vehicle-type">{vehicle.type}</span>
                        </div>
                        <div className="vehicle-content">
                            <h3>{vehicle.name}</h3>
                            <p className="vehicle-desc">{vehicle.description}</p>

                            <div className="vehicle-specs">
                                <div className="spec-item">
                                    <FaUsers /> {vehicle.seats} Seater
                                </div>
                            </div>

                            <div className="vehicle-features">
                                <h4>Amenities:</h4>
                                <ul>
                                    {vehicle.features.map((feature, idx) => (
                                        <li key={idx}>
                                            {feature.includes('AC') && <FaSnowflake />}
                                            {feature.includes('WiFi') && <FaWifi />}
                                            {feature.includes('Charging') && <FaBolt />}
                                            {feature.includes('TV') && <FaTv />}
                                            {feature.includes('Music') && <FaMusic />}
                                            {feature.includes('Space') && <FaSuitcase />}
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="tel:+919581017373" className="btn btn-primary btn-block" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fleet;
