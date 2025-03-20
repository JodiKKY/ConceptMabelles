import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Pre-Footer Section */}
      <div className="w-full border-b border-gray-300 py-6 px-4 flex flex-col sm:flex-row justify-between text-gray-600 text-sm font-light">
        {/* Socials */}
        <div>
          <h3 className="text-gray-800 font-medium mb-2">Socials</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-700 transition">Instagram</a></li>
            <li><a href="https://m.facebook.com/p/Conceptmabelles-100079546176783/" className="hover:text-gray-700 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-700 transition">Twitter</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-gray-800 font-medium mb-2">About</h3>
          <ul className="space-y-1">
            <li><a href="/OurStory" className="hover:text-gray-700 transition">Our Story</a></li>
            <li><a href="/" className="hover:text-gray-700 transition">Careers</a></li>
            <li><a href="/Contact" className="hover:text-gray-700 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-gray-800 font-medium mb-2">Reviews</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-700 transition">Customer Reviews</a></li>
            <li><a href="#" className="hover:text-gray-700 transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Shipping */}
        <div>
          <h3 className="text-gray-800 font-medium mb-2">Shipping</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-700 transition">Shipping Policy</a></li>
            <li><a href="/Tracking" className="hover:text-gray-700 transition">Track Your Order</a></li>
          </ul>
        </div>
      </div>

      
      <footer className="w-full py-6 px-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm font-light">
        <a href="#" className="flex items-center gap-2 hover:text-gray-700 transition">
          <i className="fa-solid fa-globe"></i>
          <span>ENGLISH (INTL)</span>
        </a>

      
        <ul className="flex gap-6 mt-4 sm:mt-0">
          <li><a href="#" className="hover:text-gray-700 transition">Sitemap</a></li>
          <li><a href="#" className="hover:text-gray-700 transition">Legal & Privacy</a></li>
          <li><a href="#" className="hover:text-gray-700 transition">Cookies</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
