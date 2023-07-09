import React from "react";

import "./ClickableText.css";

const ClickableText = ({ label, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="clickable-text">
        {label}
      </button>
    </div>
  );
};

export default ClickableText;
