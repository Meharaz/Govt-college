import React from 'react';
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";
import { RowsPhotoAlbum } from 'react-photo-album'; // Corrected component name
import img1 from './PictureGallary/pic1.jpg';
import img2 from './PictureGallary/pic2.jpg';
import img3 from './PictureGallary/pic3.jpg';
import img4 from './PictureGallary/pic4.jpg';
import img5 from './PictureGallary/pic5.jpg';
import img6 from './PictureGallary/pic6.jpg';
import img7 from './PictureGallary/pic7.jpg';
import img8 from './PictureGallary/pic8.jpg';
import img9 from './PictureGallary/pic9.jpg';
import img10 from './PictureGallary/pic10.jpg';

const PictureGallary = () => {
    const photos = [
        { src: img1, width: 800, height: 600 },
        { src: img2, width: 800, height: 600 },
        { src: img3, width: 800, height: 600 },
        { src: img4, width: 800, height: 600 },
        { src: img5, width: 800, height: 600 },
        { src: img6, width: 800, height: 600 },
        { src: img7, width: 800, height: 600 },
        { src: img8, width: 800, height: 600 },
        { src: img9, width: 800, height: 600 },
        { src: img10, width: 800, height: 600 },
        
    ];

    return (
        <div className=''>
            <RowsPhotoAlbum layout="rows" photos={photos} />
        </div>
    );
};

export default PictureGallary;
