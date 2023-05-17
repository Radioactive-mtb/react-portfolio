import React from "react";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="container mt-2">
      <h1>Portfolio</h1>
      <div className="row">
        <div className="col-md m-5 card  bg-light sipsavy">
          <a href="https://carlygallagher.github.io/stone-martini/">
            Deployed App
          </a>

          <a href="https://github.com/CarlyGallagher/stone-martini">
            GitHub Repository
          </a>
        </div>

        <div className="col-md m-5 card  bg-light">
          <a href="https://fierce-temple-93671.herokuapp.com/">Deployed App</a>

          <a href="https://github.com/Radioactive-mtb/text_editor">
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md m-5 card  bg-light">
          <a href="https://radioactive-mtb.github.io/Password-Generator/">
            Deployed App
          </a>
          <a href="https://github.com/Radioactive-mtb/Password-Generator">
            GitHub Repository
          </a>
        </div>

        <div className="col-md m-5 card  bg-light">
          <a href="https://fathomless-wave-31109.herokuapp.com/">
            Deployed App
          </a>

          <a href="https://github.com/Radioactive-mtb/Buzzer">
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md m-5 card  bg-light">
          <a href="#">Deployed App</a>
          <a href="#">GitHub Repository</a>
        </div>

        <div className="col-md m-5 card  bg-light">
          <a href="#">Deployed App</a>

          <a href="#">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}
