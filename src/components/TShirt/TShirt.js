import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const {handelAddToCart, tShirt} = props;
    const {name, price, picture} = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <p>Price: $<small>{price}</small></p>
            <button onClick={()=> handelAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;