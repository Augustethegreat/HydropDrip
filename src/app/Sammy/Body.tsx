import { useState } from 'react'
import bgimg from "../Sammy/img/pexels-arek-socha-238681.jpg"
import smallpic from "../Sammy/img/smallpic.png"
import buttimg from "../Sammy/img/pexels-pixabay-268832.jpg"
import devicePic from "../Sammy/img/mediaDevice.png"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { MdBatteryCharging60 } from "react-icons/md";
import { FaCloudDownloadAlt, FaGasPump } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { TbWindElectricity } from "react-icons/tb";
import {motion} from "framer-motion"
import Slideshow from './Carousel'
import Slides from './slide'
import Footers from './footer'

function Body() {

  const [text, count] = useTypewriter({
    words: [
        "8,333,333 Water towers",
        "200 Lake Gardas",
        "0.1 North seas",
        "10,000,000,000,000 Liters"
    ],
    loop: true,
    delaySpeed:2000,
})
  return (
    <div className=' h-auto mt-[-2px] '>
        <div className=' text-white  font-extrabold bg-black text-center  items-center mx-auto'>
     
         
         <img src={bgimg.src} alt="" className='hidden md:flex w-full h-[750px] opacity-40 bg-black  shadow-black  ' /> 
         <img src={smallpic.src} alt="" className='flex md:hidden w-full h-[400px] opacity-40 bg-black  shadow-black  ' />   
      
        
         <div className='relative mt-[-400px] md:mt-[-750px] md:px-[100px] lg:px-[150px] items-center h-[400px] md:h-[750px] justify-center py-[70px] md:py-[125px]  text-center opacity-90 font-extrabold'>
           <p className='pt-10 text-[30px] md:text-[40px] lg:text-[70px] text-[#4cb5e5]'>We want to save</p>
            <p className='pt-10 text-[25px] md:text-[40px] lg:text-[70px] text-[#fff]'>
            <span >{text}
      <Cursor cursorColor='white' />
      </span></p>
            <p className='pt-10 text-[30px] md:text-[40px] lg:text-[70px] text-[#4cb5e5]'>of clean drinking water</p>
           </div>
       
         
        </div>
      
        <div className='bg-[#ececec] w-full pb-[70px]  md:pb-[100px]'>
        <p className='text-[#414141] font-extrabold w-full px-5 md:w-auto md:px-0 text-[30px] md:text-[60px] pt-5 text-center'>
        Self-Powered, Smart Turbine Flow Meter</p>
            <div className='space-y-7 md:space-y-0 block md:flex gap-x-[50px] w-full md:w-auto px-5 md:px-0 mt-4 items-center justify-center mx-0'>
            <div 
        className='space-y-7' >
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
                <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <FaGasPump className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer '>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] shadow-xl'>
               <MdBatteryCharging60 className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white'/>
               </div>
                  <div className=''>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='hidden md:flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <FaCloudDownloadAlt className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='hidden md:flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
              </div>
              <div 
         className='space-y-7'> 
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <TbDeviceLandlinePhone className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <TbWindElectricity className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='hidden md:flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='hidden md:flex gap-x-2 bg-white p-3  rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[50px] h-[50px] md:w-[80px] px-5 md:h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='md:w-[40px] w-[30px] h-[30px]  md:h-[40px] mt-[-10px] ml-[-7px] md:ml-0 md:mt-0  text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[250px] px-0 md:px-0 md:w-[300px] text-[12px] md:text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
              </div>
            </div>
        </div>

        <div 
         className='block md:flex items-center justify-center mx-0 gap-x-1 py-[40px] md:py-[100px] bg-[#003044] '>
          <motion.div 
  
      initial={{y: 200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className=' space-y-5'>
              <p className='font-extrabold text-[#20e2c4] text-[25px] md:text-[55px] leading-0  md:leading-[50px] tracking-0 md:tracking-[2px] w-full px-5 md:px-0 md:w-[650px] text-shadow-xl shadow-white '>Disruptive AI technology for real-time anomaly management of water networks</p>
              <p className='w-full md:w-[500px] px-5 md:px-0 text-white font-medium'>HULO’s algorithms provide water utilities with know-how about their water network. Together, we detect, localize and quantify leaks in the very early stages. By tailored solutions the knowledge stays at the client’s side.</p>
                <p className='w-full md:w-[310px] px-5 md:px-0 font-extrabold text-white'>Proven and research-backed AI technology.
                Trusted by several water utilities</p>
                <div className='w-full h-auto px-5 md:px-0 md:w-[650px] md:h-[150px] rounded-[60px] bg-[#003044] md:bg-[#171f33] shadow-none md:shadow-lg'>
                  <img src={buttimg.src} className='w-full h-[110px]   md:w-[650px] md:h-[150px] rounded-[60px]' alt=""  />
                <div className=' items-center justify-center mx-auto space-y-5'>
                <p className='text-center font-extrabold text-white text-[20px] md:text-[30px] mt-[-106px] md:mt-[-140px] '>Interested?</p>
                <div className='items-center md:justify-center mx-0 px-10  w-full pb-5 md:mt-0 pt-0 md:px-[120px] '>
                  <button className='font-bold text-[14px] md:text-[17px] bg-[#20e2c4] w-full  px-4 text-black py-2 border-[2px] rounded-[10px] shadow-none md:shadow-lg border-white hover:bg-[#171f33] hover:text-white '
                  >Discover our solutions</button>
                </div>
                  </div>
                  </div>
                  </motion.div>
                  <motion.div 
               initial={{y: 200, opacity:0}}
               whileInView={{y:0, opacity:1}}
                  transition={{duration:1.2}}
                  viewport={{once:false}} className='w-full md:w-[500px] px-10 md:px-0 mt-7 md:mt-0'>
            <img src={devicePic.src} className='w-full  md:w-[500px] h-auto' alt=""  />
            </motion.div>
        </div>


        <div className='bg-[#ececec] px-10 w-full h-[900px]'>
          <Slides/>
        </div>
        <div>
          <Footers/>
        </div>
    </div>
  )
}

export default Body