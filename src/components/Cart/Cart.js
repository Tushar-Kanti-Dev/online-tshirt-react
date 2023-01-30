import React from 'react';
import './Cart.css'

const Cart = ({cart,handelRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
            {
                cart.map(tShirt=> <p>
                    
                    {tShirt.name}
                    <button onClick={()=> handelRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;