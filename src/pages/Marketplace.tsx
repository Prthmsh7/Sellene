import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star } from 'lucide-react';

// Mock data for demonstration
const mockListings = [
  {
    id: 1,
    title: 'Digital Art Collection #1',
    creator: 'Artist Name',
    price: '0.5 ETH',
    image: 'https://picsum.photos/400/300',
    category: 'Art',
    likes: 234,
    timeLeft: '2d 5h',
  },
  {
    id: 2,
    title: 'Original Music Track',
    creator: 'Musician Name',
    price: '1.2 ETH',
    image: 'https://picsum.photos/400/301',
    category: 'Music',
    likes: 156,
    timeLeft: '1d 8h',
  },
  // Add more mock listings as needed
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'art', name: 'Art' },
    { id: 'music', name: 'Music' },
    { id: 'video', name: 'Video' },
    { id: 'document', name: 'Document' },
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'newest', name: 'Newest', icon: <Clock className="w-4 h-4" /> },
    { id: 'popular', name: 'Most Popular', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Marketplace</h1>
        <p className="text-lg text-gray-600">
          Discover and invest in unique creative works
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search creative works..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockListings.map((listing) => (
          <Link
            key={listing.id}
            to={`/listing/${listing.id}`}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-[300px]">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">by {listing.creator}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {listing.price}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{listing.likes} likes</span>
                    <span>•</span>
                    <span>{listing.timeLeft}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="btn-secondary">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Marketplace; 