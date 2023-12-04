import React from "react";
import UserImg from "../SVG/UserImg2.svg";

export default function UserDetails({ name, username, email, GenerData }) {
  return (
    <div className="UserDetails">
      <div className="userDetalilLeftSide">
        <img src={UserImg} />
      </div>
      <div className="userDetalilRightSide">
        <h2 className="Name">{name}</h2>
        <h3 className="Email">{email}</h3>
        <h1 className="UserName">{username}</h1>
        <div className="GenerList scrollable">
          {GenerData.map((element, index) => {
            return (
              <div className="Geners" key={index}>
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
