import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import M1 from "../assets/Display1.jpg";
import M2 from "../assets/Display 2.jpg";
import M3 from "../assets/Display3.jpg";
import M4 from "../assets/Display4.jpg";
import M5 from "../assets/Display5.jpg";
import M6 from "../assets/06.png";
import bg from "../assets/background.mp4";

const products = [
  { img: M1,  price: "Coming soon" },
  { img: M2,  price: "Coming soon" },
  { img: M3,  price: "Coming soon" },
  { img: M4,  price: "Coming soon" },
  { img: M5,  price: "Coming soon" },
  { img: M6,  price: "$Coming soon" },
];

const Homepage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000; 

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <section className="container min-h-screen flex items-center justify-center text-white relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center">
          {/* Overlay Box */}
          <div className="bg-black bg-opacity-0 p-4 rounded-lg">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Welcome to Concept Mabelles
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              AUTHENTIC AFRICAN FABRICS AND CLOTHING FOR UNISEX AND KIDS
            </p>
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
              <p className="text-xl text-red-500 mt-2 font-bold">Launch Time Reached!</p>
            ) : (
              <p className="text-lg font-medium text-gray-200 bg-black bg-opacity-50 px-3 py-1 rounded-md">
  Launching in:{" "}
  <span className="font-bold text-white">
    {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
  </span>
</p>


            )}
          </div>

          <Link
            to="/shopping"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all bg-opacity-10"
          >
            Shop Now
          </Link>
        </section>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8 text-center w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
        <p className="text-gray-600 mb-6">Check out our best sellers!</p>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden w-full">
          <div className="marquee">
            {products.concat(products).map((product, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm min-w-[250px] inline-block"
              >
                <img className="rounded-t-lg w-full h-60 object-cover" src={product.img} alt={product.name} />
                <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mb-3 font-normal text-gray-700">Price: {product.price}</p>
                  <Link
                    to="/Shopping"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Buy Now
                    <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/Shopping" className="mt-6 inline-block text-gray-600 hover:underline text-lg font-semibold">
          View More
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
