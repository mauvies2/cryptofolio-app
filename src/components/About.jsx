import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => (
  <div className="about">
    <div className="about-container">
      <h1>About</h1>
      <p>
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
        molestias?
      </p>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-col">
          <li>
            <a href="#" className="">
              Get started
            </a>
          </li>
          <li>
            <a href="#" className="">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="">
              Assets
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="">
              About
            </a>
          </li>
          <li>
            <a href="#" className="">
              Help
            </a>
          </li>
        </ul>
        <div className="footer-col">
          <div>
            <a href="#" className="">
              FAQ
            </a>
          </div>
          <div>
            <a href="#" className="">
              Privacy
            </a>
          </div>
          <div>
            <a href="#" className="">
              Terms of Services
            </a>
          </div>

          <div className="social-networks">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className="nav-menu-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="nav-menu-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="nav-menu-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="register-company">
        <p>© 2020 Capitol Inc.</p>
      </div>
    </footer>
  </div>
);

export default About;
