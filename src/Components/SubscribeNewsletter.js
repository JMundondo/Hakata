import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubscribeNewsletter() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  return (
    <div className="ft-info-p2">
      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleBookAppointmentClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} /> Get Free Quote
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
