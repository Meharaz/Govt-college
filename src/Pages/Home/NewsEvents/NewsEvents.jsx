import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from './pic1.jpg'
import img2 from './pic2.jpg'
import img3 from './pic3.jpg'
import img4 from './pic4.jpg'
import bgimg from './educationBg.jpg'

const NewsEvents = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
        },
    })
    return ( 
        <div className='min-h-full p-12 mb-4 '  style={{ 
            backgroundImage: `url(${bgimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}>
            <div ref={sliderRef} className="keen-slider shadow-2xl">
                <div className='keen-slider__slide'>
                    <div className="hero " style={{ backgroundImage: `url(${img1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white   font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>সরকারি মহিলা কলেজ।</h1>
                                <p className="mb-5 text-yellow-400">সালে তৎকালীন এম.এল.এ অধ্যাপক আসহাব উদ্দীন, শিক্ষানুরাগী জনাব বাদশঅ মিঞা চৌধুরী ও জনাব আলী মুহাম্মদ মাস্টার প্রমুখের উদ্যোগে বেসরকারী চেষ্টায় প্রতিষ্ঠিত হয় ‘চট্টগ্রাম নাইট কলেজ’।</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='keen-slider__slide'>
                    <div className="hero " style={{ backgroundImage: `url(${img2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white   font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>সরকারি মহিলা কলেজ।</h1>
                                <p className="mb-5 text-yellow-400">সালে তৎকালীন এম.এল.এ অধ্যাপক আসহাব উদ্দীন, শিক্ষানুরাগী জনাব বাদশঅ মিঞা চৌধুরী ও জনাব আলী মুহাম্মদ মাস্টার প্রমুখের উদ্যোগে বেসরকারী চেষ্টায় প্রতিষ্ঠিত হয় ‘চট্টগ্রাম নাইট কলেজ’।</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='keen-slider__slide'>
                    <div className="hero " style={{ backgroundImage: `url(${img3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white   font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>সরকারি মহিলা কলেজ।</h1>
                                <p className="mb-5 text-yellow-400">সালে তৎকালীন এম.এল.এ অধ্যাপক আসহাব উদ্দীন, শিক্ষানুরাগী জনাব বাদশঅ মিঞা চৌধুরী ও জনাব আলী মুহাম্মদ মাস্টার প্রমুখের উদ্যোগে বেসরকারী চেষ্টায় প্রতিষ্ঠিত হয় ‘চট্টগ্রাম নাইট কলেজ’।</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='keen-slider__slide'>
                    <div className="hero " style={{ backgroundImage: `url(${img4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white   font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>সরকারি মহিলা কলেজ।</h1>
                                <p className="mb-5 text-yellow-400">সালে তৎকালীন এম.এল.এ অধ্যাপক আসহাব উদ্দীন, শিক্ষানুরাগী জনাব বাদশঅ মিঞা চৌধুরী ও জনাব আলী মুহাম্মদ মাস্টার প্রমুখের উদ্যোগে বেসরকারী চেষ্টায় প্রতিষ্ঠিত হয় ‘চট্টগ্রাম নাইট কলেজ’।</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default NewsEvents;