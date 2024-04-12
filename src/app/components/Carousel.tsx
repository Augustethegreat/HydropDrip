import { useState,useEffect } from 'react';
import head1 from "./img/head1.jpg"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic3 from "./img/pic3.png"
import pic4 from "./img/pic4.jpg"
import {ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
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
      <div className="relative overflow-hidden w-[360px] md:w-[600px] lg:w-[1100px] items-center mx-auto">
         <p className='text-[#14a8d7] text-left text-xl md:text-2xl lg:text-4xl font-bold'>Bonjour,</p>
        <p className='text-black mt-2  text-sm lg:text-2xl font-bold'>Decouvrez compte Diasporia, votre compte bancaire maintenu de l'etranger...</p>
        <img src={head1.src} className=' w-[360px] md:w-[800px] lg:w-[1100px] h-auto mt-10 rounded-2xl mx-auto items-center justify-center'  alt=''  />
            
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)`,transitionDuration:'2000',
        transitionTimingFunction:"ease-in-out" ,transitionProperty:'transform' }}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Slide ${index}`} className="h-auto w-[460px] md:w-[400px] lg:w-[600px] px-2 rounded-xl" />
          ))}
        </div>
        <button
          className="absolute top-3/4 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-full"
          onClick={prevSlide}
        >
          <ArrowLeftIcon className="h-6 w-11 " aria-hidden="true" />
        </button>
        <button
          className="absolute top-3/4 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-full"
          onClick={nextSlide}
        >
          <ArrowRightIcon className="h-6 w-11 " aria-hidden="true" />
        </button>
      </div>
    );
  };
  
  export default Slideshow;