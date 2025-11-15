import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
