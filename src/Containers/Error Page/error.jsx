import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <FaExclamationTriangle className="error-page__icon" />
        <h1 className="error-page__title">404 - Page Not Found</h1>
        <p className="error-page__message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="error-page__btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
