import React from 'react';
import "./bottol.css"

const Bottol = ({bottol,handleAddToCart}) => {
    console.log(bottol)
    const{img,name,price,stock} = bottol;
    return (
        <div className='card bottol'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button onClick={()=>handleAddToCart(bottol)}>Buy now</button>
        </div>
    );
};

export default Bottol;