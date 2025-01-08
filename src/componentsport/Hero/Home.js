import React from "react";
import "../Hero/home.css";
import { Typewriter } from "react-simple-typewriter";
import hero from "../pics/hero-img.png";
import skill1 from "../pics/linkdin.png";
import skill2 from "../pics/github.png";
import skill3 from "../pics/figma.png";
const RESUME_URL = "http://localhost:3000/myresume.pdf";
const Home = () => {
  const downloadResume = (url) => {
    const fileName = url.split("/").pop();
    const resumeTag = document.createElement("a");
    resumeTag.href = url;
    resumeTag.setAttribute("download", fileName);
    document.body.appendChild(resumeTag);
    resumeTag.click();
    resumeTag.remove();
  };
  return (
    <>
      <section className="hero" id="home">
        <div className="container f-flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>UMAIR</span>
            </h1>
            <h2>
              A{" "}
              <span>
                <Typewriter
                  words={[" Frontend Developer", "React Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              I'm a Frontend Developer❤️ who strives to develop beautiful web
              apps through carefully crafted code and user-friendly design👨‍🎨. A
              Front-end Developer is a tech industry professional who builds the
              front portion of websites that customers, guests, or clients use
              on a daily basis .{" "}
            </p>

            <a href="" className="hero-btn d-flex">
              <button className="resumeBtn"
                onClick={() => {
                  downloadResume(RESUME_URL);
                }}
              >
                Download Resume
              </button>
            </a>
          </div>
          <div className="right">
            <div className="right-img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
