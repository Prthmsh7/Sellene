import React, { useState } from 'react';
import { Upload, Image, Music, FileText, Settings } from 'lucide-react';

const CreatorStudio = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    royalty: '',
    totalTokens: '',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement minting logic
    console.log('Form submitted:', { ...formData, file: selectedFile });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Creator Studio</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* File Upload Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Your Creative Work
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                {preview ? (
                  <div className="mb-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto h-32 w-32 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*,audio/*,video/*,.pdf"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF, MP3, MP4, PDF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 input-field"
                required
              >
                <option value="">Select a category</option>
                <option value="art">Art</option>
                <option value="music">Music</option>
                <option value="video">Video</option>
                <option value="document">Document</option>
              </select>
            </div>
          </div>

          {/* Tokenization Settings */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Tokenization Settings</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price per Token (ETH)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="mt-1 input-field"
                  required
                  min="0"
                  step="0.001"
                />
              </div>

              <div>
                <label htmlFor="totalTokens" className="block text-sm font-medium text-gray-700">
                  Total Tokens
                </label>
                <input
                  type="number"
                  name="totalTokens"
                  id="totalTokens"
                  value={formData.totalTokens}
                  onChange={handleInputChange}
                  className="mt-1 input-field"
                  required
                  min="1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="royalty" className="block text-sm font-medium text-gray-700">
                Royalty Percentage
              </label>
              <input
                type="number"
                name="royalty"
                id="royalty"
                value={formData.royalty}
                onChange={handleInputChange}
                className="mt-1 input-field"
                required
                min="0"
                max="100"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn-primary"
            >
              Mint NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatorStudio; 