import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Weather from "./Weather";
import News from "./News";
import "../HomeComponent/Home.css";
import Timer from "../HomeComponent/Timer";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [gener, setGener] = useState(localStorage.getItem("data").split(","));
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const number = localStorage.getItem("number");
  const [newNote, setNewNote] = useState("");
  const navigate = useNavigate();

  const handleBrowseClick = (e) => {
    e.preventDefault();

    localStorage.setItem("Notes", newNote);
    localStorage.getItem("Notes");
    navigate("/Movie");
  };

  return (
    <div>
      <div className="Home">
        <div className="left-coloum">
          <div className="section1">
            <div>
              <UserDetails
                name={name}
                username={username}
                email={email}
                GenerData={gener}
              />
              <Weather />
            </div>
            <Notes newNote={newNote} setNewNote={setNewNote} />
          </div>
          <Timer />
        </div>
        <div className="right-coloum">
          <News />
        </div>
      </div>
      <div className="BrowseBtn">
        <button className="browsebutton" onClick={handleBrowseClick}>
          Browse
        </button>
      </div>
    </div>
  );
}
