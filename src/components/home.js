import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import bckImage from "../img/image1.png";
import wavingHand from "../img/wavinghand.png";
import download from "../img/download.png";
import abtImage from "../img/mew.png";
import port1 from "../img/port1.png";
import port2 from "../img/port2.png";
import port3 from "../img/port3.png";
import email from "../img/email.png";
import phone from "../img/phone-call.png";
import htmllogo from "../img/html.png";
import csslogo from "../img/text.png";
import reactlogo from "../img/react.png";
import figmalogo from "../img/figma.png";
import pin from "../img/pin.png";

const Home = () => {
  return (
    <div  className="HomeHead">
      <header id="HOME" className="header">
        <div className="logo">Cherrie.</div>
        <nav className="navbar">
          <ul>
            <li><a href="#HOME">Home</a></li>
            <li><a href="#ABOUT">About</a></li>
            <li><a href="#PORTFOLIO">Portfolio</a></li>
            <li><a href="#CONTACT">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section  className="Home">
        <div className="Home-Text">
          <h1>Hello I 'am <span>Cherrie</span><img src={wavingHand} className="waving-image" /> </h1>
          <p>An Aspiring <span className="mText">Web Developer</span></p>
          <h2>Welcome to My Portfolio</h2>

        </div>
        <img src={bckImage} className="content-image"/>
      </section>
      <section id = "ABOUT" className="About">
        <div className="container">
          <div className="container-one">
            <img src={abtImage} className="aboutimg"/>
          </div>
            <div className="aboutText">
             <h3>About me</h3>
              <p>Hi there! I am Cherrie Anne Paclibar, an aspiring Web
                 Developer and a 4th-year Information Technology student at Holy Cross 
                 of Davao College. I am a dedicated student with a passion for web design 
                 and development. Currently pursuing my Bachelor of Science in Information Technology (BSIT) 
                 at HCDC, I am eager to dive into the world of IT and make a meaningful 
                 impact through innovative and user-friendly web experiences.
              </p>
                <button className="resumebtn">
                  <img src={download} className="Downloadicon" />
                  <a href="/resume.pdf" download className="resume">Resume</a>
                </button>
            </div>
        </div>
      <div className="About-Skills">
      <h3>Skills</h3>
          <div className="skills">
          <img src={htmllogo}/>
          <img src={csslogo}/>
          <img src={reactlogo}/>
          <img src={figmalogo}/>
          </div>
      </div>
      </section>
      <section id="PORTFOLIO" className="portfolio">
      <h3>Projects</h3>
      <CapstoneGrid />
      </section>
      <footer>
      <section id="CONTACT" className="conpage">
      <h3>Contact me</h3>
      <div className="contacts">
      <p className="email"><img src={email} className="icon"/><a>cherrieanne.paclibar@hcdc.edu.ph</a></p>
      <p><img src={phone} className="icon"/>09610724699</p>
      <p><img src={pin} className="icon"/>Davao City, Philippines</p>
      </div>
      </section>
      </footer>
      <div className="footer-bottom">
    <p>&copy; 2024 Cherrie Anne Paclibar. All rights reserved.</p>
  </div>
    </div>
  );
};
const CapstoneGrid = () => {
  const capstoneProjects = [
    { img: port1, title: "CT Express", 
      desc: "A capstone project that is a mobile app for Calinan Terminal, which automates priority numbers, enables online payments, and tracks L300 vehicle locations for commuters." },
    { img: port2, title: "Course Recommendation System", 
      desc: "An AI-based course recommendation system that suggests personalized courses to students based on their interests, performance, and learning goals using machine learning algorithms." },
    { img: port3, title: "Rental Management System", 
      desc: "A rental management system that automates tenant tracking, rent payments, and record-keeping, ensuring efficiency, accuracy, and transparency for both tenants and management." },
  ];

  return (
    <div className="capstone-grid">
      {capstoneProjects.map((project, index) => (
          <motion.div
          key={index}
          className="capstone-card"
          initial={{ opacity: 0, x: -50 }}  
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.5, delay: index * 0.2 }} 
        >
          <img src={project.img} alt={project.title} className="capstone-image" />
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};


export default Home;
