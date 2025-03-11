import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs'
import './styles.scss';
import PageHeaderContent from '../../Component/pageHeaderContent/Index';
import { Animate } from 'react-simple-animate'
import './styles.scss';
import { DiReact ,  DiJsBadge  } from "react-icons/di";
import { FaJava ,FaDatabase } from "react-icons/fa";


const personalDetails = [
  {
    label: "Name  :",
    value: "Yash Deshmukh",
  },
  {
    label: "Age  :",
    value:  "22",
  },
  {
    label: "Address  :",
    value: "Pune",
  },
  {
    label: "Email  :",
    value: "yash123@gmail.com",
  },
  {
    label: "Contact No  :",
    value: "8325744223"
  },
];

const jobSummary = "Hi, I’m Yash Deshmukh, a final-year engineering student interning at Nebula Technology. I specialize in full-stack development, working with Java for backend systems and React for building interactive front-end applications. Passionate about creating seamless and efficient solutions, I enjoy tackling challenges and turning ideas into reality. My internship has given me hands-on experience in developing scalable and user-friendly applications. I’m always eager to learn new technologies and improve my skills. Let’s connect and build something amazing together! ";

// const jobSummary = "Hi, I’m Yash Deshmukh, a final-year engineering student interning at Nebula Technology. I specialize in full-stack development, working with Java for backend systems and React for building interactive front-end applications. Passionate about creating seamless and efficient solutions, I enjoy tackling challenges and turning ideas into reality.   I’m deeply interested in building projects, exploring new technologies, and designing user-friendly interfaces. Problem-solving and collaborating on innovative solutions excite me, and I’m always eager to learn and grow. Let’s connect and build something amazing together!";



const AboutUs = () => {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-900px)'
          }}

          end={{
            transform: 'translatex(0px)',
          }}
        >

          <h3>Front End Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <Animate
             play
             duration={1.5}
             delay={1}
             start={{
                transform : 'translateY(500px)'
             }}
             
             end={{
                transform: 'translateY(0px)',
             }}
             >
        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {
            personalDetails.map((item,i)=>(
              <li key={i}>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate>

        </div>
        <div className="about__content__servicesWrapper">
        <Animate
             play
             duration={1.5}
             delay={1}
             start={{
                transform : 'translateX(600px)'
             }}
             
             end={{
                transform: 'translatex(0px)',
             }}
             >
          <div className="about__content__servicesWrapper__innercontent">

          <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                < DiJsBadge  size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
              <FaJava size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
              </div>

          </div>
          </Animate>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
