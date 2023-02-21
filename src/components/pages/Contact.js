import React, { useState } from 'react';
import '../../styles/contact.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();

    //checking for valid email address
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    } else if (name === '') {
      setErrorMessage('Name is required');
      return;
    } else if (message === '') {
      setErrorMessage('Message is required');
      return;
    }
    alert(`Thank you for your submission!`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contactInfo">
      <h1>Contact Me</h1>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <break/>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input id="messageBox"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
