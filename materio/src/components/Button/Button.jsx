import React from "react";
import './Button.css';

const Button = ({children, handleButton}) => {
  return (
    <div>
      <button className="button" onClick={handleButton}>{children}</button>
    </div>
  );
};

export default Button;
