import React from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer } from "react-toastify";
import logoImage from "../Assets/logo.png";
import styled from "styled-components";

const FormSection = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  height: 300px;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SuccessBanner = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #e8f5e9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SuccessLogo = styled(Logo)`
  height: 150px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const SuccessMessage = styled.p`
  color: #2e7d32;
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

function AppointmentForm() {
  const [state, handleSubmit] = useForm("xdknwypy");

  if (state.succeeded) {
    return (
      <SuccessBanner>
        <Link to="/">
          <SuccessLogo src={logoImage} alt="Hakata Health Solutions Logo" />
        </Link>
        <SuccessMessage>
          {" "}
          Thanks for contacting us! We will email you your quotation shortly.
        </SuccessMessage>
        <Footer>
          <p>© 2024-2050 Hakata. All rights reserved.</p>
        </Footer>
      </SuccessBanner>
    );
  }

  return (
    <FormSection>
      <LogoContainer>
        <Link to="/">
          <Logo src={logoImage} alt="Hakata Health Solutions Logo" />
        </Link>
      </LogoContainer>

      <FormTitle>Get Quotation</FormTitle>

      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="patientNumber">Customer Phone Number</Label>
        <Input id="patientNumber" type="tel" name="patientNumber" required />
        <ValidationError
          prefix="Phone"
          field="patientNumber"
          errors={state.errors}
        />

        <Label htmlFor="patientName">Customer Full Name</Label>
        <Input id="patientName" type="text" name="patientName" required />
        <ValidationError
          prefix="Name"
          field="patientName"
          errors={state.errors}
        />

        <Label htmlFor="goods">Description of Goods</Label>
        <Input id="goods" type="text" name="goods" required />
        <ValidationError prefix="Goods" field="goods" errors={state.errors} />

        <Label htmlFor="appointmentTime">Date of Preferred Delivery</Label>
        <Input
          id="appointmentTime"
          type="date"
          name="appointmentTime"
          required
        />
        <ValidationError
          prefix="Date"
          field="appointmentTime"
          errors={state.errors}
        />

        <Label htmlFor="message">Additional Message</Label>
        <TextArea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <SubmitButton type="submit" disabled={state.submitting}>
          Submit
        </SubmitButton>
      </StyledForm>

      <Footer>
        <p>© 2024-2050 Hakata. All rights reserved.</p>
      </Footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </FormSection>
  );
}

export default AppointmentForm;
