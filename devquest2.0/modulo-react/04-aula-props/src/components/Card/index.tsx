import type React from "react";
import "./Card.css";

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="card">
      {" "}
      {children || <p>Nenhum conteúdo disponivel</p>}{" "}
    </div>
  );
};

export default Card;
