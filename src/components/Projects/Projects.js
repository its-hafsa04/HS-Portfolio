import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import mart from "../Assets/mulmart.png";
import ninja from "../Assets/ninjacode.png";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      <div className="projects__grid">
        {/* ----- Project 1 ----- */}
        <div className="project">
          <img src={mart} alt="MulMart" />

          <h3 className="about_project">MulMart</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={50} />
              <SiRedux size={40} />
              <SiExpress size={40} />
              <SiMongodb size={40} />
              <FaNodeJs size={40} />
              <SiVercel size={40} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://multivendor-e-shop-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/MulMart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/* ----- Project 2 ----- */}
        <div className="project">
          <img src={ninja} alt="NinjaCode" />

          <h3 className="about_project">NinjaCode</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <SiTypescript size={40} />
              <SiCss3 size={40} />
              <FaReact size={50} />
              <SiExpress size={40} />
              <SiMongodb size={40} />
              <FaNodeJs size={40} />
              <SiVercel size={40} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://ninja-code.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <a href="/Project-Details/NinjaCode" target="_blank">
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
