import React from 'react';

const Uncle = ({property}) => {
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px'}}>
            <h2>Uncle</h2>
            <h4>Property: {property}</h4>
        </div>
    );
};

export default Uncle;