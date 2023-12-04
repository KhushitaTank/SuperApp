import React from "react";
import "./formInput.css";

export default function FormInput(props) {
  const { errorArray, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formDetail">
      <input className="inputField" {...inputProps} onChange={onChange} />
      <span className="error">
        {errorArray.indexOf(inputProps.name.toString()) == -1 ? (
          <></>
        ) : (
          errorMessage
        )}
      </span>
    </div>
  );
}
