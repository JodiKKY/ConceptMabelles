import React from "react";
import Img from "../assets/navbar.png";

const OurStory = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Img})` }}
    >
      {/* Overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Glassmorphism Effect Card */}
      <div className="relative max-w-4xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg p-10 text-center border border-white/30">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-md">
          Our Story
        </h1>
        <p className="text-lg text-white leading-relaxed">
          <span className="font-semibold text-yellow-400">Concept Mabelles</span> is a Ghanaian clothing brand that brings 
          <span className="font-semibold text-yellow-400"> elegance, style, and quality</span> to your wardrobe.
          We offer a wide range of men’s, women’s, and children’s clothing, along with vibrant, high-quality African fabrics.
        </p>
        <p className="text-lg text-white leading-relaxed mt-4">
          Whether you’re looking for <span className="font-semibold text-yellow-400">everyday elegance</span> or something bold and unique, 
          our pieces are designed to make you stand out anywhere you go.
          We perfectly blend tradition with modern fashion, ensuring that every outfit reflects <span className="font-semibold text-yellow-400">confidence and sophistication</span>.
        </p>
        <p className="text-2xl font-semibold text-yellow-300 mt-6 italic">
          "Dress in Style, Walk in Style."
        </p>
      </div>
    </div>
  );
};

export default OurStory;
