import React from 'react';

const Sister = ({property}) => {
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px' }}>
            <h2>Sister</h2>
            <p><small>Property: {property}</small></p>
        </div>
    );
};

export default Sister;