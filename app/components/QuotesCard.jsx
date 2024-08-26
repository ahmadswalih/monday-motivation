"use client";
import { useEffect, useState } from "react";
import { IoCopyOutline, IoLogoInstagram, IoRefresh } from "react-icons/io5"; // Replace with your actual icon library
import quotes from "../data/quotes.json";

const MondayQuoteCard = () => {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
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
    const newQuote = quotes[randomIndex];
    setQuote(newQuote);
    console.log(quote);
  };
  useEffect(() => {
    generateNewQuote();
  }, []);
  return (
    <div className="bg-white md:mt-20 mt-10  w-[95%] md:w-[28rem]      mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="md:text-lg font-semibold text-gray-800  mb-4">
          <p>{quote.quote}</p>
          <p className="text-md font-light mt-2"> --{quote.author}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800  focus:outline-none"
            onClick={copyToClipboard}
          >
            <IoCopyOutline className="md:w-5 md:h-5" />
            <span>{copied ? "Copied!" : ""}</span>
          </button>
          <button
            className="text-gray-600 hover:text-gray-800  focus:outline-none"
            onClick={shareOnInstagram}
          >
            <IoLogoInstagram className="md:w-5 md:h-5" />
          </button>
          <button
            className="text-gray-600  cursor-pointer hover:text-gray-800  focus:outline-none"
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
