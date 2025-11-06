import React from "react";
import "./Card.css";
import Button from "../Button/Button";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
  link?: string;
  linkLabel?: string;
  theme?: "light" | "dark";
  onAction?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, link, width = 340, height = 190, linkLabel = "View Project", theme, onAction }) => {
  const handleClick = () => {
    if (onAction) {
      onAction();
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className={`card${theme ? ` card--${theme}` : ""}`}> 
      <img src={image} alt={title} className="card__image" width={width} height={height} />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        <Button variant="primary" onClick={handleClick}>{linkLabel}</Button>
      </div>
    </div>
  );
};

export default Card;
