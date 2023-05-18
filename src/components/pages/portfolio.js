import React from "react";
import SP from "../../images/empty-cocktail.jpg";
import BZ from "../../images/Buzzer.png";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="container mt-2">
      <h1>Portfolio</h1>
      <div className="row">
        <div className="card col-md m-5  sipsavy">
          <img className="backimg" src={SP} alt="sip-savy" />

          <a
            href="https://carlygallagher.github.io/stone-martini/"
            className="ptbtn btn-sm"
          >
            Deployed App
          </a>

          <a
            href="https://github.com/CarlyGallagher/stone-martini"
            className="ptbtn btn-sm "
          >
            GitHub Repository
          </a>
        </div>

        <div className=" card col-md m-5   ">
          <img className="backimg" src={BZ} alt="buzzer" />
          <a
            href="https://fierce-temple-93671.herokuapp.com/"
            className="ptbtn btn-sm"
          >
            Deployed App
          </a>

          <a
            href="https://github.com/Radioactive-mtb/text_editor"
            className="ptbtn btn-sm"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md m-5 card  ">
          <a
            href="https://radioactive-mtb.github.io/Password-Generator/"
            className="ptbtn btn-sm"
          >
            Deployed App
          </a>
          <a
            href="https://github.com/Radioactive-mtb/Password-Generator"
            className="ptbtn btn-sm"
          >
            GitHub Repository
          </a>
        </div>

        <div className="col-md m-5 card  ">
          <a
            href="https://fathomless-wave-31109.herokuapp.com/"
            className="ptbtn btn-sm"
          >
            Deployed App
          </a>

          <a
            href="https://github.com/Radioactive-mtb/Buzzer"
            className="ptbtn btn-sm"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md m-5 card  ">
          <a href="github.com" className="ptbtn btn-sm">
            Deployed App
          </a>
          <a href="#github.com" className="ptbtn btn-sm">
            GitHub Repository
          </a>
        </div>

        <div className="col-md m-5 card  ">
          <a href="github.com" className="ptbtn btn-sm">
            Deployed App
          </a>

          <a href="#github.com" className="ptbtn btn-sm">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
