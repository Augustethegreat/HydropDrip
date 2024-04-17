import { useState,useEffect } from 'react';
import head1 from "./img/head1.jpg"
import head2 from "./img/head2.jpg"
import head3 from "./img/head3.jpg"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic3 from "./img/pic3.png"
import pic4 from "./img/pic4.jpg"
import {ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import pic5 from "./img/pic5.jpg"
import pic6 from "./img/pic6.jpg"
import Image from 'next/image';


const images = [pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,pic1, pic2, pic3, pic4, pic5, pic6,
];


const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  
   

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 140 ? 0 : prevIndex + 1));
      }, 6000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="overflow-hidden max-w-screen-lg">
       
          <div className="flex mx-auto items-center  md:w-auto lg:w-auto lg:gap-x-2 md:gap-x-2 gap-x-4 transition-transform duration-2000 ease-in-out w-full px-4 lg:px-0 md:px-10 py-5 rounded-10 mt-30" 
          // style={{ transform: `translateX(-${currentIndex * 100}%)`,transitionDuration:'2000',
          // transitionTimingFunction:"ease-in-out" ,transitionProperty:'transform' }}  
          >
          <img src={pic2.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[320px] shadow-lg rounded-xl' />
          <img src={pic1.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[320px] shadow-lg rounded-xl' />
          <img src={pic3.src} alt="" className='h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[320px] shadow-lg rounded-xl' />
          {/* {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Slide ${index}`} className="h-auto w-[460px] md:w-[400px] lg:w-[600px] px-2 rounded-xl" />
          ))} */}
          
        </div>
       <div className='max-w-screen-lg flex '>
       <button
          className="absolute mt-[-45%] md:mt-[-130px]  bg-white bg-opacity-50 px-0 py-1 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
        <button
          className="absolute mt-[-45%] md:mt-[-130px] ml-[89%]  md:ml-[89%] lg:ml-[942px] bg-white bg-opacity-50 px-0 py-1 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
       </div>
      </div>
    );
  };
  
  export default Slideshow;