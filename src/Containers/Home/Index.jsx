import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaDownload, FaPaperPlane } from "react-icons/fa"; 
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
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
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translateY(0px)" }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>
              <FaPaperPlane />
              <span>Hire Me</span>
            </button>
            <a href="/YashDeshmukhCV.pdf" download="Yash_resume.pdf">
              <button>
                <FaDownload />
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </Animate>
      </section>
    </div>
  );
};

export default Home;
