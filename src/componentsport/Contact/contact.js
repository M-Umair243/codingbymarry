import React, { useState } from "react";
import "./contact.css";
import contact1 from "./img/img7.jpeg";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.
        My Phone Number is ${data.phone}.
        My Email address is ${data.email}.
        My Subject on ${data.subject}.
        Here is my message i want to say : ${data.message}
        `
    );
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>
          <div className="content d-flex">
            <div className="left">
              <div className="box box-shadow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>M UMAIR</h1>
                  <p>
                    i am available for freelance work.Connect with me via call
                    in to my account
                  </p>
                  <br />
                  <p>Phone:+923077633024</p>
                  <p>Email:Engineerumair243@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f-flex">
                    <a href="https://www.facebook.com/share/kv3cnsJUNoKV3Bxt/" target="_blank" className="btn-shadow">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammadumair243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" className="btn-shadow">
                    <i class="fa-brands fa-linkedin-in"></i>                    </a>
                    <a href="https://www.instagram.com/muhammadumair.243/profilecard/?igsh=MnVnYXpoZ2tud2Zj " target="_blank" className="btn-shadow">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right box-shadow">
              <form onSubmit={formSubmit}>
                <div className="f-flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>YOUR NUMBER</span>
                    <input
                      type="phone"
                      name="phone"
                      value={data.phone}
                      onChange={inputEvent}
                    />
                  </div>
                </div>

                <div className="input">
                  <span>YOUR EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT</span>
                  <input
                    type="subject"
                    name="subject"
                    value={data.subject}
                    onChange={inputEvent}
                  />
                </div>
                <div className="input">
                  <span>MESSAGE</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                  ></textarea>
                </div>
                <button className="btn-shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-down"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
