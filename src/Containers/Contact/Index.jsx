import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import PageHeaderContent from "../../Component/pageHeaderContent/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import {  FaInstagram, FaGithub  } from "react-icons/fa";
import { TiSocialFacebook , TiSocialYoutube } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // 
    toast.success("Form submitted successfully!"); 
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__content__form__controlswrapper">
              
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="inputName"
                  type="text"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>

              
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="inputEmail"
                  type="text"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>

            
              <div>
                <textarea
                  {...register("description", { required: "Description is required" })}
                  className="inputDescription"
                  rows="6"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
                {errors.description && (
                  <span className="error">{errors.description.message}</span>
                )}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>

        {/* Social Media Icons Section */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateY(50px)",
            opacity: 0,
          }}
          end={{
            transform: "translateY(0px)",
            opacity: 1,
          }}
        >
          <div className="contact__content__social">
            <a href="https://www.linkedin.com/in/yash-deshmukh-060b242bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <TiSocialYoutube size={40} />
            </a>
            <a href="https://www.instagram.com/yashh.__32?igsh=ODN2bmg5a2g0Y3ht" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="mailto:yashdeshmukh465@gmail.com" target="_blank" rel="noopener noreferrer">
              <HiMail size={40} />
            </a>
            <a href="tel:7350818223" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebook size={40} />
            </a>
            <a href="https://www.facebook.com/ajit.babar.3954" target="_blank" rel="noopener noreferrer">
            <FaGithub  size={40} />
            </a>
          </div>
        </Animate>
      </div>

      
      <ToastContainer
        // position="top-right"
        // autoClose={3000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;