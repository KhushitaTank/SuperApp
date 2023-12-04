import React from "react";
import heroImage from "../JPG/heroImg.jpg";
import "./heroImg.css";

export default function HeroImage() {
  return (
    <div className="heroImage">
      <img src={heroImage} className="image" />
      <p className="imagePara">Discover new things on Superapp</p>
    </div>
  );
}
