import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/outline';

// Mock user data
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Digital art enthusiast and investor',
  walletAddress: '0x1234...5678',
  notifications: {
    email: true,
    push: true,
    marketing: false,
  },
};

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    bio: mockUser.bio,
    notifications: { ...mockUser.notifications },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <UserCircleIcon className="h-24 w-24 text-gray-400" />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn-secondary"
                    >
                      Change Photo
                    </button>
                    <p className="mt-2 text-sm text-gray-500">
                      JPG, GIF or PNG. Max size of 2MB.
                    </p>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 input-field"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 input-field"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="mt-1 input-field"
                  />
                </div>

                {/* Wallet Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Wallet Address
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="text"
                      value={mockUser.walletAddress}
                      disabled
                      className="input-field bg-gray-50"
                    />
                    <button
                      type="button"
                      className="ml-2 btn-secondary"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <div className="card">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="email"
                    id="email-notifications"
                    checked={formData.notifications.email}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="push"
                    id="push-notifications"
                    checked={formData.notifications.push}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="push-notifications" className="ml-3 text-sm text-gray-700">
                    Push Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="marketing"
                    id="marketing-notifications"
                    checked={formData.notifications.marketing}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="marketing-notifications" className="ml-3 text-sm text-gray-700">
                    Marketing Emails
                  </label>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="mt-6 card">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Account Actions</h2>
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full btn-secondary text-red-600 hover:bg-red-50"
                >
                  Delete Account
                </button>
                <button
                  type="button"
                  className="w-full btn-secondary"
                >
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettings; 