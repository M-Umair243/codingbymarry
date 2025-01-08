import React from "react";
import TestimonialApi from "./TestimonialApi";

function Slide({
  id,
  image,
  design,
  name,
  offcer,
  post,
  date,
  desc,
  valueIndex,
  index,
}) {
  let position = "nextSlide";
  if (valueIndex === index) {
    position = "activeSlide";
  }
  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === TestimonialApi.length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <>
      <article className={`d-flex ${position}`} key={id}>
        <div className="left box-shadow">
          <div className="img">
            <img className="testinomialImg" src={image} alt="" />
          </div>
          <div className="mtop details">
            <span primary_color>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
          <div className="icon">
            <div className="quote">
              <i className="fa-solid fa-quote-left"></i>
            </div>
          </div>
          <div className="content box-shadow mtop">
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Slide;
