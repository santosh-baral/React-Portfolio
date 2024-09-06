
// import './App.css';
// import Form from './form.js';

// function App() {
//   return (
//     <div className='body'>
//             <div className="home">
//                 <div id="detail">
//                     <div>
//                         <nav className="bar">
//                             <ul>
//                                 <li><a href="#detail">Home</a></li>
//                                 <li><a href="#about">About</a></li>
//                                 <li><a href="#contact">Contact</a></li>
//                                 <li><a href="#blog">Blog</a></li>  
//                             </ul>
//                         </nav>
//                      </div>
//                     <div className="contain">
//                         <h1>Hi,<br/> I am Santosh Baral</h1>
//                             <h2>Computer Engineer</h2>
                        
//                             <div className="imgborder">
//                                 <img id="imgsan" src="./santosh.jpg" alt='santosh'/>
//                             </div>
//                         <a href="https://bit.ly/3Ivw4IS" id="downcv"> Download CV</a>
//                         <div className="icons">
//                             <a href="https://github.com/santosh-baral"><img src="github.svg"/></a>
//                             <a href="https://www.linkedin.com/in/santosh-baral-8a00a0236"><img src="linkedin.svg"/></a>
//                             <a href="https://www.facebook.com/santosh.baral.9083"><img src="facebook.svg"/></a>
//                             <a href="https://twitter.com/Santos_baral?s=20&t=wnNQ9lGcHieqhZ9GCsR7LQ"><img src="twitter.svg"/></a>
//                         </div>
//                     </div>
                    
                     
//                  </div>
            
//                 <div id="about">
//                     <h1>ABOUT ME</h1>
//                     <div className="aboutme">
//                         <p>Hello, I am Santosh and I am a Computer Engineering student from Nepal with a great passion for software development and programming. I have been doing web development, software development on various platform. I have built several projects while pursuing my engineering. &emsp;<br/><br/>
//                             I can work on the various programming language like C, C++, JavaScript and it's frameworks like React and Node Js. I have the knowledge on software development process. I love to learn different JavaScript framework and it's Ecosystem.
//                           </p>
                        
//                     </div>    
//                     <h1 id="skill">SKILLS</h1>
//                         <div className="exper">
                           
//                             <div className="navs">
//                                 <nav>
//                                     <ul>
//                                         <li>HTML</li>
//                                         <li>CSS</li>
//                                         <li>JAVASCRIPT</li>
//                                         <li>C++</li><br/>
//                                         <li>C PROGRAMMING</li>
//                                         <li>DATA STRUCTURE</li>
                                        
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div> 
                    
//                 </div>
//                 <div id="contact">
//                     <h1>LET's TALK.</h1>
//                     <div className="contacts">
//                         <div className="form">
                            
//                             <p>If you have a general enquiry, use the contact form to message me.<br/>
//                             If you woud like to discuss a particular project, then you can hire me.<br/>I'd love to find out more.
//                             </p><br/>
//                            <Form/>
//                         </div>
                    
//                         <div className="icon">
                            
//                             <div className="con">
//                                 <img className="img" src="phone.svg"/>
//                                 <div className="cont">
//                                     <h4> Phone:<br/>
//                                         +9779862779037</h4>
//                                 </div>
//                             </div>
//                             <div className="con">
//                                 <img className="img" src="gmail.svg"/>
//                                 <div className="cont">
                                   
//                                     <h4> Email:<br/>
//                                         mail.santoshbaral@gmail.com</h4>
//                                 </div>
//                             </div>   
//                             <div className="con">
//                                 <img className="img" src="location.svg"/>
//                                 <div className="cont">
                                    
//                                     <h4>Address:<br/>Dharan, Sunsari</h4>
//                                 </div>
//                             </div>
//                        </div>
//                     </div>
//                 </div>
//             </div>
           
//   </div>
 
    
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import SocialLinks from './components/Footer';

function App() {
  return (
        <div className="body">
        <Header />
        <Hero />
        <About />
        <Contact />
        <SocialLinks />
        </div>
  );
}

export default App;