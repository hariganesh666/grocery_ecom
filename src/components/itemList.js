import React from "react";
import { groceryData } from "../data";
import Item from "./Item";
import '../App.css'
function ItemList({cartItems, handleAddToCart}) {
  return (
    <div className="grocery-list d-flex flex-wrap justify-content-center">
      
      {groceryData?.map((ite) => (
        <div key={ite}>
          <Item item={ite} 
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
