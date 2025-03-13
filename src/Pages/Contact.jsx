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
          Have questions or want to collaborate? Reach out to us!
        </p>

        {/* Contact Info */}
        <div className="mb-6 text-white space-y-3">
          <p className="text-lg"><span className="font-semibold text-yellow-400">📍 Address:</span> Accra, Ghana</p>
          <p className="text-lg"><span className="font-semibold text-yellow-400">📞 Phone:</span> +233 123 456 789</p>
          <p className="text-lg"><span className="font-semibold text-yellow-400">✉️ Email:</span> info@conceptmabelles.com</p>
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

        {/* Google Map Embed */}
        <div className="mt-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31878.477525787405!2d-0.20545133239669786!3d5.603717992281186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99c4c2caa1f5%3A0x8f8b58b72b8c62e8!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1710245483812!5m2!1sen!2sgh"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
