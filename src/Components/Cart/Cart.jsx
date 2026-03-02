import React from "react";
import "./cart.css";

const Cart = ({ cart,handleRemoveFormCart  }) => {
  console.log(cart);
  return (
    <div className="cart-container">
      {cart.map((bottol) => (
        <div className="cart" key={bottol.id}>
          <div>
            <img src={bottol.img} alt="" />
          </div>
          <div>
            <h3>{bottol.name}</h3>
            <p>${bottol.price}</p>
            <span>
              <button onClick={()=>handleRemoveFormCart(bottol.id)}>Remove</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
