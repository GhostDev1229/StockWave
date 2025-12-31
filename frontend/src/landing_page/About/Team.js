import React from "react";
import "./Team.css"; // 👈 Import CSS file

function Team() {
  return (
    <div className="container team-section">
      <h1 className="team-heading">Meet Our Founder</h1>

      <div className="row align-items-center">
        <div className="col-md-5 team-member text-center">
          <img
            src="media/PROFILE.jpeg.jpg"
            alt="Jinay Shah"
            className="rounded-circle shadow-lg"
            style={{ width: "70%", maxWidth: "250px" }}
          />
          <h4 className="mt-3 fw-bold gradient-text">Jinay Shah</h4>
          <h6 className="text-muted">Founder & Lead Developer</h6>
        </div>

        <div className="col-md-7 team-member">
          <p className="lead">
            Hi, I’m <strong className="gradient-text">Jinay Shah</strong> — a passionate developer and
            tech enthusiast who loves turning ideas into digital experiences that make an impact.
          </p>
          <p>
            Currently pursuing my degree in{" "}
            <strong>Electronics and Telecommunication Engineering</strong>,
            I’ve built multiple full-stack projects, blending creativity with clean, scalable code.
          </p>
          <p>
            From crafting sleek user interfaces to building powerful backend systems,
            my goal is to make technology intuitive and accessible for everyone.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring emerging tech trends,
            designing new project ideas, or mentoring peers on web development.
          </p>

          <p className="team-links">
            Connect with me on{" "}
            <a
              href="https://github.com/GhostDev1229"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://jinayshah-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
