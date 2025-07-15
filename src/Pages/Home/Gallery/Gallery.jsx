import React from 'react';

// Sample image imports
import img1 from '../Gallery/Image/pic1.jpg'
import img2 from '../Gallery/Image/pic2.jpg'
import img3 from '../Gallery/Image/pic3.jpg'
import img4 from '../Gallery/Image/pic4.jpg'
import img5 from '../Gallery/Image/pic5.jpg'
import img6 from '../Gallery/Image/pic6.jpg'


const galleryImages = [
  { id: 1, src: img1, alt: 'Campus Entrance' },
  { id: 2, src: img2, alt: 'Library' },
  { id: 3, src: img3, alt: 'Computer Lab' },
  { id: 4, src: img4, alt: 'Science Fair' },
  { id: 5, src: img5, alt: 'Cultural Event' },
  { id: 6, src: img6, alt: 'Graduation Day' },
];

const Gallery = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-black mb-8">University Photo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="p-2 text-center bg-white">
              <p className="text-sm text-gray-700 font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
