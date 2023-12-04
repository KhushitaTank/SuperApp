import React from "react";

export default function NextButton({ handleNext }) {
  const handleClick = () => {
    handleNext();
  };
  return (
    <div className="Next">
      <button onClick={handleClick} className="NextButton">
        Next Page
      </button>
    </div>
  );
}
