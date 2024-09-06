import React from 'react';
// import './Hero.css'; // Create this CSS file for styling
import '../App.css';
function Hero() {
  return (
    <section id="detail" className="hero">
      <h1>Hi,<br /> I am Santosh Baral</h1>
      <h2>Computer Engineer</h2>
      <div className="imgborder">
        <img id="imgsan" src="./santosh.jpg" alt="Santosh" />
      </div>
      <a href="https://bit.ly/3Ivw4IS" id="downcv">Download CV</a>
    </section>
  );
}

export default Hero;