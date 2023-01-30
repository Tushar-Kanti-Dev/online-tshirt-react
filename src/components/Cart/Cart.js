import React from 'react';
import './Cart.css'

const Cart = ({cart,handelRemoveFromCart}) => {
    let command;
    if(cart.length===0){
        command = <p>Added atlest one item</p>
    }else if(cart.length === 1){
        command = <p>select more</p>
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
            {command}
            {
                cart.map(tShirt=> <p>
                    
                    {tShirt.name}
                    <button onClick={()=> handelRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {/* ternary operator  */}
            {cart.length !==4 ? <p>keep adding</p>: <button>Remove All</button>}
            {cart.length !==0 && <button className='orange'>review items</button>}
        </div>
    );
};

export default Cart;