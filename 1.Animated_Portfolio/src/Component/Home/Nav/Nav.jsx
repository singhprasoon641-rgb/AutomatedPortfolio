import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
function Nav() {
  let menu=useRef()
  let mobile=useRef()
  
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      
      <ul className='desktopmenu'>
        <Link to="home" smooth={true} duration={500} activeClass='activ' spy={true}> <li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
        <Link to="project" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
      </ul> 
      <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }

      }
      
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" smooth={true} duration={500} activeClass='activ' spy={true}> <li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
        <Link to="project" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
      </ul>  
    </nav>
  )
}

export default Nav
