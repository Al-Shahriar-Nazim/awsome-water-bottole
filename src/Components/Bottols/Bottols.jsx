import React, { use, useEffect, useState } from "react";
import "./bottols.css";
import Bottol from "../Bottol/Bottol";
import {
  addItemToCartLocalStorage,
  getCartFromLocalStorage,
  removeFromLocalStorage,
} from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottols = ({ bottolsPromised }) => {
  const bottols = use(bottolsPromised);
  const [cart, setCart] = useState([]);

  // ////////////////////////////
  useEffect(() => {
    const storedCartIds = getCartFromLocalStorage();
    const storedCart = [];
    // console.log(storedCartIds,bottols);
    for (const id of storedCartIds) {
      console.log(id);
      const cartBottol = bottols.find((bottol) => bottol.id === id);
      if (cartBottol) {
        storedCart.push(cartBottol);
      }
    }
    // console.log("stored cart", storedCart);
    setCart(storedCart);
  }, [bottols]);

  // ////////////////

  const handleAddToCart = (bottol) => {
    // console.log("cart to cliked",bottol)
    const newCart = [...cart, bottol];
    setCart(newCart);

    // //////////////////////////////////////////
    //saved the bottole id in the storage
    addItemToCartLocalStorage(bottol.id);
    // ////////////////////////
  };
  const handleRemoveFormCart =(id)=>{
    console.log("remove form item the cart",id)
    const remaingCart = cart.filter(bottol =>bottol.id !== id);
    setCart(remaingCart)
    removeFromLocalStorage(id)
  }
  //   console.log(bottols);
  return (
    <div>
      <h3>Total Bottols :{bottols.length}</h3>
      <p>Add to cart :{cart.length}</p>
      <Cart handleRemoveFormCart={handleRemoveFormCart } cart={cart}></Cart>
      <div className="bottols-containers">
        {bottols.map((bottol) => (
          <Bottol
            key={bottol.id}
            handleAddToCart={handleAddToCart}
            bottol={bottol}
          ></Bottol>
        ))}
      </div>
    </div>
  );
};

export default Bottols;
