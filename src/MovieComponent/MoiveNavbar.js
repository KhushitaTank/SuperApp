import React from "react";
import Logo from "../HelperComponent/Logo";
import userImg from "../JPG/userImgMovieSection.jpg";

export default function MoiveNavbar({ handleClick }) {
  return (
    <div className="navbar">
      <Logo />
      <button className="movieSectionUserImgBtn" onClick={handleClick}>
        <img className="movieSectionUserImg" src={userImg} />
      </button>
    </div>
  );
}
