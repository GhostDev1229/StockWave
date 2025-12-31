import React from "react";

function OpenAccount() {
  return (
    <div
      className="container text-center py-5 my-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 className="mt-4 mb-3" style={{ color: "#333", fontWeight: "600" }}>
        Open a Zerodha Account
      </h1>
      <p
        className="mb-4"
        style={{ color: "#555", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}
      >
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>

      <button
        className="btn btn-primary fs-5"
        style={{
          padding: "12px 40px",
          borderRadius: "8px",
          fontWeight: "500",
          backgroundColor: "#387ed1",
          border: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2f6bbf")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#387ed1")}
      >
        Sign Up Now
      </button>
    </div>
  );
}

export default OpenAccount;
