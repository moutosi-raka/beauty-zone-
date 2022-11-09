import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import './ServiceDetailsReview.css'
import ServiceReview from './ServiceReview';

const ServiceDetailsReview = () => {
    const service = useLoaderData();

    return (
      <div className='bg-pink-100 py-8'>
       <ServiceDetails 
       service= {service}
       >
       </ServiceDetails>

       <hr className='border-2 w-3/4 mx-auto my-8 border-white' />
       <ServiceReview service= {service}></ServiceReview>
      </div>
    );
};

export default ServiceDetailsReview;