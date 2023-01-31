import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({property}) => {
    return (
        <div style={{border: '1px solid goldenrod', margin:'5px' }}>
            <h2>Father</h2>
            <h4>Property: {property}</h4>
            <div className='children' style={{display:'flex',border: '1px solid goldenrod', margin:'5px' }}>
            <MySelf property={property}></MySelf>
            <Sister property={property}></Sister>
            <Brother property={property}></Brother>
            </div>
        </div>
    );
};

export default Father;