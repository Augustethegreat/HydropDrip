import React from 'react'
import head2 from "./img/cap3.png"
import cap3 from "./img/cap3.png"
import img1 from "./img/acc3.jpg"
function Credit() {
  return (
    <div className='pb-8'>
        <div className='w-full  '>
                <p className='text-center text-black border-b-[1px] border-b-[#e2e2e2] py-10 font-semibold text-lg'>
                    SIMULATEUR DE REMBOURSEMENT</p>
            </div>
        <div className='flex mt-9 text-black text-lg  lg:max-w-screen-lg mx-auto items-center'>
            <div className="w-full md:px-[60px] px-4 block md:flex gap-x-[50px]">
              <div className='space-y-4 md:space-y-8 md:w-[430px] w-full'>
              <div className=' block md:flex gap-x-[30px] w-full md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Montant de prêt </p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>$</p>
                        <input type="text" placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[90%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>pm</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Contribution</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>$</p>
                        <input type="text" placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[90%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>pm</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Taux d’intérêt</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='text-white'>$</p>
                        <input type="text" placeholder='' value="15.7" className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[90%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>%</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Durée de paiement</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='text-white'>$</p>
                        <input type="text" placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[90%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>m</p>
                    </div>

                </div>
                <div className='md:px-0 '>
                <button className='bg-[#a22a2b] hover:bg-[#d73611] shadow-lg shadow-[#7c7a7a] py-2 px-5 text-white w-full rounded-[5px] text-[14px] font-semibold'>CALCULEZ</button>
                </div>
              </div>
              <div className=' md:w-[430px] w-full'>
                <p className='text-center text-lg font-medium'>Paiement Mensuel</p>
               <div className='px-8 mt-4 space-y-4'>
               <div>
                    <p>Montant de prêt </p>
                    <p className='text-[35px]'>$ 0</p>
                </div>
                <div>
                    <p>Sommation d’intérêt   </p>
                    <p className='text-[35px]'>$ 0</p>
                </div>
                <div>
                    <p>Remboursement Total </p>
                    <p className='text-[35px]'>$ 0</p>
                </div>

               </div>
               <div className='mt-9'>
                <button className='border-[#a22a2b] border-[2px] hover:bg-[#a22a2b] hover:text-white py-2 px-5 text-black text-[14px] w-full rounded-[5px] font-semibold'>DEMANDER UNE PRE-EVALUATION</button>
               </div>
              </div>
             </div>
             

        </div>
        <div className='flex mt-9 text-black text-lg  lg:max-w-screen-lg mx-auto items-center'>
        <p className='text-black text-[14px]  px-4 lg:px-[70px] '>* Le taux d'intérêt est fixé par défaut au taux préférentiel. Les institutions bancaires peuvent choisir de prêter aux particuliers à un taux supérieur ou inférieur à ce taux préférentiel.</p>
         
            </div>  
           <div className='max-w-screen-lg mx-auto items-center justify-center'>
           <div className='px-4 w-full ' >
            <img src={cap3.src} className=' rounded-[15px] hidden md:flex md:w-full md:h-[250px] lg:flex lg:w-[1105px] h-[100px] lg:h-auto mt-10 lg:rounded-2xl'  alt=''  />
          
            </div>
            <div className='lg:w-auto md:w-auto w-full px-4'>
          <img src={img1.src} className=' w-full h-[400px] px-0 flex md:hidden lg:hidden rounded-[30px] md:w-[600px] shadow-lg md:mx-auto md:items-center lg:w-0 mt-10 lg:rounded-2xl'  alt=''  />
        
          </div>
           </div>
    </div>
  )
}

export default Credit