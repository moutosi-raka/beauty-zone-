import React from "react";
import img1 from "../../../assets/about us/img4.jpg";


const About = () => {
  return (
    <div className="hero px-4 md:px-20">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img1} alt="" className=" rounded-lg shadow-2xl" />
        <div className="md:pl-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold dancing pt-2">About Us</h1>
          <p className="py-3 md:py-6">
          Beauty Zone Spa in Dhaka. We neglect hands and feet the most in beauty. The skin of the hand becomes black and rough due to daily dust and sun. Manicure should be done regularly to maintain the radiance of the skin of the hands. You can easily do manicure at home. You don’t have to take the time to go to the parlor. You can easily do manicure sitting at home. Let’s not know how to do a manicure at home. reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
