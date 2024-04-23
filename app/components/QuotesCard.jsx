"use client";
import { useEffect, useState } from "react";
import { IoCopyOutline, IoLogoInstagram, IoRefresh } from "react-icons/io5"; // Replace with your actual icon library
import quotes from "../data/quotes.json";

const MondayQuoteCard = () => {
  const [quote, setQuote] = useState("");
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

  // Function to fetch a random quote from the JSON data
  const generateNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex].quote;
    setQuote(newQuote);
  };
  useEffect(() => {
    generateNewQuote();
  }, []);
  return (
    <div className="bg-white mt-24 z-50 dark:bg-gray-800 max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="md:text-lg font-semibold text-gray-800 dark:text-white mb-4">
          <p>{quote}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={copyToClipboard}
          >
            <IoCopyOutline className="md:w-5 md:h-5" />
            <span>{copied ? "Copied!" : ""}</span>
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={shareOnInstagram}
          >
            <IoLogoInstagram className="md:w-5 md:h-5" />
          </button>
          <button
            className="text-gray-600  cursor-pointer hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            onClick={generateNewQuote}
          >
            <IoRefresh className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MondayQuoteCard;
