import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Product Section */}
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li ><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#support">Support</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
