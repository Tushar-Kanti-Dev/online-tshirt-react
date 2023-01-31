import React from 'react';

const Brother = ({property}) => {
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px' }}>
            <h2>Brother</h2>
            <p><small>Property: {property}</small></p>
        </div>
    );
};

export default Brother;