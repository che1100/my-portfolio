import React from "react";
import "./home.css";
import { interpolate, motion } from "framer-motion";
import bckImage from "../img/image1.png";
import wavingHand from "../img/wavinghand.png";
import download from "../img/download.png";
import abtImage from "../img/mw.png";
import port1 from "../img/port1.png";
import port2 from "../img/port2.png";
import port3 from "../img/port3.png";
import email from "../img/email.png";
import phone from "../img/phone-call.png";
import pin from "../img/pin.png";
import fb from "../img/fb.png";
import ig from "../img/instagram.png";
import git from "../img/github.png";
import logo from "../img/Clogo.png";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiFigma } from "react-icons/si";


const Home = () => {
  return (
    <div  className="HomeHead">
      <header className="header">
      <div className="nav-container">
    <div className="logo">
      <img src={logo} className="LOGO" alt="Cherrie Logo" />
    </div>
    <nav className="navbar">
      <ul>
        <li><a href="#HOME">Home</a></li>
        <li><a href="#ABOUT">About</a></li>
        <li><a href="#PORTFOLIO">Portfolio</a></li>
        <li><a href="#CONTACT">Contact</a></li>
        <button className="resumebtn">
            <a href="/resume.pdf" download className="resume">
               <i className="fa fa-download"></i> Resume </a>
                </button>
      </ul>
    </nav>
  </div>
      </header>
      <section id ="HOME"  className="Home">
        <div className="Home-Text">
          <h1>Hello I 'am <span>Cherrie</span><img src={wavingHand} className="waving-image" /> </h1>
          <p>An Aspiring <span className="mText">Front-end Developer</span></p>
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
             <h2>About me</h2>
              <p>✨<strong>Hi there!</strong> I'm <strong> Cherrie Anne Paclibar,</strong>  a a{" "}
              <em>4th-year Information Technology student</em> at{" "}
              <em>Holy Cross of Davao College</em> and {" "} <strong> an aspiring Front-End Developer.💻</strong>
                  I’m passionate about <em> crafting beautiful, user-friendly web experiences </em> and
                  <strong> bringing designs to life </strong> with <em> intuitive and dynamic interfaces. </em> 
                <p>As I continue my BSIT,💻 I’m excited to explore new technologies 
                  and <em> create engaging digital experiences that make an impact!</em>✨</p>
              </p>
              <SkillsBadge />
            </div>
        </div>
      </section>
        <section id="PORTFOLIO" className="portfolio">
          <CapstoneGrid />
      </section>
      <footer>
      <section id="CONTACT" className="conpage">
      <h1>Contact me</h1>
      <div className="contacts">
      <p className="email"><img src={email} className="icon"/><a>cherrieanne.paclibar@hcdc.edu.ph</a></p>
      <p><img src={phone} className="icon"/>09610724699</p>
      <p><img src={pin} className="icon"/>Davao City, Philippines</p>
      </div>
      <div className="social-media">
            <a href="https://www.facebook.com/cherrie.paclibar" >
                <img src={fb}  alt="Facebook" className="icon" />
            </a>
            <a href="https://www.instagram.com/cherwieann/" >
                <img src={ig}  alt="Instagram" className="icon" />
            </a>
            <a href="https://github.com/che1100" >
                <img src={git} alt="GitHub" className="icon" />
            </a>
        </div>
      </section>
      </footer>
      <div className="footer-bottom">
    <p>2024 Cherrie Anne Paclibar. All rights reserved.</p>
  </div>
    </div>
  );
};

const SkillsBadge = () => {
  const skills = [{name:"HTML", icon:<FaHtml5 /> },
                  {name:"CSS", icon:<FaCss3Alt />},
                  {name:"ReactJS", icon:<FaReact />},
                  {name:"Figma", icon:<SiFigma /> },  
                  {name:"Web Design",  }, 
                ];

  return (
    <div>
      <h2>Skills</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <span key={index} className="skillbadge"> 
        {skill.icon}
        <span className="skill-name">{skill.name}</span>
        </span>
      ))}
    </div>
    </div>
  );
};
  
const CapstoneGrid = () => {
  const capstoneProjects = [
    { img: port1, title: "CT Express", 
      desc: "A capstone project that A mobile app designed for Calinan Terminal that streamlines commuter experience by automating priority number issuance, enabling online payments, and providing real-time tracking of L300 vehicle locations." },
    { img: port2, title: "Course Recommendation System", 
      desc: "An AI-based course recommendation system that suggests personalized courses to students based on their interests, performance, and learning goals using machine learning algorithms." },
    { img: port3, title: "Rental Management System", 
      desc: "A rental management system that automates tenant tracking, rent payments, and record-keeping, ensuring efficiency, accuracy, and transparency for both tenants and management." },
  ];

  return (
    <div className="project-section">
      <h3 className="projects-title">Projects</h3>
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
    </div>
  );
};


export default Home;
