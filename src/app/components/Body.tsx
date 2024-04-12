"use client"
import React from 'react'
import Slideshow from './Carousel'
import head1 from "./img/head1.jpg"
import themobile from "./img/themobile.jpg"
import head2 from "./img/head2.jpg"
import head3 from "./img/head3.jpg"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic6 from "./img/pic6.jpg"
import pic3 from "./img/pic3.png"
import acc from "./img/acc.jpg"
import deals from "./img/deals.jpg"
import Footers from './footer'
import Image from 'next/image'
function TheBody() {
  const slides = [pic1, pic2, pic3];

  return (
    <div  className='w-full h-auto'>
        <div className='  mt-7 px-5 lg:px-0 items-center mx-auto '>
        <div className=' mx-auto items-center '>
       
        </div>
         
        
        
          <div className="container mx-auto  px-0 lg:px-4 " >  

             <Slideshow />
            </div>

            <div className='  mt-[9vh]   mx-auto lg:w-[1000px]'>
              <div className=' md:flex md:gap-x-2  mx-0 items-center '>
              <div className='border-[1px] py-4 w-[360px] md:w-[458px] items-center mx-auto bg-[#ffffff]'>
              <span className='flex '>
              <img src={acc.src} className='w-[150px] [h-50px] px-1 md:px-3 lg:px-5'  alt=''  />
              <div className=' text-black '>
                <p className='font-bold text-sm'>Don’t have an account?</p>
                <p className=' w-150 md:w-[300px] text-[11px] md:text-[12px] lg:text-sm'>Create an account to manage your bookings easily and securely.
                 View recent trips, save your wishlists, and share your searches with friends and family.  </p>
             
              </div>
              </span>
              <div className='flex items-center justify-center mt-7 '>
              <button className='bg-[#a22a2b]  px-3 h-[40px] text-sm '>Create Account</button>
                </div>
              </div>
              <div className='border-[1px] py-4 w-[360px] md:w-[458px] mt-3 md:mt-0 items-center mx-auto bg-[#ffffff]'>
              <span className='flex '>
              <img src={deals.src} className='w-[150px] [h-50px] px-1 md:px-3 lg:px-5'  alt=''  />
              <div className=' text-black '>
                <p className='font-bold text-sm'>Get exclusive deals & travel updates</p>
                <p className=' w-150 md:w-[300px] text-[11px] md:text-[12px] lg:text-sm'>Be the first to know about our travel specials and competitions. Get the latest travel updates and travel inspiration straight to your inbox.
                </p>
             
              </div>
              </span>
              <div className='flex items-center justify-center mt-7 gap-x-1 md:gap-x-3'>
                <input type="text" name="" id="" placeholder='  Enter your name ' className='border-[1px] w-[110px] md:w-[150px] text-black h-[40px] text-[12px]'/>
                <input type="text" name="" id="" placeholder='  Enter your email' className='border-[1px] w-[110px] md:w-[150px] text-black h-[40px] text-[12px]'/>
              <button className='bg-[#a22a2b]  w-[90px] h-[40px] text-sm'>Create</button>
                </div>
              </div>
              </div>
              
                <div className='w-[360px] md:w-auto lg:w-auto items-center mx-auto'>
                <img src={themobile.src} className='items-center mx-auto  hidden md:block lg:block md:w-[800px] lg:w-[1100px] h-[100px] lg:h-[340px] mt-10 rounded-xl'  alt=''  />
                <img src={pic6.src} className='items-center mx-auto block md:hidden lg:hidden  w-[360px] h-[480px] mt-10 rounded-xl'  alt=''  />
                <p className='text-black mt-10 text-2xl font-bold'>
                  A propos de Equity BCDC
                  </p>
                  <p className='text-black text-sm pb-4'>
                  EquityBCDC est une filiale de Equity Group Holdings Plc (EGH), suite à l'acquisition de la majorité des parts dans la Banque Commerciale du Congo par EGH, auprès de la famille de George Forrest, en juillet 2020. Elle opère en RDC depuis 1909.
    
                  Nous facilitons le quotidien de nos milliers de clients à travers la RDC et le monde, grâce aux solutions digitales pour particuliers et entreprises, un large réseau d’agences bancaires et d’agents bancaires (EquityBCDC Express) à travers tout le pays et une gamme complète de cartes bancaires pour toute catégorie de la clientèle.
                  </p>
               
                </div>
             </div>
        
         
         </div>
         <Footers/>
        </div>
     
  )
}

export default TheBody