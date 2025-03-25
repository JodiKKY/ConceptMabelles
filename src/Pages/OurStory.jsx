import React from "react";
import Img from "../assets/navbar.png";

const OurStory = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Img})` }}
      role="img"
      aria-label="Background image of Concept Mabelles branding"
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

      
      <div className="relative max-w-4xl sm:max-w-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center border border-yellow-400/40">
        <h1 className="text-5xl sm:text-4xl font-extrabold text-yellow-300 mb-6 drop-shadow-lg">
          Our Story
        </h1>
        <p className="text-lg sm:text-base text-gray-200 leading-relaxed">
          <span className="font-semibold text-yellow-300">Concept Mabelles</span> is a Ghanaian clothing brand that brings 
          <span className="font-semibold text-yellow-300"> elegance, style, and quality</span> to your wardrobe.
          We offer a wide range of men’s, women’s, and children’s clothing, along with vibrant, high-quality African fabrics.
        </p>
        <p className="text-lg sm:text-base text-gray-200 leading-relaxed mt-4">
          Whether you’re looking for <span className="font-semibold text-yellow-300">everyday elegance</span> or something bold and unique, 
          our pieces are designed to make you stand out anywhere you go.
          We perfectly blend tradition with modern fashion, ensuring that every outfit reflects <span className="font-semibold text-yellow-300">confidence and sophistication</span>.
        </p>
        <p className="text-2xl sm:text-xl font-semibold text-yellow-400 mt-6 italic drop-shadow-md">
          "Dress in Style, Walk in Style."
        </p>
      </div>
    </div>
  );
};

export default OurStory;
