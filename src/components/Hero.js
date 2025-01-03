import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import NewsletterPopup from "./Newsletter"; // Import your popup component

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by one full viewport height
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <section className="hero">
      <h1 style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-45vw" }}>
        Welcome to Quick Fix
      </h1>
      <p style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-45vw" }}>
      Find Trusted Service Providers, Anytime, Anywhere
      </p>
      {/* <button className="cta-button" style={{ marginLeft: "-45vw"}}>Get Started</button> */}
      
      <button className="cta-button" style={{ marginLeft: "-45vw"}}
        onClick={() => setIsPopupOpen(true)} // Open popup on click
      >
        Get Started
      </button>
      <NewsletterPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
      <IoIosArrowDown 
        className="arrow"
        onClick={scrollDown} // Add onClick event to trigger scroll
      />
    </section>
  );
};
