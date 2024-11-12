import React from 'react';

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: "📊",
      title: "Comprehensive Solution",
      content:
        "Full integration of critical metrics for production optimization, including detailed breeding history and vaccination records.",
    },
    {
      icon: "💉",
      title: "Specialized Features",
      content:
        "Support for rabbit farm management, automated breeding scheduling, and vaccination tracking.",
    },
    {
      icon: "💵",
      title: "Flexible Pricing",
      content:
        "Subscription plans based on farm size, making it accessible to small, medium, and large farms alike.",
    },
    {
      icon: "😊",
      title: "User-Friendly Interface",
      content:
        "Intuitive design that makes farm management easier, even for those new to digital tools.",
    },
  ];

  return (
    <section className="competitive-advantage">
      <div className="grid">
        {advantages.map((prop, index) => (
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
