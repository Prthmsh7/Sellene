import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, DollarSign, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Mock data for demonstration
const mockPortfolio = {
  totalValue: '12.5 ETH',
  totalReturn: '+15.2%',
  isPositive: true,
  holdings: [
    {
      id: 1,
      title: 'Digital Art Collection #1',
      value: '5.2 ETH',
      return: '+8.5%',
      isPositive: true,
      image: 'https://picsum.photos/100/100',
    },
    {
      id: 2,
      title: 'Music Album Rights',
      value: '3.8 ETH',
      return: '-2.1%',
      isPositive: false,
      image: 'https://picsum.photos/100/101',
    },
    {
      id: 3,
      title: 'Patent Portfolio',
      value: '3.5 ETH',
      return: '+12.3%',
      isPositive: true,
      image: 'https://picsum.photos/100/102',
    },
  ],
  recentTransactions: [
    {
      id: 1,
      type: 'Purchase',
      asset: 'Digital Art Collection #1',
      amount: '2.5 ETH',
      date: '2024-02-20',
    },
    {
      id: 2,
      type: 'Sale',
      asset: 'Music Album Rights',
      amount: '1.8 ETH',
      date: '2024-02-19',
    },
    {
      id: 3,
      type: 'Royalty',
      asset: 'Patent Portfolio',
      amount: '0.3 ETH',
      date: '2024-02-18',
    },
  ],
};

const InvestorDashboard = () => {
  const [timeRange, setTimeRange] = useState('1M');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Track your investments and performance</p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Portfolio Value</h3>
            <DollarSign className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {mockPortfolio.totalValue}
          </div>
          <div
            className={`flex items-center text-sm ${
              mockPortfolio.isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {mockPortfolio.isPositive ? (
              <ArrowUpRight className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownRight className="w-4 h-4 mr-1" />
            )}
            {mockPortfolio.totalReturn}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Active Holdings</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {mockPortfolio.holdings.length}
          </div>
          <div className="text-sm text-gray-600">Unique assets</div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Pending Royalties</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">0.8 ETH</div>
          <div className="text-sm text-gray-600">Next payout in 3 days</div>
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Your Holdings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockPortfolio.holdings.map((holding) => (
            <div key={holding.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={holding.image}
                    alt={holding.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {holding.title}
                    </h3>
                    <p className="text-sm text-gray-600">Current Value: {holding.value}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex items-center text-sm ${
                      holding.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {holding.isPositive ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {holding.return}
                  </div>
                  <Link
                    to={`/listing/${holding.id}`}
                    className="btn-secondary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Transactions
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockPortfolio.recentTransactions.map((transaction) => (
            <div key={transaction.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {transaction.type}
                  </h3>
                  <p className="text-sm text-gray-600">{transaction.asset}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-gray-900">
                    {transaction.amount}
                  </div>
                  <div className="text-sm text-gray-600">{transaction.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard; 