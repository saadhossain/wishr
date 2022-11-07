import React from 'react';
import HomeAbout from './HomeAbout';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;