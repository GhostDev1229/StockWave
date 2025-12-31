import React from "react";

function Hero() {
  return (
    <section className="hero-section container text-center my-5 py-5">
      <div className="row justify-content-center align-items-center">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="media/homeHero.png"
            alt="Hero"
            className="img-fluid"
            style={{
              maxWidth: "600px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12">
          <h1 className="fw-semibold mb-3" style={{ fontSize: "2.5rem" }}>
            Invest in everything
          </h1>
          <p className="text-muted mb-4 fs-5">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <a
            href="/signup"
            className="btn btn-primary btn-lg px-5 py-2 fs-5"
            style={{
              backgroundColor: "#387ed1",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Sign up now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
