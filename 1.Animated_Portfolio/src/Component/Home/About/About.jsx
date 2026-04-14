import React from 'react'
import "./About.css"
function About() {
  return (
    <div id="about">
      <div className="leftabout"></div>
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="aboutdetail">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li>
              <span>Name</span> : Balvant Singh
            </li>
             <li>
              <span>Age</span> : 21 Years
            </li>
            <li>
              <span>GENDER</span> : Male
            </li>
            <li>
              <span>Language Known</span> : English,Hindi
            </li>
          </ul>
        </div>
        <div className="education">
          <h1>Education</h1>
          <ul>
            <li>
              <span>DEGREE</span> : B:Tech
            </li>
             <li>
              <span>BRANCH</span> : CSE(AI)
            </li>
            <li>
              <span>CGPA</span> : 8.5
            </li>
             
          </ul>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
              MERN STACK DEVELOPER
            </li>
             <li>
              DSA
            </li>
            <li>
              AI ENGINEER
            </li>
             
          </ul>
        </div>
      </div>
      <div className="rightabout"></div>

    </div>
  )
}

export default About
