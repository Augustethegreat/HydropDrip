import React, { useState } from 'react'
import themobile1 from "./img/cap6.png"
import themobile from "./img/themobile.jpg"
import cap3 from "./img/cap3.png"
import themobile2 from "./img/head3.jpg"
import smallhead from "./img/smallhead.png"
import appsell from "./img/offre2.jpg"

function Packages() {
  const[comptepage, setComptepage]= useState('')
  const[cartepage, setCartepage]= useState('none')
  const[produitpage, setProduitpage]= useState('none')
  const[comptecolor, setComptecolor]= useState('[#a22a2b]')
  const[cartecolor, setCartecolor]= useState('black')
  const[produitcolor, setProduitcolor]= useState('black')
  
  function compteroute () {
    setComptepage('')
    setCartepage('none')
    setProduitpage('none')
    setComptecolor('[#a22a2b]')
    setCartecolor('black')
    setProduitcolor('black')
  }
  function carteroute () {
    setComptepage('none')
    setCartepage('')
    setProduitpage('none')
    setComptecolor('black')
    setCartecolor('[#a22a2b]')
    setProduitcolor('black')
  }
  function produitroute () {
    setComptepage('none')
    setCartepage('none')
    setProduitpage('')
    setComptecolor('black')
    setCartecolor('black')
    setProduitcolor('[#a22a2b]')
  }


  return (
    <div className='pb-[70px] '>
      
        <div className='scroll-smooth flex border-b-[1px] border-[#dee3e9] w-full mx-auto items-center text-[] text-[17px] font-medium'>
            <div className='max-w-screen-lg flex mx-auto items-center  gap-x-5 scroll-smooth'>
            <a href="#OptionsComptes">
            <div onClick={compteroute} className={`h-full  text-${comptecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 className=''>Options Comptes</h1>
            </div>
            </a>
            <a href="#CartesBancaires" onClick={carteroute}>
            <div className={`h-full  text-${cartecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Cartes Bancaires</h1>
            </div>
            </a>
           <a href="#ProduitsDigitaux" onClick={produitroute}>
           <div className={`h-full text-${produitcolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Produits Digitaux</h1>
            </div>
           </a>
            </div>
        </div>

       <div className='mt-10' style={{display:comptepage}} >
       <div className='mx-auto  items-center md:px-6 mt-10 lg:max-w-screen-xl'>
         <div className='block  px-4 md:px-0 md:flex lg:block mx-auto items-center md:gap-x-5'>
         <div className='block lg:flex  lg:gap-x-4 space-y-5 lg:space-y-0'>
         <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Courant</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Transferts de fonds (entrants et sortants) Mise à disposition, Opérations de change...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Epargne</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Compte permettant la constitution d'une épargne rémunérée sans obligation de durée...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'> Epargne +</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Compte permettant la constitution d'une épargne rémunérée sans obligation de durée...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
         </div>
         <div className='block lg:flex lg:gap-x-4 space-y-5 mt-5 md:mt-0 lg:mt-5 lg:space-y-0'>
         <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Junior</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>A la majorité, il se transforme automatiquement en compte épargne pour...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Junior Flexi</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Alimentation via caisse et virement du parent / tuteur 1 retrait gratuit / mois...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>MASTA</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Transferts de fonds (entrants et sortants)Mise à disposition...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
         </div>
         </div>
         <div className='block lg:flex px-4 lg:gap-x-4 md:px-0 mt-5'>
         <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>DAT</p>
                <p className='lg:w-[325px] text-[14px] pt-2'>Constitution d'une épargne bloquée pendant la période convenue et au taux annuel fixe....</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%]'>
                <p>Découvrez +</p>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Ouvrez</p>
                </a>
                </div>
            </div>
           </div>
         
         </div>
        </div>
        <div className='lg:px-[245px] lg:w-full mt-10'>
        <img src={cap3.src} className=' hidden  md:hidden lg:flex  lg:w-full  lg:h-auto mt-4 lg:rounded-xl'  alt=''  />
        </div>
          <div className='px-4'>
          <img src={appsell.src} className=' w-full h-[350px]  md:flex lg:hidden shadow-xl rounded-[20px]  md:w-[600px] md:mx-auto md:items-center lg:w-0 mt-6 lg:rounded-2xl'  alt=''  />
        
          </div>
       </div>
       <div style={{display:cartepage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[130px] pb-[100px]'>
          <p className='text-[40px] text-[#959595] font-bold '>#Carte Bancaire</p>
          </div>
       </div>
       <div style={{display:produitpage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[130px] pb-[100px]'>
          <p className='text-[40px] text-[#959595] font-bold '>#Produits digitaux</p>
          </div>
       </div>
    </div>
  )
}

export default Packages