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
      <h1 style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-50vw" }}>
        Welcome to Quick Fix
      </h1>
      <p style={{ color: "#ffffff", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-50vw" }}>
      Find Trusted Service Providers, Anytime, Anywhere
      </p>
      <button className="cta-button" style={{ marginLeft: "-50vw"}}>Get Started</button>
      <IoIosArrowDown 
        className="arrow"
        onClick={scrollDown} // Add onClick event to trigger scroll
      />
    </section>
  );
}
