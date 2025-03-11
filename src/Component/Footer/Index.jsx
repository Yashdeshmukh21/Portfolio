import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Divider */}
      <div className="footer__wave"></div>

      {/* Footer Content */}
      <div className="footer__content">
        {/* Social Media Icons */}
        <div className="footer__social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-deshmukh-060b242bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer__icon" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope className="footer__icon" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Yash Deshmukh. All rights reserved.
        </p>
        <p className="footer__text">Made with ❤️ by Yash Deshmukh</p>
      </div>
    </footer>
  );
};

export default Footer;