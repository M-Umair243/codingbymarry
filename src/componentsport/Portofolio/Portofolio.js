import React from 'react';
import "./portofolio.css";
import Card from "./card";
import Portofolio_data from "./portofolio_data";
function Portofolio() {
  return (
    <>
      <section className='portofolio top' id='portofolio'>
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PROJECTS</h4>
            <h1>My Projects</h1>
          </div>
          <div className="content grid">
            {Portofolio_data.map((val, index)=>{
              return  <Card key={index} image={val.image} Category={val.Category} totalLike={val.totalLike} title={val.title}/> 
            })}
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Portofolio;
