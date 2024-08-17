import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
  faHospitalUser,
  faThermometer2,
  faPooBolt,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Welcome to Hakata Health Solutions Pvt, your trusted partner in
          comprehensive healthcare and medical supplies. We specialize in
          delivering a wide range of high-quality products and services to
          hospitals, government agencies, non-government organizations, and
          healthcare professionals.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Medical Consumables"
          description=" A wide range of essential medical supplies for daily healthcare needs."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Diagnostic Solutions"
          description="Advanced diagnostic tools and technologies to ensure accurate and timely results."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Equipment"
          description="High-quality dental tools and equipment to support dental professionals."
          icon={faTooth}
        />
        <InformationCard
          title="Veterinary Products"
          description=" A wide range of essential supplies for daily healthcare needs."
          icon={faThermometer2}
        />

        <InformationCard
          title="Precision Engineering"
          description="Custom engineering solutions for medical devices and equipment."
          icon={faPooBolt}
        />

        <InformationCard
          title="Biomedical Devices Supply and Repair"
          description="Supplying and maintaining cutting-edge biomedical devices to ensure optimal performance and longevity."
          icon={faHospitalUser}
        />
      </div>
    </div>
  );
}

export default Info;
