import React from 'react';
import controlPan1 from '../assets/control_panel/control_pan1.png';
import controlPan2 from '../assets/control_panel/control_pan2.png';
import frame1 from '../assets/laser_cutting_frame/frame1.png';
import frame2 from '../assets/laser_cutting_frame/frame2.png';
import machineCover1 from '../assets/machine_cover_door/machine_cover1.png';
import machineCover2 from '../assets/machine_cover_door/machine_cover2.png';
import table1 from '../assets/table/table1.png';
import table2 from '../assets/table/table2.png';
import table3 from '../assets/table/table3.png';
import trolley1 from '../assets/trolley/trolley1.png';
import trolley2 from '../assets/trolley/trolley2.png';
import trolley3 from '../assets/trolley/trolley3.png';
import trolley4 from '../assets/trolley/trolley4.png';
import trolley5 from '../assets/trolley/trolley5.png';

const products = [
  {
    category: 'Control Panel',
    description: 'Our control panels are designed for high performance and reliability in industrial environments.',
    images: [controlPan1, controlPan2],
  },
  {
    category: 'Laser Cutting Frame',
    description: 'Precision-crafted laser cutting frames that deliver superior accuracy and durability.',
    images: [frame1, frame2],
  },
  {
    category: 'Machine Cover Door',
    description: 'Robust machine cover doors to ensure safety and protection of your equipment.',
    images: [machineCover1, machineCover2],
  },
  {
    category: 'Table',
    description: 'High-quality tables designed for industrial use, offering strength and stability.',
    images: [table1, table2, table3],
  },
  {
    category: 'Trolley',
    description: 'Versatile and sturdy trolleys to facilitate easy transportation of goods within your facility.',
    images: [trolley1, trolley2, trolley3, trolley4, trolley5],
  },
];

const Product = () => {
  return (
    <section id="products" className="bg-gray-100 p-8 min-h-screen flex flex-col items-center justify-center font-times">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">{product.category}</h3>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <div key={idx} className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={image} alt={`${product.category} ${idx + 1}`} className="w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
