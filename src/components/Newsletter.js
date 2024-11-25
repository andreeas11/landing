import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import posthog from 'posthog-js';

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "newsletter"), {
        name: name,
        email: email,
      });

      posthog.identify(name, {name: name});
      posthog.capture('newsletter subscribe', { property: 'value' })

      setStatus("Thank you for subscribing!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding subscription to newsletter: ", error);
      setStatus("Failed to submit. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          Subscribe
        </button>
      </form>
      {status && <p style={{ marginTop: "10px", color: "#007bff" }}>{status}</p>}
    </div>
  );
};

export default Newsletter;
