import React from "react";
import person from "../../genius-car-resources-main/assets/images/about_us/parts.jpg";
import parts from "../../genius-car-resources-main/assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  my-14">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-1/2">
            {" "}
            <img
              src={person}
              className=" w-4/5 h-full max-w-sm rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className=" w-3/5 rounded-lg shadow-2xl absolute right-5 top-1/2 "
            />
          </div>

          <div>
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">
                We are qualified for this Field
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
