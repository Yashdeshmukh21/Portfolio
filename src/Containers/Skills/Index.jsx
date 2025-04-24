import React, { useEffect } from "react";
import './styles.scss';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaBootstrap
} from "react-icons/fa";

import { 
  SiHibernate, 
  SiSpringboot, 
  SiRedux, 
  SiTailwindcss, 
  SiReactrouter,
  SiNextdotjs 
} from "react-icons/si";

import PageHeaderContent from "../../Component/pageHeaderContent/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { BsInfoCircleFill } from "react-icons/bs";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS/SCSS", icon: <FaCss3Alt />, color: "#264DE4" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
    { name: "SpringBoot", icon: <SiSpringboot />, color: "#38B2AC" },
    { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "React Router", icon: <SiReactrouter />, color: "#CA4245" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#888888" },  // Updated color
    { name: "React Native", icon: <FaReact />, color: "#00D8FF" }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      offset: 100
    });
  }, []);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="skill-section" id="skills">
      <PageHeaderContent
        className="header"
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            className="skill-card"
            key={index}
            style={{ "--skill-color": skill.color }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <div className="floating-icon">
              <motion.div 
                className="skill-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                {React.cloneElement(skill.icon, { size: 40 })}
              </motion.div>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="particles">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="particle"
                  style={{ 
                    backgroundColor: skill.color,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
