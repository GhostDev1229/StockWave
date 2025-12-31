import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "transparent", // ✅ same background as page
        backdropFilter: "blur(10px)",
        padding: "10px 0",
      }}
    >
      <div className="container">
        {/* ✅ Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/logo.svg"
            alt="Zerodha Clone Logo"
            style={{ width: "130px", height: "auto" }}
          />
        </Link>

        {/* ✅ Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {[
              { name: "Signup", path: "/signup" },
              { name: "Login", path: "/login" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Pricing", path: "/pricing" },
              { name: "Support", path: "/support" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link px-3 ${
                    location.pathname === item.path ? "fw-bold text-primary" : "text-dark"
                  }`}
                  to={item.path}
                  style={{
                    fontSize: "16px",
                    transition: "0.3s",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
