"use client"
import React from 'react'
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic3 from "./img/pic3.png"
import pic4 from "./img/pic4.png"
import pic5 from "./img/pic5.png"
import Image from 'next/image'
function TheBody() {
  return (
    <div  className='w-1200px h-1200px'>
        <div className=' w-120vh lg:w-1200px lg:h-900px mt-7 px-5 lg:px-0'>
          <p className='text-[#14a8d7] text-xl lg:text-4xl font-bold'>Bonjour,</p>
        
          <p className='text-black mt-2  text-sm lg:text-2xl font-bold'>Decouvrez le compte Diasporia, votre compte bancaire maintenu de l'etranger...</p>
       
            <Image src={pic1} className='w-600 h-600 rounded-xl mt-5' width={1250} height={900} alt=''  />
         <div className='flex gap-x-5 items-center justify-center mx-auto w-920'>
            <div>
            <Image src={pic2} className='w-300 h-600 rounded-xl mt-5' width={296} height={200} alt=''  />
            {/* <div className='w-70 text-center 'style={{width:296}}>
            <p className='text-black'>Prets a echeance</p>
            <p className='text-black w-100'>Nous offrons ce pret pour repondre aux besoins
             de nos client en matiere de fonds de roulement
              ou d'acquisition des biens pour l'entreprise investissement
            </p>
            </div> */}
            </div>
            <div>
            <Image src={pic3} className='w-300 h-600 rounded-xl mt-5' width={296} height={200} alt=''  />
            </div>
            <div>
            <Image src={pic4} className='w-300 h-600 rounded-xl mt-5' width={296} height={200} alt=''  />
            </div>
            <div>
            <Image src={pic5} className='w-300 h-600 rounded-xl mt-5' width={296} height={200} alt=''  />
            </div>
            
       </div>
         </div>
        </div>
     
  )
}

export default TheBody