import React, { useState } from "react";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full bg-gray-100 text-sm text-gray-600 font-light">
      {/* Pre-Footer */}
      <div className="w-full border-b border-gray-300 py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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

        {/* Live Chat */}
        <div>
          <h3 className="text-gray-800 font-medium mb-2">Live Chat</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-700 transition">
                Start Chat Now
              </a>
            </li>
            <li className="text-xs text-gray-500">
              Available 9am – 6pm GMT
            </li>
          </ul>
        </div>

        {/* Developer */}
        <div className="relative">
          <h3 className="text-gray-800 font-medium mb-2">Developer</h3>
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="hover:text-gray-700 transition"
          >
            JodiKKY
          </button>
          {showPopup && (
            <div className="absolute bg-white shadow-lg p-4 rounded-lg mt-2 w-48">
              <ul className="space-y-2">
                <li><a href="https://github.com/JodiKKY" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a></li>
                <li><a href="https://linkedin.com/in/jodiyirenkyi" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">LinkedIn</a></li>
                <li><a href="https://twitter.com/JodiKKY" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Twitter</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="w-full py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
        <a href="#" className="flex items-center gap-2 hover:text-gray-700 transition">
          <i className="fa-solid fa-globe"></i>
          <span>ENGLISH (INTL)</span>
        </a>

        <ul className="flex flex-wrap gap-4 justify-center sm:justify-end">
          <li><a href="#" className="hover:text-gray-700 transition">Sitemap</a></li>
          <li><a href="/Legal" className="hover:text-gray-700 transition">Legal & Privacy</a></li>
          <li><a href="#" className="hover:text-gray-700 transition">Cookies</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
