import React from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';


const PictureGallary = () => {

    const photos = [
        {
            src: 'http://example.com/example/img1.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'http://example.com/example/img2.jpg',
            width: 1,
            height: 1
        }
    ];

    

    return (
        <div>
           <RowsPhotoAlbum photos={photos} />
        </div>
    );
};

export default PictureGallary;