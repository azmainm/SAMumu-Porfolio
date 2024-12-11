import React from 'react';
import { FaRunning, FaPaintBrush, FaMask } from 'react-icons/fa'; // Importing relevant icons from react-icons

const hobbies = [
  { icon: <FaRunning size={60} />, title: 'Sports' },
  { icon: <FaPaintBrush size={60} />, title: 'Painting' },
  { icon: <FaMask size={60} />, title: 'Dancing' },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-teal-600">Hobbies</h2>
      <div className="flex justify-center gap-12">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-teal-600">{hobby.icon}</div>
            <p className="mt-2 text-lg font-semibold">{hobby.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
