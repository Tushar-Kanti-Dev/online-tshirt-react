import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './Grandpa.css'

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [property, setProperty] = useState(1);
    const specialGift = '--Banglo--'
    const handelAddProperty =()=>{
        const newProperty = property + 1;
        setProperty(newProperty)
    }

    return (
        <RingContext.Provider value={specialGift}>
            <div className='grand-container'>
            <h3>Grand pa compo</h3>

            <p>Property: {property}
            <button style={{margin:'10px'}}
            onClick={handelAddProperty}
            >Property</button>
            </p>

            <div className='grand-family'>
                <Father property={property}></Father>
                <Uncle property={property}></Uncle>
                <Unty property={property}></Unty>
            </div>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;