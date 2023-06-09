import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCart from "./ServicesCart";

const Services = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
   
    return (
        <div className="md:my-16 p-5 md:p-20  bg-pink-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dancing">Our Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          incidunt placeat pariatur odio cumque.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {services.map((service) => (
          <ServicesCart
            key={service._id}
            service={service}
          ></ServicesCart>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to='/services'><button className="btn btn-outline btn-secondary mt-8">See All Services</button></Link>
      </div>
    </div>
    );
};

export default Services;