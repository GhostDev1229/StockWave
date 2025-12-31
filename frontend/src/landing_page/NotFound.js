import React from "react";

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "80vh",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#387ed1" }}>
        404
      </h1>
      <h2 style={{ marginBottom: "15px" }}>Page Not Found</h2>
      <p style={{ maxWidth: "500px", lineHeight: "1.6" }}>
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <a
        href="/"
        style={{
          marginTop: "20px",
          textDecoration: "none",
          backgroundColor: "#387ed1",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2f6bbf")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#387ed1")}
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
