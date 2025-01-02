import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 p-8 min-h-screen flex flex-col items-center justify-center font-times">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="5" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
        <div className="text-center mt-8">
          <p className="text-lg">Email: <a href="mailto:blacksmithengineering23@gmail.com" className="text-blue-500">blacksmithengineering23@gmail.com</a></p>
          <p className="text-lg">Phone: <a href="mob:+919552696540" className="text-blue-500">+919552696540</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
