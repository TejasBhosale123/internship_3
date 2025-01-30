import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const About = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    useEffect(() => {
      let un = localStorage.getItem("un");
      if (un !== null) {
        setUsername(un);
      }
      else{
        nav('/login');
      }
    },[])
  return (
    <div>
        <center>
            <NavBar/>
            <div className="about-content">
        <h1>About Me</h1>
        <br/>
        <div className="about-card">
          <h2>Tejas Bhosale</h2>
          <br/>
          <p>
            I am passionate about Web Application Development. I enjoy working on new projects and learning new technologies.
          </p>
          <h3>My Interests</h3>
          <p>
            I have a strong interest in React.js, MERN stack development. 
            I love building projects that solve real-world problems.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>React.js & MERN Stack</li>
            <li>Machine Learning & AI</li>
          </ul>
        </div>
      </div>

            
        </center>
    </div>
  )
}

export default About