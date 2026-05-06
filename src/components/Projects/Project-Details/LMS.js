import React, { useContext } from "react";
import "./LMSCaseStudy.css";
import LMS_Sys from "../../Assets/lmssys.png";
import LMS_DB from "../../Assets/lmsdb.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const LMSCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`lms-container ${themeName === "dark" ? "dark" : ""}`}>
      <a
        style={{ padding: "6px", display: "inline-block", border: "1px solid", textDecoration: "none", color: "inherit", marginBottom: "1rem" }}
        href="/"
      >
        Go Back
      </a>
      <h1 className="lms-title">LMS (Learning Management System) Case Study</h1>

      {/* Project Overview */}
      <section className="lms-section">
        <h2>Project Overview</h2>
        <p>
          <strong>LMS</strong> is a comprehensive Learning Management System built with a robust client-server architecture.
          It provides a seamless educational experience for both instructors and students, featuring real-time interactions,
          secure payment processing, and efficient data management. The application leverages Next.js for a high-performance
          frontend and Node.js with Express for a scalable backend.
        </p>
        <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/GEQ8Au_RdEE"
            title="LMS Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="lms-section">
        <h2>Tech Stack</h2>
        <div className="lms-features">
          <div className="lms-col">
            <h3>Frontend</h3>
            <ul className="lms-list">
              <li>Next.js, TypeScript</li>
              <li>Tailwind CSS, Material UI</li>
              <li>Redux Toolkit (State Management)</li>
              <li>NextAuth (Authentication)</li>
              <li>Framer Motion (Animations)</li>
              <li>Recharts (Data Visualization)</li>
              <li>Formik & Yup (Form Handling)</li>
              <li>Socket.io (Real-time updates)</li>
              <li>Stripe (Payments)</li>
            </ul>
          </div>
          <div className="lms-col">
            <h3>Backend</h3>
            <ul className="lms-list">
              <li>Node.js, Express, TypeScript</li>
              <li>MongoDB & Mongoose (Database)</li>
              <li>Redis (Caching & Rate Limiting)</li>
              <li>Cloudinary (Media Management)</li>
              <li>Stripe (Payment Gateway)</li>
              <li>Nodemailer (Email Service)</li>
              <li>JWT (Security)</li>
              <li>Socket.io (WebSockets)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features & Challenges */}
      <section className="lms-section">
        <div className="lms-features">
          <div className="lms-col">
            <h3>🛠️ Key Features</h3>
            <ul className="lms-list">
              <li>Comprehensive course management for instructors</li>
              <li>Interactive student dashboard with progress tracking</li>
              <li>Real-time chat and notifications via Socket.io</li>
              <li>Secure course enrollment and payments with Stripe</li>
              <li>Dynamic content delivery and responsive design</li>
              <li>Advanced filtering and search for courses</li>
            </ul>
          </div>
          <div className="lms-col">
            <h3>⚠️ Challenges & Solutions</h3>
            <ul className="lms-list">
              <li>
                🔄 <strong>Real-time Sync:</strong> Implemented Socket.io to ensure live updates across client and server.
              </li>
              <li>
                🚀 <strong>Performance:</strong> Utilized Redis for caching frequently accessed data and Next.js for optimized rendering.
              </li>
              <li>
                🔐 <strong>Secure Payments:</strong> Integrated Stripe with webhooks to handle asynchronous payment events reliably.
              </li>
              <li>
                📦 <strong>Media Handling:</strong> Used Cloudinary for efficient storage and transformation of educational assets.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="lms-section">
        <h2>System Architecture</h2>
        <p>
          The architecture follows a clear separation of concerns with a dedicated client and server.
          The Next.js frontend communicates with the Express backend via REST APIs and WebSockets.
        </p>
        <img
          src={LMS_Sys}
          alt="System Architecture Diagram"
          className="lms-img"
        />
      </section>

      {/* DB / Data Architecture */}
      <section className="lms-section">
        <h2>DB & Data Flow</h2>
        <p>
          The data model is structured in MongoDB using Mongoose, handling complex relationships between
          Users, Courses, Enrollments, and Payments.
        </p>
        <img
          src={LMS_DB}
          alt="Database Architecture Diagram"
          className="lms-img"
        />
      </section>

      {/* Future Roadmap */}
      <section className="lms-section">
        <h2>🔮 Future Roadmap</h2>
        <ul className="lms-list">
          <li>Mobile application development using React Native</li>
          <li>AI-powered course recommendations</li>
          <li>Gamification features (badges, leaderboards)</li>
          <li>Integrated video conferencing for live classes</li>
        </ul>
      </section>

      {/* Project Links */}
      <section className="lms-section">
        <h2>🔗 Project Links</h2>
        <ul className="lms-link-list">
          <li>
            <a
              href="https://github.com/its-hafsa04/LMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://lms-79wk-git-main-hafsa-sajids-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default LMSCaseStudy;
