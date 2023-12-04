import React from "react";
import HeroImage from "./HeroImage";
import FormComponent from "./FormComponent";
import "./registration.css";

export default function RegistrationComponent() {
  return (
    <div className="registrationComponent">
      <HeroImage />
      <FormComponent />
    </div>
  );
}
