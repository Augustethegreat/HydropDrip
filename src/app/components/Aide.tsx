import React from 'react'
import themobile1 from "./img/thishead.png"
import themobile from "./img/themobile.jpg"
import themobile2 from "./img/head3.jpg"
import smallhead from "./img/smallhead.png"
import appsell from "./img/theappsell.png"

function Aide() {
  return (
    <div>
        <p className='text-[#3d3d3d] text-2xl font-semibold text-center mt-2 '>Vous désirez de l’aide ?</p>
        <div className=' w-full px-8 md:px-[200px] lg:px-[250px]'>
           <div className='items-center mx-auto '>
           <p className='text-xl mt-3 text-[#292929] font-medium'>Avez-vous un souci ?</p>
            <p className='text-sm mt-2 text-[#292929]'>Déposez-nous un mot dans ce formulaire de contact et nous vous reviendrons sous peu.</p>
            <div className='block md:flex lg:flex  gap-x-3 mt-2'>
                <input type="text" placeholder='Nom' className='  w-full px-7 md:w-[180px]  lg:w-[265px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] '/>
                <input type="text" placeholder='Post-Nom' className=' w-full px-7 mt-3 lg:mt-0 md:mt-0   md:w-[180px]  lg:w-[265px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] ' />
            </div>
            <div className='block md:flex lg:flex gap-x-3 mt-2'>
                <input type="text" placeholder='Courriel' className=' w-full px-7  md:w-[180px]  lg:w-[265px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] '/>
                <input type="text" placeholder='Numéro de contact' className='w-full px-7 mt-3 lg:mt-0 md:mt-0  md:w-[180px]  lg:w-[265px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] ' />
            </div>
            <input type="text" placeholder='Requête/Compliment/Plainte' className=' w-full px-7 mt-2 md:w-[372px] lg:w-[542px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] '/>
            <div>
            <input type="text" placeholder='Ouverture de compte/Commande Carte/Réactivation de Compte/ Demande de prêt / Autres' className='w-full px-7 mt-2 md:w-[372px] lg:w-[542px] pl-4 py-2 text-[#292929] border-[#938c8c] border-[2px] '/>
            
            </div>
            <textarea name="" id="" placeholder='Commentaire'  className='w-full px-7 mt-3 lg:w-[542px] pl-4 py-2 h-[100px] text-[#292929] border-[#938c8c] border-[2px]'></textarea>
            <div className=' bg-[#a22a2b] hover:bg-[#d73611] hover:cursor-pointer w-full px-7 mt-3 lg:w-[542px] pl-4 py-2  text-[#292929] border-[#938c8c] border-[2px] rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-3 text-white font-semibold'>Envoyer</p>
            </div>
           </div>
           <img src={themobile1.src} className=' hidden  md:hidden lg:flex lg:w-[1200px]  lg:h-[350px] mt-4 lg:rounded-xl'  alt=''  />
           <img src={appsell.src} className=' w-full h-[350px] px-0 md:flex lg:hidden rounded-[20px] md:w-[600px] md:mx-auto md:items-center lg:w-0 mt-10 lg:rounded-2xl'  alt=''  />
        
        </div>
        <p  className='text-[#3d3d3d] text-2xl font-semibold text-center mt-[65px] '>Questions couramment posées</p>
        <div className='w-full px-8 pb-[70px] mt-[80px] md:px-[50px]  lg:px-[330px] items-center mx-auto'>
        <div className='flex gap-x-3 md:gap-x-6 lg:gap-x-7 '>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Nos Comptes</p>
            </div>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Demandes de prêt</p>
            </div>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Nos cartes bancaires</p>
            </div>
        </div>
        <div className='flex gap-x-3 md:gap-x-6 lg:gap-x-7 mt-10'>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a] '>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Nos agences</p>
            </div>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Méthodes de livraison</p>
            </div>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>La banque en ligne</p>
            </div>
        </div>
        <div className='flex gap-x-3 md:gap-x-6 lg:gap-x-7 mt-10'>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Nos Comptes</p>
            </div>
            <div className=' bg-[#d73611]  hover:bg-[#f86342] hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Demandes de prêt</p>
            </div>
            <div className=' bg-[#d73611] hover:bg-[#f86342]  hover:cursor-pointer  w-[270px] h-[35px] lg:h-auto md:h-auto justify-center my-auto items-center rounded-xl md:rounded-lg lg:rounded-xl shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center py-2 md:py-3 lg:py-3 text-white text-[10px] md:text-sm font-semibold'>Nos cartes bancaires</p>
            </div>
        </div>
        <img src={themobile.src} className='hidden md:w-full lg:flex lg:w-[905px]  lg:h-auto mt-[80px] lg:rounded-xl'  alt=''  />
        <img src={smallhead.src} className='flex w-full rounded-[20px] h-auto md:w-full md:px-[40px] lg:hidden lg:w-[905px]  lg:h-auto mt-[80px] lg:rounded-xl'  alt=''  />

        </div>
      
    </div>
  )
}

export default Aide