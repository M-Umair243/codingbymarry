import React from "react";
import Card from "./Card";

import "./Blog.css";
import BlogApi from "./BlogApi";

function Blog() {
  return (
    <>
      <section className="portofolio blog" id="blog">
        <div className="container">
          <div className="heading text-center">
            <h4>Let's See My Services</h4>
            <h1>MY SERVICES</h1>
          </div>
          <div className="content grid">
            {BlogApi.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  date={val.date}
                  title_one={val.title_one}
                  desc_one={val.desc_one}
                  title_two={val.title_two}
                  desc_two={val.desc_two}
                  title_three={val.title_three}
                  desc_three={val.desc_three}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
