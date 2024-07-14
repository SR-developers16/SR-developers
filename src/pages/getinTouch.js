import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/getinTouch.css'; 
import crane from '../Images/getcrane.jpg';

export default function Getintouch() {
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      emailjs
        .sendForm('Ranjanabeshra@gmail.com', 'template_7pknt2i', form.current, {
          publicKey: 'ftTkOOF1MdcQ08IHy',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Your information sent successfully');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('There was an error. Please try again');
          }
        );
    }
  };

  const validateInputs = () => {
    const usernameValue = username.current.value.trim();
    const emailValue = email.current.value.trim();
    const phoneValue = phone.current.value.trim();
    const messageValue = message.current.value.trim();

    let isValid = true;

    // Validate username
    if (usernameValue === '' || usernameValue.length < 3) {
      setError(username.current, 'Name must be at least 3 characters');
      isValid = false;
    } else {
      setSuccess(username.current);
    }

    // Validate email
    if (emailValue === '') {
      setError(email.current, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email.current, 'Provide a valid email address');
      isValid = false;
    } else {
      setSuccess(email.current);
    }

    // Validate phone number
    if (phoneValue === '') {
      setError(phone.current, 'Phone number is required');
      isValid = false;
    } else if (!isValidPhone(phoneValue)) {
      setError(phone.current, 'Provide a valid phone number');
      isValid = false;
    } else {
      setSuccess(phone.current);
    }

    // Validate message
    if (messageValue === '' || messageValue.length < 30) {
      setError(message.current, 'Description must be at least 30 characters');
      isValid = false;
    } else {
      setSuccess(message.current);
    }

    return isValid;
  };

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidPhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  return (
    <>
    <div className='mainContainer'>
      <div className="mainHeading">
      <h2>Get in touch with us today!</h2>
      </div>
      
      <div className="container">        
        <div className="leftSection">
          <form ref={form} onSubmit={sendEmail}>
            
              <label>Name</label><br></br>
              <input type="text" id="username" ref={username}  name="from_name" />
              <div className="error"></div>
            
            
              <label>Email</label><br></br>
              <input type="email" id="email" ref={email}  name="email_id" />
              <div className="error"></div>
           
            
              <label>Phone No</label><br></br>
              <input type="tel" id="phone" ref={phone}  name="phone_no" />
              <div className="error"></div>
            
            
              <label>Briefly Describe Your Project</label><br></br>
              <textarea id="message" ref={message}  name="message" />
              <div className="error"></div>
            
            <div className='button'>
            <button className="submit" value="Send"> Submit </button>
            </div>
          </form>
        </div>
     
      <div className='rightSection'>
      <div className="image-container">
        <img src={crane} alt=""/>
      </div>
      </div>
    </div>
    </div>
    </>
  
  );
}
