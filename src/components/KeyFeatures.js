import React from 'react';

export default function KeyFeatures() {
  const features = [
    {
      icon: "📅",
      title: "Automated Scheduling",
      content:
        "Streamline breeding schedules and ensure vaccinations are administered on time.",
    },
    {
      icon:"📈",
      title: "Data Analytics",
      content:
        "Get detailed insights into farm operations, helping you make informed decisions.",
    },
    {
      icon:"📃",
      title: "Customizable Reports",
      content:
        "Generate reports tailored to your farm’s specific needs and track key metrics.",
    },
  ];

  return (
    <section className="section">
      <h2>Key Features</h2>
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
