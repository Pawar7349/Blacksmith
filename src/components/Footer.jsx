import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 font-times">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Blacksmith Engineering. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
