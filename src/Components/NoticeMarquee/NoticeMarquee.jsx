import React from 'react';
import Marquee from 'react-fast-marquee';

const NoticeMarquee = () => {
    return (
        <div>
           <p className='bg-red-700 text-white text-center p-1 text-xl font-bold'>Latest Notice</p> <Marquee pauseOnHover direction='right' gradient gradientWidth={400}  className='text-red-700'>  *** ২০২২-২০২৩ শিক্ষাবর্ষে প্রিলিমিনারী টু মাস্টার্স  (নিয়মিত) ভর্তি কার্যক্রমে প্র্রাথমিক আবদনের সময় বৃদ্ধি সম্পর্কিত জরুরি বিজ্ঞপ্তি। ***</Marquee>
        </div>
    );
};

export default NoticeMarquee;
