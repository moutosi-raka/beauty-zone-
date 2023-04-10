import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServicesCart = ({service}) => {
    const { _id, service_name, price, details, img } = service;
    return (
        <div className='px-3 md:px-8'>
        <div className='text-center px-4 ml-4 flex justify-center'>
           <img className='rounded-full w-32 h-32  md:w-40 md:h-40 lg:w-60 lg:h-60  border-8 border-white' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h2 className="text-4xl font-bold dancing">{service_name}</h2>
        <p>{details.slice(0,100) + "..."}</p>
        <p className='font-bold'>Price : {price}</p>
        <Link to={`/service/${_id}`}><button className="btn btn-link text-pink-400  w-1/2 border-0 hover:text-pink-700 py-1">See Details<FaArrowRight className='ml-3'></FaArrowRight></button></Link>
        </div>
    </div>
    );
};

export default ServicesCart;