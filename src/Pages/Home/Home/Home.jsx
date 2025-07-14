import React from 'react';
import AutoSlider from './AutoSlider/AutoSlider';
import MainSection from '../MainSection/MainSection';
import PictureGallary from '../PictureGallary/PictureGallary';

const Home = () => {
    return (
        <div>
            <AutoSlider />
            <MainSection />
            <PictureGallary/>
        </div>
    );
};

export default Home;