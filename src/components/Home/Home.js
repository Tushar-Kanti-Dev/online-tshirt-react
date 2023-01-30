import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirt]= useTShirts();
    const [cart, setCart] = useState([]);
    const handelAddToCart = (selectedItem)=>{
        const exists = cart.find(tShirt=> tShirt._id === selectedItem._id);
        if(!exists){
        const newCart = [...cart, selectedItem];
        setCart(newCart);
        }else{
            alert('already added')
        }
        // console.log(newCart)
    }
    const handelRemoveFromCart =(selectedItem)=>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);

    }
    return (
        <div className='home-container'>
            
            <div className="tshirt-container">
                
                {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt.id}
                    tShirt ={tShirt}
                    handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;