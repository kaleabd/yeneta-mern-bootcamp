import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./Input.css";

const Input = ({ type, placeholder, handleChange, checkboxContent }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {type === "password" ? (
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...register("password", { required: true })}
            className="input password"
          />
          {errors.password && <span>This field is required</span>}
          <div className="showpassword">
            {showPassword ? (
              <FaEyeSlash onClick={toggleShowPassword} />
            ) : (
              <FaEye onClick={toggleShowPassword} />
            )}
          </div>
        </div>
      ) : type === "checkbox" ? (
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="checked"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            {...register("checked")}
          />
          <p className="checkbox-content">{checkboxContent}</p>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register("text")}
          className="input"
        />
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;



/*

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
*/
