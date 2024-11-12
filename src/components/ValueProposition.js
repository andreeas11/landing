import React from 'react';

export default function ValueProposition() {
  const propositions = [
    {
      icon: "🌱", // Use icons or replace with actual images/icons if preferred
      title: "Increased Productivity",
      content:
        "Optimize your farm operations with data-driven insights, leading to higher yields and profitability.",
    },
    {
      icon: "🔒",
      title: "Data Security",
      content:
        "Your data is securely stored, ensuring privacy and peace of mind while using our platform.",
    },
    {
      icon: "⚙️",
      title: "Customizable Tools",
      content:
        "Flexible tools that adapt to the unique needs of your farm, enhancing usability and functionality.",
    },
    {
      icon: "📈",
      title: "Growth Potential",
      content:
        "Scalable features that grow with your farm, supporting you every step of the way.",
    },
  ];

  return (
    <section className="value-proposition">
      <h2>Our Value Proposition</h2>
      <p>Discover the unique benefits of our platform that make it the right choice for your farm's success.</p>
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
