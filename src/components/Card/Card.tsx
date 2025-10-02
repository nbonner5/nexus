import React from "react";
import "./Card.css";
import Button from "../Button/Button";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link, linkLabel = "View Project" }) => (
  <div className="card">
    <img src={image} alt={title} className="card__image" />
    <div className="card__body">
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>
      <Button variant="primary" onClick={() => window.open(link, "_blank")}>{linkLabel}</Button>
    </div>
  </div>
);

export default Card;
