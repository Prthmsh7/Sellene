import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Clock, Users, TrendingUp, Info } from 'lucide-react';

// Mock data for demonstration
const mockListing = {
  id: 1,
  title: 'Digital Art Collection #1',
  creator: 'Artist Name',
  price: '0.5 ETH',
  image: 'https://picsum.photos/800/600',
  category: 'Art',
  description: 'A unique collection of digital art pieces exploring the intersection of technology and creativity. Each piece is carefully crafted using advanced algorithms and artistic vision.',
  totalTokens: 1000,
  tokensSold: 450,
  royalty: 5,
  likes: 234,
  timeLeft: '2d 5h',
  history: [
    { date: '2024-02-20', price: '0.5 ETH', type: 'Listed' },
    { date: '2024-02-19', price: '0.45 ETH', type: 'Price Update' },
    { date: '2024-02-18', price: '0.4 ETH', type: 'Initial Mint' },
  ],
};

const ListingDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= mockListing.totalTokens - mockListing.tokensSold) {
      setQuantity(value);
    }
  };

  const handlePurchase = () => {
    // TODO: Implement purchase logic
    console.log('Purchasing', quantity, 'tokens');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image and Actions */}
        <div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <img
              src={mockListing.image}
              alt={mockListing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isLiked
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{mockListing.likes}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 bg-gray-50 hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Right Column - Details and Purchase */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {mockListing.title}
            </h1>
            <p className="text-lg text-gray-600">by {mockListing.creator}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Current Price</div>
              <div className="text-2xl font-bold text-blue-600">
                {mockListing.price}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Time Left</div>
              <div className="text-2xl font-bold text-gray-900">
                {mockListing.timeLeft}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-gray-600">{mockListing.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tokens Available</span>
              <span className="font-medium">
                {mockListing.tokensSold} / {mockListing.totalTokens}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${(mockListing.tokensSold / mockListing.totalTokens) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Info className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                Royalty: {mockListing.royalty}%
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                {mockListing.totalTokens - mockListing.tokensSold} tokens remaining
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                max={mockListing.totalTokens - mockListing.tokensSold}
                value={quantity}
                onChange={handleQuantityChange}
                className="input-field w-24"
              />
              <button
                onClick={handlePurchase}
                className="flex-1 btn-primary"
              >
                Purchase Tokens
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Total: {(parseFloat(mockListing.price) * quantity).toFixed(2)} ETH
            </p>
          </div>
        </div>
      </div>

      {/* Price History */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Price History</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockListing.history.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails; 