import React from "react";

function PlanOptions({ image, planTitle, planPricing, freeMonths }) {
  return (
    <div className="card__option">
      <div className="card__option-image">
        <img src={image} alt="" />
      </div>
      <div className="card__option-info">
        <h4>{planTitle}</h4>
        <p>{planPricing}</p>
        <p>{freeMonths}</p>
      </div>
    </div>
  );
}

export default PlanOptions;
