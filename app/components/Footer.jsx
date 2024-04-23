"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center   mt-20 z-50 justify-between">
      <a
        className="text-white cursor-pointer  "
        target="_blank"
        rel="noopener noreferrer"
        href="https://ahmadswalih.com"
      >
        ©ahmadswalih.com
      </a>
      <a
        className="text-white  ml-10 "
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
