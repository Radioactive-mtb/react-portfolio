import React from "react";
import "../../styles/resume.css";

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <p>
        Below are the software that I have experience with. You can click the
        button to download my resume.
      </p>
      <button className=" rsbtn btn-sm">Download</button>
      <div className="frntend col-lg">
        <h3>Front-end Proficiencies</h3>
        <ol>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
          <li>React</li>
        </ol>
      </div>
      <div className="backend col-lg">
        <h3>Back-end Proficiencies</h3>
        <ol>
          <li>API</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB, Mongoose</li>
          <li>MySQL, Sequeliza</li>
          <li>Graphql</li>
        </ol>
      </div>
    </div>
  );
}
