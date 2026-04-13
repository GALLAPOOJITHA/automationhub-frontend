import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Experts() {
  const navigate = useNavigate();

  // 🔐 LOGIN CHECK
useEffect(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    navigate("/signup"); // directly go to signup
  }
}, [navigate]);

  const experts = [
    {
      name: "Rahul",
      skill: "Zapier + WhatsApp Automation",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Priya",
      skill: "Email + CRM Automation",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Arjun",
      skill: "Google Sheets + API Integration",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sneha",
      skill: "AI Chatbots + Workflow Automation",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Vikram",
      skill: "API Integration + Cloud Automation",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Our Experts</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {experts.map((exp, index) => (
          <div
            key={index}
            style={{
              width: "90%",
              maxWidth: "250px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <img
              src={exp.img}
              alt={exp.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />

            <h3>{exp.name}</h3>
            <p>{exp.skill}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#4F46E5",
                color: "white",
                cursor: "pointer",
              }}
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;