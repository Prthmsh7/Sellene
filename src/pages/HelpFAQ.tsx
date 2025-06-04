import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is Articuno?',
    answer: 'Articuno is a decentralized marketplace that allows creators to tokenize their creative works and investors to buy fractional ownership. Our platform supports various types of creative works including art, music, and patents.',
  },
  {
    question: 'How do I get started as a creator?',
    answer: 'To get started as a creator, simply connect your wallet, navigate to the Creator Studio, and follow the steps to upload and tokenize your work. You can set your own price, number of tokens, and royalty structure.',
  },
  {
    question: 'How do I invest in creative works?',
    answer: 'Browse the marketplace to find creative works you\'re interested in. Once you\'ve found something you like, connect your wallet and purchase tokens to own a share of the work. You\'ll receive royalties based on your ownership percentage.',
  },
  {
    question: 'What are the fees?',
    answer: 'We charge a small platform fee of 2.5% on all transactions. Additionally, there are gas fees associated with blockchain transactions. These fees are clearly displayed before you complete any transaction.',
  },
  {
    question: 'How do royalties work?',
    answer: 'When a creator sets up their work on Articuno, they can specify a royalty percentage. This percentage is automatically distributed to token holders whenever the work generates revenue. Royalties are paid out in ETH.',
  },
  {
    question: 'Is my investment secure?',
    answer: 'Yes, all transactions and ownership records are secured by blockchain technology. Smart contracts ensure that your ownership rights and royalties are automatically enforced.',
  },
];

const guides = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of using Articuno as a creator or investor.',
    link: '#',
  },
  {
    title: 'Tokenization Process',
    description: 'Step-by-step guide to tokenizing your creative work.',
    link: '#',
  },
  {
    title: 'Investment Strategies',
    description: 'Tips and strategies for investing in creative works.',
    link: '#',
  },
  {
    title: 'Security Best Practices',
    description: 'How to keep your account and investments secure.',
    link: '#',
  },
];

const HelpFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Help & FAQ</h1>

        {/* Search */}
        <div className="mb-8">
          <div className="max-w-xl">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <input
                type="text"
                name="search"
                id="search"
                className="input-field pl-10"
                placeholder="Search for help topics..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guides */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow"
              >
                <a href={guide.link} className="block">
                  <h3 className="text-lg font-medium text-gray-900">{guide.title}</h3>
                  <p className="mt-2 text-gray-600">{guide.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HelpFAQ; 