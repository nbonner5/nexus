import React from "react";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "icon";
  loading?: boolean;
  icon?: React.ReactNode;
  theme?: "light" | "dark";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", loading = false, icon, theme = "dark", children, ...props }) => {
  return (
    <button
      className={`btn btn--${variant} btn--${theme}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className="btn__spinner" /> : icon ? <span className="btn__icon">{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
