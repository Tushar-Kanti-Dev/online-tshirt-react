import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px' ,padding: '5px'}}>
            <h4>Special</h4>
            <p>Gift  {ring}</p>
        </div>
    );
};

export default Special;