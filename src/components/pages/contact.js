import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";
import "../../styles/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "content") {
      setContent(inputValue);
    } else {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("The email you have entered is invalid");

      return;
    }
    alert("Thank you for reaching out.");

    setEmail("");
    setContent("");
    setName("");
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <p>
        Please fill out the form below and I will reach out as soon as possible.
        Thank you for taking the time.
      </p>
      <form className="form">
        <input
          className="row col-md"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          className="row col-md"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          className="row col-10"
          value={content}
          name="content"
          onChange={handleInputChange}
          type="textarea"
          rows="3"
          placeholder="Your message"
        ></textarea>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
