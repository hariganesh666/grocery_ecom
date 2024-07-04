import React from "react";
import "../App.css";
function Item({ item, cartItems, handleAddToCart }) {
  const cartItem = cartItems.find((cart) => cart.id === item.id);
  return (
    <div className="grocery-item">
      <img src={item.image} alt={item.title} />
      <h3>{item?.title}</h3>
      <p>{item?.price}</p>
      <button onClick={() => !cartItem && handleAddToCart(item)}>
        {cartItem ? "Added" : "  Add to Cart"}
      </button>
    </div>
  );
}

export default Item;
