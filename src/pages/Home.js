import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "500px",
          textAlign: "center",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
        }}
      >
        <h1>AutomationHub 🚀</h1>
        <p>Find trusted automation experts for your business</p>
        <p style={{ fontStyle: "italic" }}>
          “Automate smarter, grow faster.”
        </p>
      </div>
    </div>
  );
}

export default Home;