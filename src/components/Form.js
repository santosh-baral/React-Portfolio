import React from "react";
import { useState } from "react";
import './Form.css';
 
function Forms() {
    const [name ,setName]=useState(" ");
    const [email ,setEmail]=useState();
    const[mess,setMess]=useState();

    const handlesubmit=( )=>{
        // alert(`name:${ name} email:${email} message:${mess}`)
        console.log({name, email, mess});
    }

    return(

        <form onSubmit={handlesubmit}>
        <div className="text">
            <label for="name">Name:</label><br/>
            <input id="name" type="text" name="text" value={name.text}  onChange={(e) => setName(e.target.value)} placeholder="Enter your name  here" required/>  
           
        </div>
        <div className="text">
            <label for="email">Email Address:</label><br/>
            <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email address here" required/>  
        </div>
        <div className="text">    
            <label for="message">Message:</label><br/>
            <textarea id="message" value={mess} onChange={(e)=>setMess(e.target.value)} placeholder="Enter your message" required>  
            </textarea>
        </div>
        <div className="submit">
            <input type="submit"/>
        </div>
    </form>
    )
};
export default Forms;