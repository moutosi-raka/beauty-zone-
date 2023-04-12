import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='text-center banner pt-12 md:pt-28 text-white  mb-20 h-[70vh] md:h-[90vh]'>
            <h1 className="text-3xl md:text-6xl lg:text-9xl dancing font-bold mb-8">Spa Salon</h1>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold mb-5'>ASTHETIC & PLEASING</h2>
            <h4 className='text-sm md:text-xl lg:text-2xl font-semibold'>THE LASTING EXPERIENCE</h4>
            
        </div>
    );
};

export default Banner;