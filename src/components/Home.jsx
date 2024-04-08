import React from "react";
import { Link } from "react-router-dom";
import heroimg from '../assets/heroimage.jpg'


const Home = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="my-container flex flex-col items-center text-center pb-24 lg:pb-56 text-gray-900">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl lg:leading-tight w-full lg:max-w-3xl animate-pulse bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black">
            Welcome To HeroGadget
          </h1>
          <p className="my-6 text-xs sm:text-base  md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to='/shop'><button className="btn-primary">Shop Now</button></Link>
            <Link to='/about'><button className="btn-outlined">Learn More</button></Link>
          </div>
        </div>
      </div>
      <img className="w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 rounded-lg shadow-md " src={heroimg} alt="" />
    </div>
  );
};

export default Home;
