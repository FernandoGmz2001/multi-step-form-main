import React from "react";
import CardHeader from "../common/Card/CardHeader";
import PlanOptions from "../ui/PlanOptions/PlanOptions";
import Plan from "../../utils/PlanOptions.json";

function Card2() {
  return (
    <div className="card">
      <CardHeader
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />
      <div className="card__body">
        {Plan.map((item) => {
          <PlanOptions
            image={item.Image}
            planTitle={item.Title}
            planPricing={item.Price}
            freeMonths={item.FreeMonths}
          />;
        })}
      </div>
    </div>
  );
}

export default Card2;
