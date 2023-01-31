import React from 'react';
import Special from '../Special/Special';

const MySelf = ({property}) => {
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px' }}>
            <h2>MySelf</h2>
            <p><small>Property: {property}</small></p>
            <Special></Special>
        </div>
    );
};

export default MySelf;