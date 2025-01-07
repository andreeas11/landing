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

  const redirectToApp = () => {
    window.location.href = "https://we.tl/t-6VEtIHF430";
  };

  return (
    <section className="hero">
      <h1 style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-45vw" }}>
        Welcome to Quick Fix
      </h1>
      <p style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-45vw" }}>
        Find Trusted Service Providers, Anytime, Anywhere
      </p>

      {/* Button Container */}
      <div style={{
        display: "flex",
        flexWrap: "wrap", // Allow wrapping on smaller screens
        gap: "1rem",
        marginLeft: "-45vw",
        justifyContent: "flex-start", // Align buttons properly
      }}>
        <button className="cta-button"
          onClick={() => setIsPopupOpen(true)} // Open popup on click
        >
          Get Started
        </button>
        <button className="cta-button"
          onClick={redirectToApp} // Redirect to the app link
        >
          Get App
        </button>
      </div>

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
