import React, { useState } from "react";
import CategoryDetails from "./CategoryDetails";
import CategoryCardContainer from "./categoryCardContainer";
import "../CategoryComponent/categoryCSS.css";
import Action from "../JPG/Action.jpg";
import Drama from "../JPG/Drama.jpg";
import Fantasy from "../JPG/Fantasy.jpg";
import Horror from "../JPG/Horror.jpg";
import Music from "../JPG/Music.jpg";
import Romance from "../JPG/Romance.jpg";
import Crime from "../JPG/Crime.jpg";
import Thriller from "../JPG/Thriller.jpg";
import Western from "../JPG/Western.jpg";
import NextButton from "./NextButton";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [Error, setError] = useState();
  const [cardContainer, setCardContainer] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const getColorClass = (index) => {
    let Class = [
      "color1",
      "color2",
      "color3",
      "color4",
      "color5",
      "color6",
      "color7",
      "color8",
      "color9",
    ];

    return Class[index % Class.length];
  };
  const getGeners = (index) => {
    let Class = [
      "Action",
      "Drama",
      "Romance",
      "Thriller",
      "Western",
      "Horror",
      "Fantasy",
      "Music",
      "Crime",
    ];

    return Class[index % Class.length];
  };
  const getImg = (index) => {
    let Class = [
      Action,
      Drama,
      Romance,
      Thriller,
      Western,
      Horror,
      Fantasy,
      Music,
      Crime,
    ];

    return Class[index % Class.length];
  };

  const handleSelect = (content) => {
    if (data.includes(content)) {
      setData((prevSelected) =>
        prevSelected.filter((item) => item !== content)
      );
    } else {
      if (data.length <= 8) {
        setData((prevSelected) => [...prevSelected, content]);
      }
    }
  };

  const handleNext = () => {
    if (data.length >= 3) {
      setError("");
      localStorage.setItem("data", data);
      localStorage.getItem("data");
      navigate("/home");
    } else {
      setError("Minimum 3 category required");
    }
  };

  return (
    <div>
      <div className="category">
        <CategoryDetails data={data} Error={Error} setData={setData} />
        <div className="cardMain">
          {cardContainer.map((i, index) => (
            <CategoryCardContainer
              getColorClass={getColorClass(index)}
              getGeners={getGeners(index)}
              imageUrl={getImg(index)}
              isSelected={data.includes(i.content)}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div className="Next">
        <button onClick={handleNext} className="NextButton">
          Next Page
        </button>
      </div>
    </div>
  );
}
