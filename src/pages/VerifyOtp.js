import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API = "https://automationhub-backend.onrender.com/api";

function VerifyOtp() {
  const location = useLocation();
const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState("");

  const verify = async () => {
    if (!email || !otp) {
      alert("Enter email and OTP");
      return;
    }

    try {
      const res = await axios.post(`${API}/verify-otp`, {
        email,
        otp,
      });

      alert("Verified successfully. Please login.");
window.location.href = "/signin";// go to login after success
    } catch (err) {
      alert(err.response?.data || "Error verifying OTP");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Verify OTP</h2>

      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <br />
      <br />

      <button onClick={verify}>Verify</button>
    </div>
  );
}

export default VerifyOtp;
