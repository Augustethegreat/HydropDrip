"use client"
import React from 'react'
import pic1 from "./img/pic1.png"
import Image from 'next/image'
function TheBody() {
  return (
    <div  className=' w-1200px h-1200px  '>
        <div className=' w-120vh lg:w-1200px lg:h-900px mt-7 px-5 lg:px-0'>
          <p className='text-[#14a8d7] text-xl lg:text-4xl font-bold'>Bonjour,</p>
        
          <p className='text-black mt-2  text-sm lg:text-2xl font-bold'>Decouvrez le compte Diasporia, votre compte bancaire maintenu de l'etranger...</p>
       
            <Image src={pic1} className='w-600 h-600 rounded-lg mt-5' width={920} height={600} alt=""  />
         
        </div>
        </div>
  )
}

export default TheBody