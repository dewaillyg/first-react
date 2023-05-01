import React from "react";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Guillaume Dewailly</span>
        </h1>
        <p className="h-sub-text">
          I design, build &#x26; sometimes rescue applications.
          <br />
          Have a project, idea or problem you'd like to discuss ?<br />
          Let's chat <a href="#">dewailly.mail@gmail.com</a>
        </p>
        <div className="icons">
          <a
            href="https://github.com/dewailly"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.instagram.com/dewailly_guillaume/"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon tt" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
