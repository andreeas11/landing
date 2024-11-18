import React from 'react';

export default function KeyFeatures() {
  const features = [
    {
      icon: "📅",
      title: "Advanced Search and Booking Options",
      content:
        "Effortlessly find the perfect service provider using filters like ratings, proximity, availability, and budget, and book instantly through the app.",
    },
    {
      icon:"✔",
      title: "Verified Reviews and Profiles",
      content:
        "Make confident decisions with transparent reviews and detailed, verified profiles of service providers.",
    },
    {
      icon:"🔎",
      title: "Customizable Profiles and Visibility Tools",
      content:
        "Create a professional profile showcasing your skills, services, and availability, and use priority listing options to increase visibility.",
    },
    {
      icon:"📅",
      title: "Booking and Schedule Management",
      content:
        "Easily manage appointments, track bookings, and streamline communication with clients through the app.",
    },
  ];

  return (
    <section className="section">
      <h2 style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}>Key Features</h2>
      <div className="grid">
        {features.map((prop, index) => (
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
