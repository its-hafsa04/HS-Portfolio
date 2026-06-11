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
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialui,
  SiSocketdotio,
  SiRedis,
  SiStripe,
  SiFramer,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import mart from "../Assets/mulmart.png";
import ninja from "../Assets/ninjacode.png";
import lms from "../Assets/lms.png";
import mentolytics from "../Assets/mento.png";
import "./Projects.css";
import { Link } from "react-router-dom";
import { TbZodiacGemini } from "react-icons/tb";

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
              <SiHtml5 size={30} />
              <IoLogoJavascript size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiRedux size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
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
              <SiHtml5 size={30} />
              <SiTypescript size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
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

        {/* ----- Project 3 ----- */}
        <div className="project">
          <img src={lms} alt="LMS" />

          <h3 className="about_project">LMS</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiNextdotjs size={30} />
              <SiTypescript size={30} />
              <SiTailwindcss size={30} />
              <SiMongodb size={30} />
              <SiRedux size={30} />
              <SiExpress size={30} />
              <FaNodeJs size={30} />
              <SiStripe size={30} />
              <SiSocketdotio size={30} />
              <SiRedis size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://lms-79wk-git-main-hafsa-sajids-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/LMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/* ----- Project 4 ----- */}
        <div className="project">
          <img src={mentolytics} className="img" alt="Mentolytics" />

          <h3 className="about_project">Mentolytics</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <FaReact size={30} />
              <SiTypescript size={30} />
              <SiTailwindcss size={30} />
              <SiSocketdotio size={30} />
              <SiMongodb size={30} />
              <SiExpress size={30} />
              <FaNodeJs size={30} />
              <TbZodiacGemini size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://youtu.be/5wRDi78V60U?si=Ca02pXichwqALHQz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/Mentolytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Projects;
