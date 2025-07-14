import React from 'react';
import AutoSlider from './AutoSlider/AutoSlider';
import MainSection from '../MainSection/MainSection';
import NewsEvents from '../NewsEvents/NewsEvents';
import PictureGallary from '../PictureGallary/PictureGallary';


const Home = () => {
    return (
        <div>
            <AutoSlider />
            <MainSection />
            <NewsEvents />
            <PictureGallary/>
        </div>
    );
};

export default Home;