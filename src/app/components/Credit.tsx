import React from 'react'
import head2 from "./img/cap3.png"
import cap3 from "./img/cap3.png"
import img1 from "./img/acc3.jpg"
function Credit() {
  return (
    <div className='pb-8 '>
         <div className='border-b-[0px] border-b-[#e2e5e9] lg:max-w-screen-lg mx-auto md:w-full lg:w-auto items-center'>
            <h1 className='text-[#a22a2b] font-bold text-center mt-5 mx-auto items-center pb-3 w-full lg:w-[700px] px-10 border-b-[3px] border-b-[#a22a2b]'>Simulateur de Remboursement de Crédit Immo</h1>
        </div>
       
        <div className='flex mt-[60px] text-black text-[14px] font-medium  lg:max-w-screen-lg mx-auto items-center'>
            <div className="w-full md:px-[60px] px-4 block md:flex gap-x-[50px]">
              <div className='space-y-4 md:space-y-8 md:w-[430px] w-full'>
              <div className=' block md:flex gap-x-[30px] w-full px-6 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Prix D'achat</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>$</p>
                        <input type="number" placeholder='' className='border-[2px] border-[#a22a2b]  outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>pm</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full px-6 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Contribution</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>$</p>
                        <input type="number" placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>pm</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full px-6 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Taux d’intérêt</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='text-white'>$</p>
                        <input type="number" placeholder='' value="15.7" className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>%</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full px-6 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[150px]'>Durée de paiement</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='text-white'>$</p>
                        <input type="number" placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>m</p>
                    </div>

                </div>
                <div className='md:px-0 '>
                <button className='border-[#a22a2b] border-[2px] md:hover:bg-[#a22a2b] hover:bg-[#d73611] md:bg-white bg-[#a22a2b] shadow-lg md:hover:text-white py-2 px-5 text-white md:text-black text-[14px] w-full rounded-[5px] font-semibold'>CALCULEZ</button>
                </div>
              </div>
              <div className=' md:w-[430px] w-fullm mt-10 md:mt-0'>
                <p className='text-center text-[20px] font-medium'>Paiement Mensuel</p>
               <div className='px-8 mt-4 space-y-2'>
               <div>
                    <p>Montant de prêt </p>
                    <p className='text-[25px]'>$ 0</p>
                </div>
                <div>
                    <p>Sommation d’intérêt   </p>
                    <p className='text-[25px]'>$ 0</p>
                </div>
                <div>
                    <p>Remboursement Total </p>
                    <p className='text-[25px]'>$ 0</p>
                </div>

               </div>
               <div className='mt-[15px]'>
                <button className='border-[#a22a2b] border-[2px] md:hover:bg-[#a22a2b] hover:bg-[#d73611] md:bg-white bg-[#a22a2b] shadow-lg md:hover:text-white py-2 px-5 text-white md:text-black text-[14px] w-full rounded-[5px] font-semibold'>DEMANDER UNE PRE-EVALUATION</button>
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