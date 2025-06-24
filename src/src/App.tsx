import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <section style={{
        backgroundColor: "#004085",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to Kwakhanya Drivers Training
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Book your driving lessons quickly and easily online.
        </p>
        <button style={{
          backgroundColor: "#ffc107",
          color: "#004085",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          cursor: "pointer",
          borderRadius: "0.5rem"
        }}>
          Book Now
        </button>
      </section>
    </div>
  );
}

export default App;
