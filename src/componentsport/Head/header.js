import React, { useState } from "react";
import "./header.css";
import logo from "../pics/logo2.jpg";
function Header() {
  // when scroll header at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  // toggle menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="logo">
            <img className="logo-img" src={logo} alt="" />
            <span className="logo-txt">MArry Coder</span>
          </div>
          <div className="nav-link">
            {/* <ul className='link f-flex uppercase'> */}
            <ul
              className={Mobile ? "nav-links-mobile" : "link f-flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#portofolio">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button className="home-btn">HIRE ME</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"></section>
    </>
  );
}

export default Header;
