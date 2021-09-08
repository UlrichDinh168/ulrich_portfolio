import React from "react";

const Input = ({
  type,
  placeholder,
  id,
  name,
  disabled,
  autoFocus,
  onChange,
  value,
  defaultValue,
  label,
  multiline = false,
  error,
  cols,
  rows,
  ...props
}) => {
  const labelEl = label && <label>{label}</label>;
  return (
    <div className="container">
      {labelEl}
      {multiline ? (
        <textarea
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          id={id}
          autoFocus={autoFocus}
          rows={rows || 2}
        />
      ) : (
        <input
          autofill="chrome-off"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          id={id}
          autoFocus={autoFocus}
          cols={cols}
          {...props}
        />
      )}
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
