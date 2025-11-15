import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UserForm from "./components/UserForm";
import axios from "axios";

const App = () => {
  const [cart, setCart] = useState([]);
  debugger;
  const [user, setUser] = useState({ name: "", email: "", address: "" });

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  const handleUserChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const submitOrder = async () => {
    if (!user.name || !user.email || !user.address) {
      alert("Please fill all details!");
      return;
    }

    try {
      debugger
      await axios.post("http://localhost:5000/api/orders", {
        ...user,
        cart,
      });
      alert("Order Saved Successfully!");
      setCart([]);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 React Cart with Database</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <UserForm user={user} handleChange={handleUserChange} submitOrder={submitOrder} />
    </div>
  );
};

export default App;
