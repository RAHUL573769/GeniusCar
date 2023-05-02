import React from "react";
import imag1 from "../../genius-car-resources-main/assets/images/banner/1.jpg";
import imag2 from "../../genius-car-resources-main/assets/images/banner/2.jpg";
import imag3 from "../../genius-car-resources-main/assets/images/banner/3.jpg";
import imag4 from "../../genius-car-resources-main/assets/images/banner/4.jpg";
import imag5 from "../../genius-car-resources-main/assets/images/banner/5.jpg";
import imag6 from "../../genius-car-resources-main/assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imag1} className="w-full" alt="" />
          <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 top-1/2">
            <h1 className="text-5xl font-bold text-white ">
              Affordable Car Services
              <br />
              Price For Car Services
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 top-3/4">
            <p className="text-2xl font-bold text-white ">
              Placeat accusamus iure optio, eaque ducimus voluptas? Nemo
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imag2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imag3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imag4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
