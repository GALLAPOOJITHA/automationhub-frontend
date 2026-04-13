import React from "react";

function Dashboard() {
  // ✅ SAFE PARSE FIX
  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.log("Invalid user data");
  }

  // ✅ FIX: If no user, redirect to signin
  if (!user) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>User not logged in ❌</h2>
        <p>Please sign in first</p>
        <a href="/signin">Go to Sign In</a>
      </div>
    );
  }

  // 🔴 LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      {/* TOP BAR */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "white" }}>Dashboard</h2>

        <button
          onClick={logout}
          style={{
            padding: "8px 15px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* USER INFO */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3>Welcome, {user.firstName} 👋</h3>
        <p>Email: {user.email}</p>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>My Requests</h3>
          <p>2 Requests</p>
        </div>

        <div style={cardStyle}>
          <h3>Messages</h3>
          <p>1 New Message</p>
        </div>

        <div style={cardStyle}>
          <h3>Profile</h3>
          <p>Edit your details</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: "1",
  minWidth: "250px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

export default Dashboard;