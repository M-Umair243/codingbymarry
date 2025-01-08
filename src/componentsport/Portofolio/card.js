import React, { useState } from "react";

function Card(props) {
  const [Modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!Modal);
  };
  return (
    <>
      <div className="box btn-shadow">
        <div className="image">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d-flex">
          <span onClick={toggleModal}>{props.Category}</span>
          <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* =============popup Modal=============== */}
      {Modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content d-flex">
              <div className="modal-img left">
                <img src={props.image} alt="" />
              </div>
              <div className="modal-text right">
                <span>Featured - Design</span>
                <h1>{props.title}</h1>
                <p>{props.desc_one}</p>
                <p>{props.desc_two}</p>
                <div className="button f-flex mtop">
                  <button className="btn-shadow">
                    LIKETHIS<i className="far fa-thumbs-up"></i>
                  </button>
                  <button className="btn-shadow">
                    VIEWPROJECT<i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <button
                  className="close-modal btn-shadow"
                  onClick={toggleModal}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
