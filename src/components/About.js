import React from 'react';
import '../App.css'; // Create this CSS file for styling

function About() {
  return (
    <section id="about" className="about">
      <h1>ABOUT ME</h1>
      <div className="aboutme">
        <p>
          Hello, I am Santosh and I am a Computer Engineering student from Nepal with a great passion for software development and programming...
        </p>
      </div>
      <h1 id="skill">SKILLS</h1>
      <div className="exper">
        <div className="navs">
          <nav>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>C++</li>
              <li>C PROGRAMMING</li>
              <li>DATA STRUCTURE</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default About;