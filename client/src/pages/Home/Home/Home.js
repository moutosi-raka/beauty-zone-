import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Gallary></Gallary>
        
        </div>
    );
};

export default Home;