"use client";
import { useState } from "react";
import { IoCopyOutline, IoLogoInstagram, IoRefresh } from "react-icons/io5"; // Replace with your actual icon library

const MondayQuoteCard = ({ quote }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset copied state after 2 seconds
  };

  const shareOnInstagram = () => {
    // Implement your share functionality here
  };

  const generateNewQuote = () => {
    // Implement your new quote generation logic here
  };

  return (
    <div className="bg-white mt-24 dark:bg-gray-800 max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          <p>
            Code your dreams into reality, one line at a time. Let's crush it
            this week!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={copyToClipboard}
          >
            <IoCopyOutline className="w-5 h-5" />
            <span>{copied ? "Copied!" : ""}</span>
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={shareOnInstagram}
          >
            <IoLogoInstagram className="w-5 h-5" />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={generateNewQuote}
          >
            <IoRefresh className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MondayQuoteCard;
