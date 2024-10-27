import React from 'react';
import './Service.css'; // Import specific CSS for Service

const Service = ({ title, description }) => {
  return (
    <div className="service">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Service;
