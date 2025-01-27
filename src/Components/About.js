import React from "react";
import Doctor from "../Assets/doctor-group.png";
import ProductsImg from "../Assets/products.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

import logoImage from "../Assets/logo.png";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={ProductsImg} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Hakata Health Solutions Pvt, your trusted partner in
          medical supplies. We specialize in delivering a wide range of
          high-quality products and services to hospitals, government agencies,
          non-government organizations, and healthcare professionals.
        </p>
        <h4 className="about-text-title">Your Products</h4>
        <SolutionStep title="Laboratory machines" />
        <SolutionStep title="Patients monitors" />
        <SolutionStep title="X-ray machines" />
        <SolutionStep title="Ventilator and Anesthesia machines" />
        <SolutionStep title="Gynecology and Obstetrics Equipment, ," />
        <SolutionStep title="ECG, EMG, EEg" />
        <SolutionStep title=" Surgical equipment" />
        <SolutionStep title="Diagnostic kits" />
        <SolutionStep title="Tubes, containers and Disposables" />
        <SolutionStep title="Opthalmology equipment" />
        <SolutionStep title="Educational Models, Dialysis machines, Endoscopes," />
        <SolutionStep title="Operation room equipment," />
        <SolutionStep title="Dental equipment, " />
        <SolutionStep title="Surgical PPE, Hospital furniture, " />
        <SolutionStep title="Veterinary , equipment," />
      </div>
    </div>
  );
}

export default About;
