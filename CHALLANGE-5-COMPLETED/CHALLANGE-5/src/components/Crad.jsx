import React from 'react'
const Crad = () => {
    return (
        <div className='w-full py-16 min-h-screen bg-[#0D1A2D] flex justify-center items-center'>
            <div className=' bg-[#15273F] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] p-4 rounded-xl space-y-3 group'>
                <div className='w-full rounded-xl'>
                    <div className='rounded-xl w-full h-72 bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${'./image-equilibrium.jpg'})`}}>
                    <div className='rounded-xl w-full h-full flex justify-center items-center bg-transparent group-active:bg-[#12F6F5] group-active:opacity-65 '>
                     <img src="./icon-view.svg" alt="IMAGE" srcset="" className='w-10 h-10 ' />
                     </div>  
                    </div>
                </div>
                <h1 className='text-2xl font-semmibold text-white group-active:text-[#12F6F5]'>Equilibrium #3429</h1>
            <p className='text-white opacity-50'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='flex justify-between'>
                <div className='flex gap-2 justify-center items-center text-[#12F6F5]'><img src="icon-ethereum.svg" alt="IMAGE" srcset="" />
                <p>0.041 ETH</p>
                </div>
                <div className='flex gap-2 justify-center items-center text-[#7D98C5]'><img src="icon-clock.svg" alt="IMAGE" srcset="" />
                <p>3 days left</p>
                </div>
                 </div>
                 <hr className='opacity-50'/>
                 <div className='flex gap-5 items-center'>
                    <img src="./image-avatar.png" alt="IMAGE" srcset="" className='w-10 h-10 border border-white rounded-full' />
                    <p className='text-white group-active:text-[#12F6F5] '><span className='opacity-50 text-white group-active:text-white'>Creation of </span> Jules Wyvern</p>
                 </div>
            </div>

        </div>
    )
}

export default Crad
