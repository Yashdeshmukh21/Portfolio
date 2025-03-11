import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaDownload } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/YashDeshmukhCV-1.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <section id="home" className="home">
        <div className="home__text-wrapper">

          <h1>
            Hello, I'm Yash
            <br />
            Front End Developer
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            <button onClick={handleDownloadResume}>
              <FaDownload />
              <span>Download Resume</span>
            </button>
          </div>
        </Animate>
      </section>
    </div>
  );
};

export default Home;