
import React, { useState, useEffect } from "react";




const Aboutus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "http://static1.squarespace.com/static/54d026c2e4b03eabc42f5b00/t/595e72eed2b857ae9632c168/1499362038485/?format=1500w",
    "https://www.learnguitarmalta.com/wp-content/uploads/2017/12/Power-chord-riffs.jpg",
    "https://www.premierguitar.com/media-library/image.jpg?id=25728500&width=1200&height=600&coordinates=0%2C20%2C0%2C20",

  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  },);


  return (
    <div className="Aboutsection">

      <div className="section1">
        <div className="row image1 w-75 h-75 mt-5 ">
          <div className="col-md-6">
            <img
              className="ms-5 img-fluid"
              src={slides[currentSlide]}
              
            />
          </div>
          <div className="col-md-6 para mt-2">
            <h1 className="fs-1 mx-5">Welcome To Beyondriffs</h1>
            <p className="fs-5 mx-5">
              Beyondriffs is a self-employed company that offers guitar, ukulele, vocals, keyboard, and music production classes in Ghaziabad, Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;










