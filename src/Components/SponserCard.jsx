
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const SponserCard = ({ image }) => {
    return (
        <div className="card bg-white shadow-md">
            <img src={image} alt="sponsor" className="object-contain h-32 lg:h-40 mx-auto" /> 
        </div>
    );
}

export default SponserCard;
