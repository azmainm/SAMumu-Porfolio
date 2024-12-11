import React from 'react';

const Card = ({ title, description, link, image }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
      {image && <img src={image} alt={title} className="rounded-lg mb-4" />}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline mt-2 inline-block"
        >
          View
        </a>
      )}
    </div>
  );
};

export default Card;
