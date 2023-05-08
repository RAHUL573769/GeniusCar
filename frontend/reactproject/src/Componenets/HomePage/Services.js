import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";
import { useQuery } from "react-query";

const Services = () => {
  // const [services, setServices] = useState([]);

  const { data: services1 = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://backend-rudrarahul77-gmailcom.vercel.app/services"
      );
      const services = await res.json();
      return services;
    }
  });
  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // });
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Ares</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services1.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
