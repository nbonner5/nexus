import React from "react";
import "./Button.css";

export interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "icon";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick, variant = "primary", disabled, loading }) => (
  <button
    className={`btn btn--${variant}${disabled ? " btn--disabled" : ""}`}
    onClick={onClick}
    disabled={disabled || loading}
    aria-busy={loading ? "true" : undefined}
  >
    {variant === "icon" && icon}
    {loading ? <span className="btn__spinner" /> : label}
  </button>
);

export default Button;
