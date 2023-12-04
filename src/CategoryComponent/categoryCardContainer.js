import React from "react";
import "../CategoryComponent/cardcontainer.css";

export default function CategoryCardContainer({
  data,
  setData,
  getColorClass,
  getGeners,
  imageUrl,
  isSelected,
  onSelect,
}) {
  const handleClick = () => {
    onSelect(getGeners);
  };
  return (
    <button
      onClick={handleClick}
      className={`card ${getColorClass} ${isSelected ? "selected" : ""}`}>
      <p className="HeadingGeners">{getGeners}</p>
      {<img src={imageUrl} className="ImgGener" />}
    </button>
  );
}
