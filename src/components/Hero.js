import React from 'react';
// import './Hero.css'; // Create this CSS file for styling
import './Hero.css';
function Hero() {
  return (
    <section id="detail" className="hero">
      <div className='contain'>
        <h2>Hi,</h2><h1 className='Name'>I am Santosh Baral</h1>
        <h5 >Computer Engineer</h5>
        <a href="https://bit.ly/3Ivw4IS" id="downcv">Download CV</a>
      </div>
      <div className="imgborder">
          <img id="imgsan" src="./1.png" alt="Santosh" />
      </div>
      
      
    </section>
  );
}

export default Hero;