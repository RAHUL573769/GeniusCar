import React from "react";

const BannerIte = ({ banner }) => {
  const { image, prev, id, next } = banner;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carausel-image">
        {" "}
        <img src={image} className="w-full" alt="" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/4">
        <h1 className="text-5xl font-bold text-white ">
          Affordable Car Services
          <br />
          Price For Car Services
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 px-5">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerIte;
