import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceDetails = ({service}) => {
    const {service_name, img, price, details} = service;
    return (
         <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={img} alt="" className="w-full h-60 sm:h-96 border-8 border-white object-cover" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark-pink-gradient ">
                <div className="space-y-1">
                    <h1 className="inline-block text-2xl font-semibold sm:text-8xl dancing">{service_name}</h1>
                    <p className="text-xl dark:text-gray-400">Price: {price}
                    </p>
                    
                </div>
            </div>
        </div>
        <div className='w-1/2 my-5 mx-auto text-black'>
          <p>{details}</p>
        </div>
        <div className='text-right'>
        <Link to='/services'>
                    <button className="btn btn-link text-pink-600">Services Page <FaArrowRight className='ml-3'></FaArrowRight></button>
                    </Link>
        </div>
    </div>
    );
};

export default ServiceDetails;