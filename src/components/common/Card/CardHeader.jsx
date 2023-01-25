import React from "react";

function CardHeader({ title, content }) {
  return (
    <div className="card__header">
      <h2 className="card__header-title">{title}</h2>
      <p className="card__header-content">{content}</p>
    </div>
  );
}

export default CardHeader;
