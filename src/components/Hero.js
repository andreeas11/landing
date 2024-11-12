import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Hero() {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by one full viewport height
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <section className="hero">
      <h1 style={{ color: "#f5f5f5", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>
        Welcome to Agro Manager
      </h1>
      <p style={{ color: "#f5f5f5", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>
        Simplifying farm management with cutting-edge technology. Get insights, track progress, and optimize operations for a thriving business.
      </p>
      <button className="cta-button">Get Started</button>
      <IoIosArrowDown 
        className="arrow"
        onClick={scrollDown} // Add onClick event to trigger scroll
      />
    </section>
  );
}
