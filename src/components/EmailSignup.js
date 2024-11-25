import React, { useState } from 'react';
import posthog from 'posthog-js';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    posthog.capture('Subscribe', { property: 'value' })
  };

  return (
    <section className="email-signup">
      <h2 style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>Sign up for Updates</h2>
      <p style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>Subscribe to receive the latest news and updates directly in your inbox.</p>

      {isSubmitted ? (
        <p className="text-white font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}
