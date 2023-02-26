import React from 'react';
import "./CardContainer.css"
import FirstCard from './FirstCard/FirstCard';
import SecondCard from './SecondCard/SecondCard';
import ThirdCard from './ThirdCard/ThirdCard';

const CardContainer = () => {
    return (
        <div className='CardPartContainer'>
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
    );
};

export default CardContainer;