import React, { useState } from "react";
import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ type, placeholder, handleChange,checkboxContent }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

// kidus hailu


  return (
    <div>
      {type === "password" ? (
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            onChange={(val) => handleChange(val)}
            className="input password"
          />
          <div className="showpassword">
            {showPassword ? (
              <FaEye onClick={toggleShowPassword} />
            ) : (
              <FaEyeSlash onClick={toggleShowPassword} />
            )}
          </div>
        </div>
      ) : type === "checkbox" ? (
        <div className="checkbox-container">
          <input
            type={type}
            checked={isChecked}
            onChange={(val) => {
              handleCheckboxChange(val);
              handleChange(val);
            }}
            className="checkbox-input"
          />
          <p className="checkbox-content">{checkboxContent}</p>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={(val) => handleChange(val)}
          className="input"
        />
      )}
    </div>
  );
};

export default Input;
