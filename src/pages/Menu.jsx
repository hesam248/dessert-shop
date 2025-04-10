/* eslint-disable no-unused-vars */
// src/pages/MenuPage.jsx
import React, { useState } from 'react';
import DessertCard from '../components/Card/DessertCard.jsx';
import desserts from '../../utils/data.js';
import Cart from '../components/Cart/Cart.jsx';
import './Menu.css';

const Menu = () => {
  // eslint-disable-next-line no-undef
  const [cart, setCart] = useState([]);

  const handleAddToCart = (dessert) => {
     
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === dessert.id);
      
      
      if (existing) {
        return prevCart.map(item =>
          item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
          
        );   
              
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  return (
    <div className='main-container'>
      <div className="menu-container">
        <h1>Dessers</h1>
        <div className="desserts-grid">
          {desserts.map(dessert => (
            <DessertCard dessert={dessert} onAdd={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className='cart-container'>
    <Cart cart={cart}/>
    </div>
    </div>
  );
};

export default Menu;