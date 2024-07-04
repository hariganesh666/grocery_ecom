import React from "react";
import lodash from "lodash";
function Cart({ cartItems }) {
  return (
    <div className="cart text-align-center">
      <h2>Cart</h2>
      <ul>
        {cartItems?.map((item, i) => (
          <li key={item?.id}>
            {" "}
            {item?.title} - {item?.price}
          </li>
        ))}
      </ul>
      <h4>Total {lodash.sum(cartItems?.map((item) => item?.price))}</h4>

      <button className="btn btn-success" onClick={()=>alert("Added successfully")}>
        place order 


      </button>
    </div>
  );
}

export default Cart;
