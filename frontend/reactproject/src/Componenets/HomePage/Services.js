import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Ares</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <SingleService service={service}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
