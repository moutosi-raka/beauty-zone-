import React from 'react';

const ServicesCart = ({service}) => {
    const {  service_name, price, details, img } = service;
    return (
        <div className='px-8'>
        <div className='text-center px-4 ml-4'>
           <img className='rounded-full w-64 h-64 border-8 border-white' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h2 className="text-4xl font-bold dancing">{service_name}</h2>
        <p>{details.slice(0,100) + "..."}</p>
        <p className='font-bold'>Price : {price}</p>
        </div>
    </div>
    );
};

export default ServicesCart;