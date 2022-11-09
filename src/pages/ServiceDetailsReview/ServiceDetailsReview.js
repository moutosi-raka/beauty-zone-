import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import './ServiceDetailsReview.css'
import ServiceReview from './ServiceReview';

const ServiceDetailsReview = () => {
    const service = useLoaderData();

    return (
      <div className='bg-pink-100 '>
       <ServiceDetails 
       key={service._id}
       service= {service}
       >
       </ServiceDetails>

       <hr className='border-2 w-3/4 mx-auto my-8 border-white' />
       <ServiceReview></ServiceReview>
      </div>
    );
};

export default ServiceDetailsReview;