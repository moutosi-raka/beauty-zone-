import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import './ServiceDetailsReview.css'

const ServiceDetailsReview = () => {
    const service = useLoaderData();

    return (
      <div>
       <ServiceDetails 
       key={service._id}
       service= {service}
       >
       </ServiceDetails>
      </div>
    );
};

export default ServiceDetailsReview;