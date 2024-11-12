import React from 'react';

export default function CustomerSegments() {
  const segments = [
    {
      icon: "🌱",
      title: "Small Farms",
      content:
        "Ideal for smaller operations that require basic but effective farm management tools.",
    },
    {
      icon: "🌳",
      title: "Medium Farms",
      content:
        "Tailored features to support growing farms with more complex needs.",
    },
    {
      icon: "🚜",
      title: "Large Farms",
      content:
        "Advanced functionality to streamline operations for large-scale farms.",
    },
    {
      icon: "🏭",
      title: "Commercial Enterprises",
      content:
        "Robust tools to help manage commercial farming enterprises effectively.",
    },
  ];

  return (
    <section className="section">
      <h2>Customer Segments</h2>
      <div className="grid">
        {segments.map((prop, index) => (
          <div key={index} className="value-card">
            <div className="icon">{prop.icon}</div>
            <div className="card-header">{prop.title}</div>
            <div className="card-content">{prop.content}</div>
          </div>
        ))}
        {/* {segments.map((segment, index) => (
          <div key={index} className="card">
            <div className="card-header">{segment.title}</div>
            <div className="card-content">{segment.content}</div>
          </div>
        ))} */}
      </div>
    </section>
  );
}
