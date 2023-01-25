import React from "react";
import CardHeader from "../common/Card/CardHeader";

function Card1() {
  return (
    <div className="card">
      <CardHeader
        title="Personal info"
        content="Please provide your name, email address, and Phone number."
      />
      <div className="card__form">
        <div className="card__form-group">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div className="card__form-group">
          <label htmlFor="">Email Address</label>
          <input type="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="card__form-group">
          <label htmlFor="">Phone Number</label>
          <input type="number" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </div>
  );
}

export default Card1;
