import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./ServicesPage.css";
import { FaGreaterThan } from "react-icons/fa";
import ServicesCartDetails from "./ServicesCartDetails";

const ServicesPage = () => {
    const services = useLoaderData();
    return (
        <div>
        <div className="text-center services-banner pt-20  text-white  mb-20">
          <h1 className="text-9xl dancing font-bold mb-2">Our Services</h1>
          <p>
            {" "}
            <Link to="/">Home</Link>{" "}
            <FaGreaterThan className="inline mx-2"></FaGreaterThan>Our Services
          </p>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-5xl text-pink-500 font-bold mb-3 ">Our Services</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            incidunt placeat pariatur odio cumque.
          </p>
        </div>
        <div className="grid mg:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 m-20">
            {
              services.map(service => <ServicesCartDetails
              key={service.service_id}
              service={service}
              ></ServicesCartDetails>)
            }
        </div>
      </div>
    );
};

export default ServicesPage;