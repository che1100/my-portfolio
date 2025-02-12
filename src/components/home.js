import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import bckImage from "../img/image1.png";
import wavingHand from "../img/wavinghand.png";
import abtImage from "../img/me.png";
import port1 from "../img/port1.png";
import port2 from "../img/port2.png";
import email from "../img/email.png";
import phone from "../img/phone-call.png";
import htmllogo from "../img/html.png";
import csslogo from "../img/text.png";
import jslogo from "../img/javascrpt.png";
import reactlogo from "../img/react.png";
import figmalogo from "../img/figma.png";
import clogo from "../img/c.png";



const Home = () => {
  return (
    <div  className="HomeHead">
      <header id="HOME" className="header">
        <div className="logo">Cherrie</div>
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
        <img src={abtImage} className="aboutimg"/>
        <div className="aboutText">
        <h3 >About me</h3>
        <p>Hi there! My name is Cherrie Anne Paclibar, an aspiring Front-End 
          Developer and a 4th-year Information Technology student at Holy Cross 
          of Davao College. I am a dedicated student with a passion for web design 
          and development.</p>
        <p>Currently pursuing my Bachelor of Science in Information Technology (BSIT) 
          at HCDC, I am eager to dive into the world of IT and make a meaningful 
          impact through innovative and user-friendly web experiences..</p>
        </div>
        </div>
        <hr></hr>
        <h3 className="language">Skills</h3>
          <div className="skills">
          <img src={htmllogo}/>
          <img src={csslogo}/>
          <img src={jslogo}/>
          <img src={reactlogo}/>
          <img src={clogo}/>
          <img src={figmalogo}/>
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
      <p><img src={email} className="icon"/><a href="cherrieanne.paclibar@hcdc.edu.ph">cherrieanne.paclibar@hcdc.ed.ph</a></p>
      <p><img src={phone} className="icon"/>(123) 456-7890</p>
      </div>
      </section>
      </footer>
    </div>
  );
};
const CapstoneGrid = () => {
  const capstoneProjects = [
    { img: port1, title: "CT Express", 
      desc: "A mobile app for Calinan Terminal that automates priority numbers, enables online payments, and tracks L300 vehicle locations for commuters.." },
    { img: port2, title: "Course Recommendation System", 
      desc: "An AI-based course recommendation system suggests personalized courses to students based on their interests, performance, and learning goals using machine learning algorithms." },
    { img: port2, title: "Project 3", 
      desc: "A mobile-responsive portfolio website." },
    { img: port2, title: "Project 3", 
      desc: "A mobile-responsive portfolio website." },
    { img: port2, title: "Project 3", 
      desc: "A mobile-responsive portfolio website." },
    { img: port2, title: "Project 3", 
      desc: "A mobile-responsive portfolio website." },
  ];

  return (
    <div className="capstone-grid">
      {capstoneProjects.map((project, index) => (
          <motion.div
          key={index}
          className="capstone-card"
          initial={{ opacity: 0, x: -50 }}  // Start hidden, shifted left
          animate={{ opacity: 1, x: 0 }}  // Slide into position
          transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
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
