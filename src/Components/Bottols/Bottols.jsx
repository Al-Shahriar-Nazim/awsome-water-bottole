import React, { use, useState } from "react";
import "./bottols.css"
import Bottol from "../Bottol/Bottol";

const Bottols = ({ bottolsPromised }) => {
    const[cart,setCart] = useState([])

  const bottols = use(bottolsPromised);

  const handleAddToCart =(bottol)=>{
    // console.log("cart to cliked",bottol)
    const newCart = [...cart,bottol];
    setCart(newCart)
  }
//   console.log(bottols);
  return (
    <div>
      <h3>Total Bottols :{bottols.length}</h3>
      <p>Add to cart :{cart.length}</p>
      <div className="bottols-containers">
        {bottols.map((bottol) => (
          <Bottol key={bottol.id} handleAddToCart={handleAddToCart} bottol={bottol}></Bottol>
        ))}
      </div>
    </div>
  );
};

export default Bottols;
