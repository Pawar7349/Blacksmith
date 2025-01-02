import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTools, faIndustry, faShippingFast, faDraftingCompass, faWrench } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Industrial Fabrication',
    description: 'High-quality fabrication services tailored to meet the specific needs of industrial clients.',
    icon: faIndustry,
  },
  {
    title: 'General Engineering Work',
    description: 'Comprehensive engineering solutions, from design to implementation, ensuring optimal performance and reliability.',
    icon: faCog,
  },
  {
    title: 'Custom Machinery Design',
    description: 'Design and development of custom machinery to enhance operational efficiency and productivity.',
    icon: faDraftingCompass,
  },
  {
    title: 'Maintenance and Repair',
    description: 'Expert maintenance and repair services to keep your equipment running smoothly and minimize downtime.',
    icon: faWrench,
  },
  {
    title: 'Metal Cutting and Welding',
    description: 'Precision metal cutting and welding services for a wide range of applications and industries.',
    icon: faTools,
  },
  {
    title: 'Logistics and Supply',
    description: 'Reliable logistics and supply services to ensure timely delivery of materials and finished products.',
    icon: faShippingFast,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 p-8 min-h-screen flex flex-col items-center justify-center font-times">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <FontAwesomeIcon icon={service.icon} className="text-4xl text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
