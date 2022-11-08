import React from "react";
import img1 from "../../../assets/about us/img4.jpg";

const About = () => {
  return (
    <div className="hero px-20">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img1} alt="" className=" rounded-lg shadow-2xl" />
        <div className="pl-8">
          <h1 className="text-7xl font-extrabold dancing pt-2">Not Your Everyday Spa</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="btn bg-pink-400 w-40">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
