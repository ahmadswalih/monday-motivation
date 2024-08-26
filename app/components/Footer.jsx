"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center  relative  inset-x-0 bottom-16  md:bottom-72  ">
      <a
        className="text-white  p-2 bg-gray-700 cursor-pointer  "
        target="_blank"
        rel="noopener noreferrer"
        href="https://ahmadswalih.com"
      >
        ©ahmadswalih.com
      </a>
      <a
        className="text-white  p-2 bg-gray-700 ml-10 "
        target="_blank"
        href="https://github.com/ahmadswalih/monday-motivation"
      >
        {" "}
        <p>contribute</p>
      </a>
    </div>
  );
};

export default Footer;
