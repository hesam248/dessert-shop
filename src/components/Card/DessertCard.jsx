/* eslint-disable no-undef */
// src/components/DessertCard/DessertCard.jsx
import React from 'react';
import './DessertCard.css';

const DessertCard = ({ dessert,onAdd}) => {

  return (
    <div className="dessert-card">
      <img src={dessert.image} alt={dessert.name} className="dessert-image" />
      <button 
            className="add-to-cart-btn"
           onClick={()=>{onAdd(dessert)}}
          >
            <i className='fas fa-shopping-cart'></i>
            Add to Cart
          </button>
      <div className="dessert-content">
      <p className="dessert-description">{dessert.category}</p>
        <h3>{dessert.name}</h3>
        <div className="dessert-footer">
          <span className="price">${dessert.price.toFixed(2)}</span>
      
        </div>
      </div>
    </div>
  );
};

export default DessertCard;