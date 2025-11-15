import React from "react";

const UserForm = ({ user, handleChange, submitOrder }) => (
  <div style={{ marginTop: "20px" }}>
    <h2>Enter Details</h2>
    <input name="name" placeholder="Name" value={user.name} onChange={handleChange} /><br /><br />
    <input name="email" placeholder="Email" value={user.email} onChange={handleChange} /><br /><br />
    <textarea name="address" placeholder="Address" value={user.address} onChange={handleChange} /><br /><br />
    <button onClick={submitOrder}>Submit Order</button>
  </div>
);

export default UserForm;
