import React from 'react';
import AboutUS from './AboutUS/AboutUS';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Pricing></Pricing>

        </div>
    );
};

export default Home;