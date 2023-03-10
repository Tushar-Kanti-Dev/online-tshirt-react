import React, { useEffect, useState } from 'react';

const useTShirts = () => {
    const [tShirts, setTShirt] = useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res=> res.json())
        .then(data => setTShirt(data))
    },[]);
    return [tShirts, setTShirt];

};

export default useTShirts;