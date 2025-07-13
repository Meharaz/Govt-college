import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/NavBar/Navbar';
import NoticeMarquee from '../../Components/NoticeMarquee/NoticeMarquee';

const Main = () => {
    return (
        <div>
            <NoticeMarquee/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;