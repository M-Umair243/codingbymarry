import React from 'react'
import Header from './componentsport/Head/header';
import "./app.css";
import Home from "./componentsport/Hero/Home";
import Features from './componentsport/Features/features';
import Portofolio from './componentsport/Portofolio/Portofolio';
import Resume from './componentsport/Resume/Resume';
import Testional from './componentsport/Testimonial/Testional';
import Blog from './componentsport/Blog/Blog';
import Contact from './componentsport/Contact/contact';
import Footer from './footer';
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Features/>
      <Portofolio/>
      <Resume/>
      <Testional/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
