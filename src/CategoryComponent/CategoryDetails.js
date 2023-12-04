import React, { useEffect, useState } from "react";
import "../CategoryComponent/categoryDetail.css";
import Vector from "../SVG/Vector.svg";

export default function CategoryDetails({ data, Error, setData }) {
  const handleClick = (e, i) => {
    let newArray = [...data];
    newArray.splice(i, 1);
    setData(newArray);
  };
  return (
    <div className="categoryDetails">
      <h1 className="formHeading categoryh1">Super app</h1>
      <h2 className="categoryh2">Choose your entertainment category</h2>
      <div className="displayData">
        {data.map((element, index) => (
          <div className="DisplaySelected" key={index}>
            {element}
            <button
              onClick={() => handleClick(element, index)}
              className="crossBtn">
              x
            </button>
          </div>
        ))}
      </div>
      <div>
        {Error ? (
          <div className="Error">
            <img className="errorImg" src={Vector} /> <p>{Error}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
