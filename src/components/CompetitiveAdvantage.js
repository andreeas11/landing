import React from 'react';

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: "📊",
      title: "Comprehensive Service Categories",
      content:
        "Offers a wide range of services in one platform, from technical repairs to personal household services.",
    },
    {
      icon: "📅",
      title: "Advanced Booking and Filtering Options",
      content:
        "Enables users to find providers by rating, proximity, availability, and price.",
    },
    {
      icon: "💵",
      title: "Affordable and Scalable Plans",
      content:
        "Accessible to independent professionals and small businesses, with options for premium features.",
    },
    {
      icon: "😊",
      title: "User-Friendly Interface",
      content:
        "Intuitive design that makes connecting customers with service providers easier, even for those new to digital tools.",
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
