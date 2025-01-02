import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faUsers, faCalendarAlt, faHandshake, faRupeeSign, faIdCard } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="bg-white p-8 min-h-screen flex flex-col items-center justify-center font-times">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faIndustry} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Nature of Business</h3>
                <p className="text-lg text-gray-800">Manufacturer</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Total Number of Employees</h3>
                <p className="text-lg text-gray-800">Upto 10 People</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">GST Registration Date</h3>
                <p className="text-lg text-gray-800">03-12-2024</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faHandshake} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Legal Status of Firm</h3>
                <p className="text-lg text-gray-800">Proprietorship</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faRupeeSign} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Annual Turnover</h3>
                <p className="text-lg text-gray-800">0 - 20 L</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faIdCard} className="text-3xl text-blue-700 mb-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">GST No.</h3>
                <p className="text-lg text-gray-800">27AQRPL2974P1ZS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
