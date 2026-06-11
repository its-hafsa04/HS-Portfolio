import React, { useContext } from "react";
import "./MentalyticseCaseStudy.css";
import Mento_Sys from "../../Assets/mentosys.png";
import Mento_DB from "../../Assets/mentodb.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const MentalyticseCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`mentolytics-container ${themeName === "dark" ? "dark" : ""}`}>
      <a
        style={{ padding: "6px", display: "inline-block", border: "1px solid", textDecoration: "none", color: "inherit", marginBottom: "1rem" }}
        href="/"
      >
        Go Back
      </a>
      <h1 className="mentolytics-title">Mentolytics: AI-Driven Mental Health & Performance Support</h1>

      {/* Project Overview */}
      <section className="mentolytics-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Mentolytics</strong> is an innovative cross-platform mobile application that bridges emotional intelligence 
          with academic growth. It's an AI-powered ecosystem designed for students, mentors, and educational institutions 
          to collaboratively support mental wellbeing and academic performance. By combining real-time mentorship, mood tracking, 
          and intelligent AI insights, Mentolytics creates a holistic environment where emotional health and academic success 
          go hand-in-hand.
        </p>
        <p>
          The platform empowers users across three roles: <strong>Students</strong> can track their emotional well-being and 
          collaborate with mentors, <strong>Mentors</strong> can manage and support multiple students with task assignments and 
          progress tracking, and <strong>Institutions</strong> can oversee department-level analytics and wellness trends.
        </p>
        <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/5wRDi78V60U?si=Ca02pXichwqALHQz"
            title="Mentolytics Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mentolytics-section">
        <h2>Tech Stack</h2>
        <div className="mentolytics-features">
          <div className="mentolytics-col">
            <h3>Frontend (Mobile & Web)</h3>
            <ul className="mentolytics-list">
              <li>Expo (React Native + Web)</li>
              <li>Expo Router (File-based routing)</li>
              <li>NativeWind (Tailwind CSS)</li>
              <li>Reanimated & Gesture Handler</li>
              <li>Socket.io-client (Real-time)</li>
              <li>React Context (State Management)</li>
            </ul>
          </div>
          <div className="mentolytics-col">
            <h3>Backend</h3>
            <ul className="mentolytics-list">
              <li>Node.js + Express (ESM)</li>
              <li>MongoDB & Mongoose</li>
              <li>Socket.io (WebSockets)</li>
              <li>Google Gemini AI (LLM)</li>
              <li>Nodemailer (Email Service)</li>
              <li>Node-cron (Task Scheduling)</li>
              <li>JWT (Authentication)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features & Challenges */}
      <section className="mentolytics-section">
        <div className="mentolytics-features">
          <div className="mentolytics-col">
            <h3>✨ Key Features</h3>
            <ul className="mentolytics-list">
              <li>AI-powered emotional insights using Google Gemini</li>
              <li>Daily mood logging & emotional history tracking</li>
              <li>Real-time mentor–mentee chat with Socket.io</li>
              <li>Task & productivity management system</li>
              <li>Role-based access control (Student/Mentor/Institution)</li>
              <li>Institution Dashboard with department-wise analytics</li>
              <li>Smart notifications & automated email alerts</li>
              <li>Automated task scheduling with Node-cron</li>
            </ul>
          </div>
          <div className="mentolytics-col">
            <h3>⚠️ Challenges & Solutions</h3>
            <ul className="mentolytics-list">
              <li>
                🧠 <strong>AI Integration:</strong> Implemented Google Gemini for intelligent emotional analysis and personalized recommendations.
              </li>
              <li>
                💬 <strong>Real-time Communication:</strong> Used Socket.io to enable instant mentor–mentee messaging and live updates.
              </li>
              <li>
                📱 <strong>Cross-platform Consistency:</strong> Leveraged Expo and NativeWind to maintain consistent UI across mobile and web.
              </li>
              <li>
                📊 <strong>Data Privacy:</strong> Implemented role-based access control and secure JWT authentication for sensitive health data.
              </li>
              <li>
                ⏰ <strong>Automated Workflows:</strong> Used Node-cron for scheduled task reminders and Nodemailer for email notifications.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Functionalities */}
      <section className="mentolytics-section">
        <h2>🎯 Core Functionalities</h2>
        <div className="mentolytics-features">
          <div className="mentolytics-col">
            <h3>👨‍🎓 Student Features</h3>
            <ul className="mentolytics-list">
              <li>Daily mood logging with emotional history</li>
              <li>AI-generated emotional insights & recommendations</li>
              <li>Study activity and productivity tracking</li>
              <li>Real-time messaging with assigned mentor</li>
              <li>Task management and deadline tracking</li>
            </ul>
          </div>
          <div className="mentolytics-col">
            <h3>👨‍🏫 Mentor Features</h3>
            <ul className="mentolytics-list">
              <li>Manage multiple student relationships</li>
              <li>Assign and track student tasks</li>
              <li>Monitor student emotional trends</li>
              <li>Real-time 1-on-1 messaging</li>
              <li>Progress evaluation & feedback loops</li>
            </ul>
          </div>
          <div className="mentolytics-col">
            <h3>🏫 Institution Features</h3>
            <ul className="mentolytics-list">
              <li>Department-wise analytics</li>
              <li>High-level wellbeing trends</li>
              <li>Risk indicators & alerts</li>
              <li>Approval workflows for new users</li>
              <li>Bulk management of mentors & students</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mentolytics-section">
        <h2>🏗️ System Architecture</h2>
        <p>
          Mentolytics follows a modern microservices-inspired architecture with a clear separation between frontend and backend:
        </p>
        <img
          src={Mento_Sys}
          alt="System Architecture Diagram"
          className="mentolytics-img"
        />
      </section>

      {/* DB / Data Architecture */}
      <section className="mentolytics-section">
        <h2>🗄️ Database & Data Model</h2>
        <p>
          The data model is structured in MongoDB using Mongoose, handling complex relationships between
          Users (Students, Mentors, Institutions), Courses, Enrollments, Mood Logs, and Task Management systems.
        </p>
        <img
          src={Mento_DB}
          alt="Database Architecture Diagram"
          className="mentolytics-img"
        />
      </section>

      {/* How It Works */}
      <section className="mentolytics-section">
        <h2>🔄 How It Works</h2>
        <ol className="mentolytics-list">
          <li><strong>Registration:</strong> Users sign up with their role; institutions approve new student and mentor accounts</li>
          <li><strong>Matching:</strong> AI-powered suggestions automatically match students with suitable mentors</li>
          <li><strong>Daily Engagement:</strong> Students log daily moods and track study activities in real-time</li>
          <li><strong>Mentorship:</strong> Mentors assign tasks, provide feedback, and monitor student progress via live charts</li>
          <li><strong>AI Analysis:</strong> System analyzes emotional trends to identify at-risk students and provide recommendations</li>
          <li><strong>Institution Insights:</strong> Institutions access dashboards for department-level wellbeing metrics</li>
        </ol>
      </section>

      {/* Future Roadmap */}
      <section className="mentolytics-section">
        <h2>🔮 Future Roadmap</h2>
        <ul className="mentolytics-list">
          <li>Interactive data visualization dashboards for institutions</li>
          <li>Professional therapist portal integration for clinical support</li>
          <li>Predictive mental health scoring models using ML</li>
          <li>Integrated payment gateway for premium institutional features</li>
          <li>Voice-enabled AI companion for accessibility</li>
          <li>Wearable integration for biometric health tracking</li>
          <li>Multi-language support for global reach</li>
        </ul>
      </section>

      {/* Project Links */}
      <section className="mentolytics-section">
        <h2>🔗 Project Links</h2>
        <ul className="mentolytics-link-list">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository comming soon...
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
             Live demo coming soon...
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default MentalyticseCaseStudy;
