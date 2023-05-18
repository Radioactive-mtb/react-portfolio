import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links ">
          <a href="https://github.com/Radioactive-mtb">
            <BsGithub />
          </a>

          <a href="https://www.linkedin.com/">
            <BsLinkedin />
          </a>

          <a href="https://stackoverflow.com/">
            <BsStackOverflow />
          </a>
        </div>
      </div>
    </footer>
  );
}
