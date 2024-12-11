import React from 'react';

const achievements = [
  { image: 'achievement1.jpg', description: 'Achievement 1 description' },
  { image: 'achievement2.jpg', description: 'Achievement 2 description' },
  { image: 'achievement3.jpg', description: 'Achievement 3 description' },
  { image: 'achievement4.jpg', description: 'Achievement 4 description' },
  { image: 'achievement5.jpg', description: 'Achievement 5 description' },
];

const Achievements = () => {
  return (
    <section id="achievements" className="p-8">
      <h2 className="text-2xl font-bold mb-6">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {achievements.map((ach, idx) => (
          <div key={idx} className="bg-white shadow-lg p-4 rounded-md text-center">
            <img src={ach.image} alt={`Achievement ${idx + 1}`} className="w-full h-40 object-cover rounded-md" />
            <p className="mt-2">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
