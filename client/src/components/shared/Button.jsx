import React from "react";

const Button = ({
  text,
  onClick,
  className,
  type = "button",
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      {...props}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
