import React from "react";
import "./Resume.css";

export const Card = (props) => {
  return (
    <>
      <div className="box btn-shadow">
        <div className="box-content">
          <div className="title-content d-flex">
            <div className="title">
              <h1>{props.title}</h1>
              <span>{props.year}</span>
            </div>
            <div className="rate">
              <button className="btn-shadow rate">{props.rate}</button>
            </div>
          </div>
          <hr />
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
