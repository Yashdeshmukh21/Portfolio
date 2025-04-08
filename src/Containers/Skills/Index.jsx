import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaHtml5, FaReact, FaJs, FaSass, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiHibernate, SiTailwindcss, SiSpringboot, SiMysql, SiReactrouter } from "react-icons/si";
import PageHeaderContent from "../../Component/pageHeaderContent/Index";
import "./styles.scss";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    description: "Markup language for building web structure",
  },
  {
    icon: <FaReact />,
    title: "React",
    description: "JavaScript library for building UI",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    description: "Scripting language for interactivity",
  },
  {
    icon: <FaSass />,
    title: "SCSS",
    description: "CSS preprocessor for styling",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    description: "State management library",
  },
  {
    icon: <SiHibernate />,
    title: "Hibernate",
    description: "ORM framework for Java",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description: "Version control system",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    description: "Frontend framework for responsive design",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    description: "Utility-first CSS framework",
  },
  {
    icon: <SiReactrouter />,
    title: "React Router",
    description: "Routing for React applications",
  },
  {
    icon: <SiSpringboot />,
    title: "Spring Boot",
    description: "Java backend framework",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    description: "Relational database management system",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
