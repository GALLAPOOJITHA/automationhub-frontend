import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🔥 Use one place for API
const API = "https://automationhub-backend.onrender.com/api";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanFirstName || !cleanLastName || !cleanEmail || !cleanPassword) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      alert("Enter a valid email");
      return;
    }

    try {
      // ✅ Correct API usage
      const res = await axios.post(`${API}/signup`, {
        firstName: cleanFirstName,
        lastName: cleanLastName,
        email: cleanEmail,
        password: cleanPassword,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Signup successful! Welcome email sent.");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        alert(err.response.data);
      } else {
        alert("Server error. Try again.");
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551434678-e076c223a692')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>

        <form autoComplete="off" onSubmit={signup}>
          <input style={{ display: "none" }} type="text" />
          <input style={{ display: "none" }} type="password" />

          <input
            style={inputStyle}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            style={inputStyle}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

// 🔹 Styles (unchanged)
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "#4F46E5",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default SignUp;