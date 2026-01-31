import { useState } from 'react';
import TourCard from '../components/TourCard';
import { FaFilter, FaSearch } from 'react-icons/fa';
import '../styles/Tours.css';

// Import local images
import kashi from './kashi.jpg';
import tirupathi from './tirupathi.jpg';
import rameshwaram from './rameshwaram.jpg';
import arunachalam from './arunachalam.jpg';
import srisailam from './srisailam.jpg';

// Temple Tour Data
const allTours = [
    {
        id: 1,
        title: 'Kashi Temple Tour',
        location: 'Varanasi',
        duration: 'Flexible Time',
        price: 8999,
        category: 'Temples',
        image: kashi,
        description: 'Experience the spiritual journey of Kashi (Varanasi), one of the oldest living cities in the world.'
    },
    {
        id: 2,
        title: 'Spiritual Tirupati',
        location: 'Tirupati',
        duration: 'Flexible Time',
        price: 3499,
        category: 'Temples',
        image: tirupathi,
        description: 'A peaceful spiritual journey to the abode of Lord Venkateswara.'
    },
    {
        id: 3,
        title: 'Rameshwaram Pilgrimage',
        location: 'Rameshwaram',
        duration: 'Flexible Time',
        price: 6999,
        category: 'Temples',
        image: rameshwaram,
        description: 'Visit the sacred Ramanathaswamy Temple and the holy water bodies (Theerthams).'
    },
    {
        id: 4,
        title: 'Divine Arunachalam',
        location: 'Tiruvannamalai',
        duration: 'Flexible Time',
        price: 4499,
        category: 'Temples',
        image: arunachalam,
        description: 'Experience the divine energy of Arunachalesvara Temple and Girivalam.'
    },
    {
        id: 5,
        title: 'Srisailam Mallikarjuna',
        location: 'Srisailam',
        duration: 'Flexible Time',
        price: 5499,
        category: 'Temples',
        image: srisailam,
        description: 'Seek blessings at one of the 12 Jyotirlingas, Mallikarjuna Swamy Temple.'
    }
];

const Tours = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories
    const categories = ['All', ...new Set(allTours.map(tour => tour.category))];

    // Filtering Logic
    const filteredTours = allTours.filter(tour => {
        const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="tours-page container section">
            <div className="tours-header">
                <h1>Explore Our Packages</h1>
                <p>Find your next perfect destination from our wide range of curated tours.</p>
            </div>

            <div className="tours-content">
                {/* Mobile Filter Toggle */}
                <button className="btn btn-primary filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                    <FaFilter /> Filters
                </button>

                {/* Sidebar Filters */}
                <aside className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
                    <div className="filter-group">
                        <h3><FaSearch /> Search</h3>
                        <input
                            type="text"
                            placeholder="Search destination..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-group">
                        <h3>Category</h3>
                        <div className="category-options">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>



                    <button className="btn btn-ghost close-filters" onClick={() => setShowFilters(false)}>
                        Apply Filters
                    </button>
                </aside>

                {/* Tours Grid */}
                <main className="tours-list">
                    {filteredTours.length > 0 ? (
                        <div className="tours-grid-layout">
                            {filteredTours.map(tour => (
                                <TourCard key={tour.id} tour={{ ...tour, price: `₹${tour.price}` }} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No tours found matching your criteria.</h3>
                            <p>Try adjusting your search or filters.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                    setSelectedCategory('All');
                                }}
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Tours;
