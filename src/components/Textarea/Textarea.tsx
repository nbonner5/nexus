import React from "react";
import "./Textarea.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder = "Enter details...", ...props }) => (
  <div className="textarea-group">
    {label && <label className="textarea-label">{label}</label>}
    <textarea className="textarea" placeholder={placeholder} {...props} />
  </div>
);

export default Textarea;
