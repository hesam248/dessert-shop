/* eslint-disable no-unused-vars */

import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="cart-container">
      <h3>Your Cart ({itemCount})</h3>
      <ul className="cart-items-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <div className="item-main">
              <img 
                src={`../../${item.image}`} 
                alt={item.name} 
                className="item-thumbnail"
              />
              <span className="item-name">{item.name}</span>
              
              {/* کنترل‌های مقدار */}
              <div className="quantity-controls">
                <span className="quantity-display">{item.quantity}</span>
              </div>
              
              <span className="item-subtotal">
                 {(item.price * item.quantity).toFixed(2)}$
              </span>
            </div>
            
            {/* زیرلیست برای جزئیات بیشتر */}
            {/* <ul className="item-details-sublist">
              <li>Price per item: ${item.price.toFixed(2)}</li>
              <li>Selected quantity: {item.quantity}</li>
            </ul> */}
          </li>
        ))}
      </ul>
      
      <h4 className="cart-total">
        Order Total<span>${total.toFixed(2)}</span>
      </h4>
      
      <button className="confirm-order-btn">
        <h3>Confirm Order</h3>
      </button>
    </div>
  );
};

export default Cart;