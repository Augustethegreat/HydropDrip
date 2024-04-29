import React, { useState } from 'react'
import cap3 from "./img/cap3.png"
import img1 from "./img/acc3.jpg"
export default function Depot() {
  const[montplace, setMontplace]= useState(0);
  const [devise, setDevise]=useState('USD');
  const[times, setTimes] = useState('');
  const[period, setPeriod] = useState('');


  return (
    <div  className='pb-[100px]'>
         <div className='border-b-[0px] border-b-[#e2e5e9] lg:max-w-screen-lg mx-auto md:w-full lg:w-auto items-center'>
            <h1 className='text-[#a22a2b] font-bold text-center mt-5 mx-auto items-center text-[17px] lg:text-[25px] pb-3 w-full lg:w-[700px] px-3 border-b-[3px] border-b-[#a22a2b]'>Simulez votre dépôt à terme ou votre dépôt à taux fixe</h1>
        </div>
        <div className='mx-0 items-center justify-center mt-[30px] px-4 md:px-[224px]'>
            <div className=' block md:flex gap-x-10 shadow-xl rounded-[20px] pt-[60px]'>
              <div className='space-y-5  text-black text-[15px] md:text-[17px] pl-5 font-normal'>
                <div className=''>
                  <p>Montant à placer </p>
                  <div className='flex gap-x-[40px] md:gap-x-[165px]'>                  
                  <input type="number" placeholder='25000' className='outline-none w-[150px] md:w-auto border-b-[1px] border-b-[#cdcdcd] text-[#707070] font-medium'/>
                  <div className='flex gap-x-2'>
                    <p>Dévise</p>
                  <select id="dropdownTextbox"  className='w-full px-1 mt-0 md:w-[80px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option  value="USD">USD</option>
                  <option  value="CFC">CFC</option>
                  <option  value="EUR">EUR</option>
                  <option  value="RANDS">RANDS</option>                
                  </select>
                  </div>
                  </div>
                </div>
                <div className='block md:flex gap-x-[86px]'>
                  <p>Combien de temps souhaitez-vous épargner?</p>
                  <select id="dropdownTextbox"  className='w-[95%] px-1 mt-0 md:w-[80px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option  value="1 mois">1 mois</option>
                  <option  value="3 mois">3 mois</option>
                  <option  value="6 mois">6 mois</option>
                  <option  value="9 mois">9 mois</option>
                  <option  value="12 mois">12 mois</option>
                  <option  value="2 ans">2 ans</option> 
                 
                  </select>
                </div>
                <div className='flex gap-x-[120px]'>
                  <p>Taux d'intérêt annuel</p>
                  <p className='text-[#707070] font-medium'>5%</p>
                </div>
                <div className='block md:flex gap-x-10'>
                  <p>Quand voulez- vous recevoir votre intérêt?</p>
                  <select id="dropdownTextbox"  className='w-[95%] px-0 mt-0 md:w-[150px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option  value="Mensuellement">Mensuellement</option>
                  <option  value="Annuellement">Annuellement</option>
                  <option  value="A l'echeance">A l'echeance</option>              
                  </select>
                </div>
              </div>


              <div className='shadow-xl rounded-[20px] mt-5 lg:mt-[-65px]'>
              <p className='text-center text-[25px] text-[#707070] font-semibold'>EVOLUTION DU DÉPÔT</p>
              <div className='text-black text-[15px] md:text-[20px] p-5'>
                
                <div className='flex gap-x-[70px] md:gap-x-[150px] '>
                  <div className='  space-y-5'>
                    <p>Montant versé</p>
                    <p>Taux d'intérêt annuel</p>
                    <p>Versement de l'intérêt</p>
                  </div>
                  <div className='font-semibold text-[#707070] text-[19px] md:text-[23px]  space-y-[14px]'>
                    <p>25.000,00 $</p>
                    <p>4,42 %</p>
                    <p>-221,00 $</p>
                  </div>
                </div>
                <div className='border-b-[3px] border-b-[#b8b8b8] w-full px-2 py-3'>

                </div>
                <div className='flex text-[15px] md:text-[20px] gap-x-[38%] md:gap-x-[238px] pt-3'>
                    <p>Capital Accru</p>
                    <p className=' font-semibold text-[#707070] text-[19px] md:text-[23px] '>25.884,00 $</p>
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className='text-[#707070] px-4 md:px-[224px] mt-10 text-[18px] font-semibold '>
          <p >La présente simulation ainsi que les taux sont purement indicatifs, approximent la base de calcul et servent uniquement à titre d'information, les données y intégrées n'engageant en rien EBCDC. L'ouverture d'un Dépôt se fait exclusivement en agence EBCDC.</p>
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
