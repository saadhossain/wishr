import React from 'react';
import slider1 from '../assests/banner/banner-1.jpg';
import slider2 from '../assests/banner/banner-2.jpg';
import slider3 from '../assests/banner/banner-3.jpg';

const HomeCarousel = () => {
    return (
        <div className='rounded'>
            <div className="carousel w-10/12 mx-auto rounded-lg">
                {/* Slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='slider-img'>
                        <img src={slider1} className="w-full rounded-lg" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide3" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❯</a>
                    </div>
                </div>
                {/* Slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='slider-img'>
                        <img src={slider2} className="w-full rounded-lg" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide1" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❯</a>
                    </div>
                </div>
                {/* Slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='slider-img'>
                        <img src={slider3} className="w-full rounded-lg" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide2" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-wishr border-none hover:bg-wishr">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;