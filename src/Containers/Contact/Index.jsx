import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons
import { FaUserAlt, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'service_qzuxuj1',
        'template_h9xize9',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'c_BSDw_hLUnCnhTOP'
      );
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* Toast Message Display */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'var(--yellow-theme-sub-text-color)',
          border: '1px solid var(--yellow-theme-main-color)',
          borderRadius: '12px',
          fontSize: '1.1rem',
          boxShadow: '0 0 14px rgba(255, 204, 0, 0.3)',
        }}


        
        style={{
          zIndex: 999,
          position: 'fixed',
          top: '10em',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Have questions or want to get in touch? Send us a message!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              <FaUserAlt className="input-icon" /> Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">
              <FaCommentDots className="input-icon" /> Message
            </label>
            <textarea
              id="message"
              rows={4}
              style={{ minHeight: '100px' }}
              placeholder="Type your message here..."
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 5,
                  message: 'Please enter a more detailed message',
                },
              })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
