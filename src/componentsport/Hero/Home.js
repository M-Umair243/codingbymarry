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

            <div className="hero-btn d-flex">
              <button className="resumeBtn"
                onClick={() => {
                  downloadResume(RESUME_URL);
                }}
              >
                Download Resume
              </button>
              {/* <div className="col-1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn-shadow">
                    <a href="https://www.facebook.com/share/kv3cnsJUNoKV3Bxt/" target="_blank">
                      {" "}
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </button>
                  <button className="btn-shadow">
                    <a href="https://www.instagram.com/muhammadumair.243/profilecard/?igsh=MnVnYXpoZ2tud2Zj" target="_blank">
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </a>
                  </button>
                  <button className="btn-shadow">
                    <a href=" https://www.linkedin.com/in/muhammadumair243/" target="_blank">
                      {" "}
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-1">
                <h4>BEST SKILLS ON</h4>
                <button className="btn-shadow">
                <a href="https://www.linkedin.com/in/muhammadumair243/" target="_blank">
                      {" "}
                      <img src={skill1} alt="" />
                    </a>
                  
                </button>
                <button className="btn-shadow">
                <a href="https://github.com/M-Umair243" target="_blank">
                      {" "}
                      <img src={skill2} alt="" />
                    </a>
               
                </button>
                <button className="btn-shadow">
                
                  <a href="https://www.figma.com/proto/uGMiOr0sehwI3XzSqats5c/Learn-React-with-10-Projects-(Copy)?node-id=0-1&t=m0mu4vncOseIrDR1-1" target="_blank">
                      {" "}
                      <img src={skill3} alt="" />
                    </a>
               
                </button>
              </div> */}
            </div>
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
