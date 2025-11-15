import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 1500 },
];

const ProductList = ({ addToCart }) => (
  <div>
    <h2>Products</h2>
    {products.map((p) => (
      <div key={p.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
        <h3>{p.name}</h3>
        <p>₹{p.price}</p>
        <button onClick={() => addToCart(p)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
