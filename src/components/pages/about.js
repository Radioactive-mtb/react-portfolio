import React from "react";
import "../../styles/about.css";
import PRP from "../../images/profile_picture.png";

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="propic">
        <img src={PRP} alt="profile pic" className="propic" />
      </div>
      <div className="text">
        <p>
          I am Justen Tatum a student currently studying web development at Edx
          Bootcamps at University of California Riverside.
        </p>
      </div>
    </div>
  );
}
