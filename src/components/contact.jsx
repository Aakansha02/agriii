import React from 'react';
import './contact.css'


const submithandler = (event)=>{
  event.preventDefault();
  const config={

    SeecureToken:'34ba9862-e645-4500-99bf-c81d5fe019cb ',
    To : 'akansham392@gmail.com',
        From : "formstate.email",
        Subject : "contact form",
        Body : "body",
    };
  if(window.Email){
    window.Email.send(config).then(()=> alert("email sent succesfully"));
  }
}

const ContactUs = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {/* <div className="contact-container"> */}
    <div className="container">
      <form onSubmit={submithandler}>
        <h3>GET IN TOUCH</h3>
        <input type='text' id='name' placeholder='Your name' required></input>
        <input type='email' id='email' placeholder='Email Id' required></input>
        <input type='text' id='phone' placeholder='Phone no.' required></input>
        <textarea id='message' rows="4" placeholder='How can we help you?' required></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  

        <div className="contact-info">
          <h3>Address</h3>
          <p>1234 Main Street, City, State, Country</p>
          <h3>Email</h3>
          <p>contact@example.com</p>
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        {/* </div> */}
      </div>
      
       
    </div>
    
  );
};

export default ContactUs;
