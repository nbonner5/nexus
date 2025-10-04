import React from "react";
import "./Input.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder = "Enter text...", ...props }) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <input className="input" placeholder={placeholder} {...props} />
  </div>
);

export default Input;
