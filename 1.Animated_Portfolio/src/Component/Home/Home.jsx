import React from 'react'
import "./Home.css"

import man from "../../assets/man.png"
import { Typewriter } from "react-simple-typewriter";
function Home() {
  return (
<div id="home">
<div className="lefthome"> 
<div className="homedetail">
  <div className="line1">I'M</div>
  <div className="line2">BALVANT SINGH</div>
  <div className="line3">
 
<Typewriter
  words={["WEB DEVELOPER", "EDITOR"]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={100}
  deleteSpeed={50}
  delaySpeed={1000}
/>
  </div>
</div>
</div>
<div className="righthome">
  <img src={man} alt="" />
</div>
</div>
  )
}

export default Home
