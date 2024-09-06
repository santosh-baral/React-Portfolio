import React from 'react';
import Form from './Form'; // Assuming you already have Form component created
// import './Contact.css'; // Create this CSS file for styling
import './Contact.css';
function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>LET's TALK.</h1>
      <div className="contacts">
        <div className="form">
          <p>
            If you have a general enquiry, use the contact form to message me...
          </p>
          <Form />
        </div>
        <div className="icon">
          <div className="con">
            <img className="img" src="phone.svg" alt="Phone" height={100} width={100} />
            <div className="cont">
              <h4>Phone:<br />+9779862779037</h4>
            </div>
          </div>
          <div className="con">
            <img className="img" src="gmail.svg" alt="Email" height={100} width={100}/>
            <div className="cont">
              <h4>Email:<br />mail.santoshbaral@gmail.com</h4>
            </div>
          </div>
          <div className="con">
            <img className="img" src="location.svg" alt="Location" />
            <div className="cont">
              <h4>Address:<br />Dharan, Sunsari</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
    }
    
    export default Contact;