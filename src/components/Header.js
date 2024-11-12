import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="#landing_page" className="logo">Agro Manager</a>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#signup" className="cta-button">Sign Up</a>
      
      {/* Hamburger icon for mobile */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="nav-links mobile">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
}
