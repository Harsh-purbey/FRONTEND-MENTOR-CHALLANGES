import React from 'react'

const Card = () => {
  return (
    <div className='min-h-screen w-full bg-white flex justify-center items-center py-20 md:py-2'>
        <div className='grid md:grid-cols-3'>

            {/* FIRST */}
                <div className='bg-[#E28525]  p-8 rounded-tl-xl rounded-tr-xl  md:rounded-bl-xl md:rounded-tr-none space-y-6'>
                    <div>
                        <img src="./images/icon-sedans.svg" alt="IMAGE" srcset="" />
                    </div>
                    <h1 className='uppercase text-4xl font-semibold text-white'>Sedans</h1>
                    <p className='pb-10 w-48 text-white opacity-70'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                    or on your next road trip.</p>
                    <button className=' py-2 px-6 bg-white border-2 border-[#E28525] text-[#E28525] rounded-full block font-semibold active:text-white active:bg-[#E28525] active:border-2 active:border-[#eec8a2]'>Learn More</button>
                </div>
                {/* SECOND */}
                <div className='bg-[#016972]  p-8  space-y-6'>
                    <div>
                        <img src="./images/icon-suvs.svg" alt="IMAGE" srcset="" />
                    </div>
                    <h1 className='uppercase text-4xl font-semibold text-white'>Suvs</h1>
                    <p className='pb-10 w-48 text-white opacity-70'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                    and off-road adventures.</p>
                    <button className=' py-2 px-6 bg-white border-2 border-[#016972] text-[#016972] rounded-full block font-semibold active:text-white active:bg-[#016972] active:border-2 active:border-[#aee5ea]'>Learn More</button>
                </div>
                {/* THIRD */}
                <div className='bg-[#00403F]   p-8 rounded-tr-none rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl  space-y-6'>
                    <div>
                        <img src="./images/icon-luxury.svg" alt="IMAGE" srcset="" />
                    </div>
                    <h1 className='uppercase text-4xl font-semibold text-white'>luxury</h1>
                    <p className='pb-4 w-48 text-white opacity-70'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                    rental and arrive in style.</p>
                    <button className=' py-2 px-6 bg-white border-2 border-[#00403F] text-[#00403F] rounded-full block font-semibold active:text-white active:bg-[#00403F] active:border-2 active:border-[#b5e5e4]'>Learn More</button>
                </div>
                </div>
        </div>
      
    
  )
}

export default Card
