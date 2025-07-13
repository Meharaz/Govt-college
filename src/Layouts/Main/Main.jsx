import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/NavBar/Navbar';
import NoticeMarquee from '../../Components/NoticeMarquee/NoticeMarquee';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NoticeMarquee />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;