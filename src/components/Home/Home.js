import React from 'react';
import AboutUS from './AboutUS/AboutUS';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';
import Statistic from './Statistic/Statistic';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Pricing></Pricing>
            <Statistic></Statistic>

        </div>
    );
};

export default Home;