import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { _id, price, title, img } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-500 font-semibold">
            Price:{price}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Check Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
