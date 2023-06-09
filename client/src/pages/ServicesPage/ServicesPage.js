import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./ServicesPage.css";
import { FaGreaterThan } from "react-icons/fa";
import ServicesCartDetails from "./ServicesCartDetails";
import useTitle from "../../Hooks/useTitle";

const ServicesPage = () => {
    const services = useLoaderData();

    useTitle('Services');
    return (
        <div>
        <div className="text-center services-banner pt-20  text-white mb-8 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-9xl dancing font-bold mb-2">Our Services</h1>
          <p>
            {" "}
            <Link to="/">Home</Link>{" "}
            <FaGreaterThan className="inline mx-2"></FaGreaterThan>Our Services
          </p>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-5xl text-pink-500 font-bold mb-3 ">Our Services</h1>
          <p>
            We are try to our best Services. This is our popular services. 
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 m-5 md:m-20">
            {
              services.map(service => <ServicesCartDetails
              key={service._id}
              service={service}
              ></ServicesCartDetails>)
            }
        </div>
      </div>
    );
};

export default ServicesPage;