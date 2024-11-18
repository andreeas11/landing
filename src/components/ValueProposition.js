import React from 'react';

export default function ValueProposition() {
  const propositions = [
    {
      icon: "🔢", 
      title: "Numbers",
      content:
        "Number of active users and number of bookings completed through the platform.",
    },
    {
      icon: "🔒",
      title: "Comprehensive Data Security",
      content:
        "Your data is securely stored, ensuring privacy and peace of mind while using our platform.",
    },
    {
      icon: "📈",
      title: "Metrics",
      content:
        "Average time to book a service along with the retention rate for both customer and provider segments.",
    },
    {
      icon: "😄",
      title: "Customer Satisfaction",
      content:
        "Customer satisfaction score based on reviews and feedback.",
    },
  ];

  return (
    <section className="value-proposition">
      <h2 style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>Our Value Proposition</h2>
      <p>We connect customers with reliable service providers, saving time and reducing the hassle of finding qualified professionals, while empowering providers to grow their client base and streamline their operations.</p>
      <div className="grid">
        {propositions.map((prop, index) => (
          <div key={index} className="value-card">
            <div className="icon">{prop.icon}</div>
            <div className="card-header">{prop.title}</div>
            <div className="card-content">{prop.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
