import React, { useEffect, useState } from "react";
import "./formComponent.css";
import FormInput from "./FormInput";
import TermsConditon from "./TermsConditon";
import CheckBox from "./CheckBox";
import { useNavigate, useNavigation } from "react-router-dom";
//import Validation from "./Validation";

export default function FormComponent() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [errorArray, setErrorArray] = useState([]);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Field is required",
      // pattern: "[A-Za-z]+[\\s[A-Za-z]+||()]{0,10}$",
      require: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Field is required",
      pattern: "[a-zA-Z0-9!@#$%^&*]{1,16}$",
      require: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "[^s@]+@[^s@]+.[^s@]+$",
      errorMessage: "Field is required",
      require: true,
    },
    {
      id: 4,
      name: "number",
      type: "tel",
      placeholder: "Mobile",
      errorMessage: "Field is required",
      pattern: "[0-9]{1,10}$",
      require: true,
    },
  ];

  const Validation = () => {
    if (!isCheckboxChecked) {
      let message = "Check this box if you want to proceed";
      setCheckboxError("Check this box if you want to proceed");
      return message;
    } else if (isCheckboxChecked) setCheckboxError("");

    let arr = [];
    for (const key in value) {
      if (value[key] == "") arr.push(key);
    }
    if (!(value.number.length == 10)) {
      arr.push("number");
      setErrorArray(arr);

      return arr;
    }
    setErrorArray(arr);

    return arr;
  };

  const storage = () => {
    for (const key in value) {
      localStorage.setItem(key, value[key]);
      localStorage.getItem(key);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = Validation();

    if (err.length == 0 || err == "") {
      storage();

      navigate("/category");
    }
  };

  const onChange = (e) => {
    let newArr = inputs.filter((i) => i.name == e.target.name);
    let reg = new RegExp(newArr[0].pattern);
    let name = reg.test(e.target.value) ? [] : newArr[0].name;
    if (name) {
      setErrorArray([name]);
    }

    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const Submit = () => {};

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1 className="formHeading">Super app</h1>
        <p className="formPara">Create your new account</p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
            errorArray={errorArray}
          />
        ))}
        <CheckBox
          setIsCheckboxChecked={setIsCheckboxChecked}
          checkboxError={checkboxError}
        />
        <button className="submitBtn" type="submit" onClick={Submit}>
          SIGN UP
        </button>
        <TermsConditon />
      </form>
    </div>
  );
}
