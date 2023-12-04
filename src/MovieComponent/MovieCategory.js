import React from "react";
import { useNavigate } from "react-router-dom";
import "../MovieComponent/Moive.css";
import MoiveNavbar from "./MoiveNavbar";
import GenresContainer from "./GenresContainer";

export default function MovieCategory() {
  const navigate = useNavigate();
  const GenerData = localStorage.getItem("data").split(",");
  const handleClick = () => navigate("/home");
  return (
    <div>
      <MoiveNavbar handleClick={handleClick} />
      <GenresContainer GenerData={GenerData} />
    </div>
  );
}
