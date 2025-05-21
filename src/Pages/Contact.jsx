import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative" 
      style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?fashion,africa')` }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-4xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg p-10 text-center border border-white/30">
        <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">Contact Us</h1>
        <p className="text-lg text-white mb-6">
          Have questions or want to collaborate ? Reach out to us!
        </p>

        {/* Contact Info */}
        <div className="mb-6 text-white space-y-3">
          <p className="text-lg"><span className="font-semibold text-yellow-400">📍 Address:</span> HP3P+PH5, Accra, Ghana</p>
          <p className="text-lg"><span className="font-semibold text-yellow-400">📞 Phone:</span> +233 244 806 110</p>
          <p className="text-lg"><span className="font-semibold text-yellow-400">✉️ Email:</span> mabelle03yirenkyi@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-white bg-opacity-80 border border-gray-300 focus:ring focus:ring-yellow-400" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-white bg-opacity-80 border border-gray-300 focus:ring focus:ring-yellow-400" />
          <textarea rows="4" placeholder="Your Message" className="w-full p-3 rounded-md bg-white bg-opacity-80 border border-gray-300 focus:ring focus:ring-yellow-400"></textarea>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-md transition-all">
            Send Message
          </button>
        </form>

        {/* Google Map Embed - Using Plus Code HP3P+PH5 */}
        <div className="mt-6">
        <iframe
  className="w-full h-64 rounded-lg"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7937.771632032361!2d-0.2635048754138789!3d5.554262494426137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMTUuNCJOIDDCsDE1JzQ4LjYiVw!5e0!3m2!1sen!2sgh!4v1710245483812!5m2!1sen!2sgh"
  allowFullScreen=""
  loading="lazy"
></iframe>


        </div>
      </div>
    </div>
  );
};

export default Contact;
