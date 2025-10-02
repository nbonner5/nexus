import React from "react";
import "./Button.css";

export interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "icon";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, icon, onClick, variant = "primary", disabled, loading }) => (
  <button
    className={`btn btn--${variant}${disabled ? " btn--disabled" : ""}`}
    onClick={onClick}
    disabled={disabled || loading}
    aria-busy={loading ? "true" : undefined}
  >
    {variant === "icon" && icon}
    {loading ? <span className="btn__spinner" /> : children}
  </button>
);

export default Button;
