import React from "react";

const Button = ({ color, text, setText }) => {
  const handleClick = () => {
    setText(`Setting text from ${text}`);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {text}
    </button>
  );
};
export default Button;
