import React from 'react';
import AutoSlider from './AutoSlider/AutoSlider';
import MainSection from '../MainSection/MainSection';
import NewsEvents from '../NewsEvents/NewsEvents';
import PictureGallary from '../PictureGallary/PictureGallary';

import News from '../News/News';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <AutoSlider />
            <MainSection />
            <News/>
            <Gallery/>
           
            
        </div>
    );
};

export default Home;