import React from 'react';
import '../styles/categoriescard.css';

const CategoriesCard = ({ imageSrc, heading, description }) => {
  return (
    <div className="categories-card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default CategoriesCard;
