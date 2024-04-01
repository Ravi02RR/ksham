// eslint-disable-next-line no-unused-vars
import React from 'react';
import SponserCard from './SponserCard.jsx';
import { sponser } from '../assets/Data.js';

const OurSponsors = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8  text-yellow-700">Our Supporters</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sponser.map((image, index) => (
                        <SponserCard key={index} image={image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurSponsors;
