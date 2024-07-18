import React, { useRef,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Style/getinTouch.css'; 
import crane from '../Images/getcrane.jpg';

export default function Getintouch() {
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const location = useLocation();

  useEffect(() => {
      if (location.hash === '#contact') {
        const serviceSection = document.getElementById('contact');
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


  const sendEmail = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      emailjs
<<<<<<< Updated upstream
        .sendForm('service_fvfrt9j', 'template_6zk61lk', form.current, {
          publicKey: '5p3DUvP097oQD5kd_',
=======
        .sendForm('Ranjanabeshra@gmail.com', 'template_a716pyn', form.current, {
          publicKey: 'ftTkOOF1MdcQ08IHy',
>>>>>>> Stashed changes
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
    if (messageValue === '' || messageValue.length < 10) {
      setError(message.current, 'Description must be at least 10 characters');
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
    <div className='mainContainer' id='contact'>
      <div className="mainHeading">
      <h2>Get in touch with us today!</h2>
      </div>
      
      <div className="container">        
        <div className="leftSection">
          <form ref={form} onSubmit={sendEmail}>
          <div className="input-control">
              <label>Name</label><br></br>
              <input type="text" id="username" ref={username}  name="from_name" />
              <div className="error"></div>
              </div>
            
              <div className="input-control">
              <label>Email</label><br></br>
              <input type="email" id="email" ref={email}  name="email_id" />
              <div className="error"></div>
              </div>
           
              <div className="input-control">
              <label>Phone No</label><br></br>
              <input type="tel" id="phone" ref={phone}  name="phone_no" />
              <div className="error"></div>
              </div>
            
              <div className="input-control">
              <label>Briefly Describe Your Project</label><br></br>
              <textarea id="message" ref={message}  name="message" />
              <div className="error"></div>
              </div>
            
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
