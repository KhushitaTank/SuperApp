import React from "react";

export default function CheckBox({ setIsCheckboxChecked, checkboxError }) {
  return (
    <div className="Checkbox">
      <input
        type="checkbox"
        name="checkbox"
        onClick={() => setIsCheckboxChecked(true)}
      />
      Share my registration data with Superapp
      <br />
      <span className="checkboxError">{checkboxError}</span>
    </div>
  );
}
