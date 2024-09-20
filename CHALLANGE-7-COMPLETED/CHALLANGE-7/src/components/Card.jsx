import React from 'react'
// #0A0C1B
// #1C1938
// #9E5ECD
const Card = () => {
    return (
        <div className='min-h-screen py-10 px-2 w-full bg-[#0A0C1B] flex justify-center items-center'>
            <div className=' flex md:flex-row flex-col items-center justify-center'>
                <div className='bg-[#1C1938] p-8 w-80 h-96 md:w-96 md:h-[317px] flex flex-col justify-between order-2 md:order-1'>
                    <div className='space-y-4'>
                    <h1 className='text-3xl font-bold text-white'>Get <span className='text-[#9353c0]'>insights</span> that help your business grow.</h1>
                    <p className='text-white opacity-50'> Discover the benefits of data analytics and make better decisions regarding revenue, customer
                        experience, and overall efficiency.</p>
                        </div>
                         
   
   
                        <div className='flex justify-between items-center text-white pr-2'>
                            <div className='flex flex-col  justify-center items-center'>
                                <h3 className=' text-xl font-bold uppercase'>10k+</h3>
                                <p className='opacity-50 text-sm font-thin uppercase'>companies</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className=' text-xl font-bold uppercase'>314</h3>
                                <p className='opacity-50 text-sm font-thin uppercase'>templates</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className=' text-xl font-bold uppercase'>12m+</h3>
                                <p className='opacity-50 text-sm font-thin  uppercase'>queries</p>
                            </div>
                        </div>
                </div>
                <div className=' bg-contain bg-no-repeat w-80 h-[265px] md:w-96 md:h-[317px] order-1 md:order-2' style={{ backgroundImage: `url(${'./images/image-header-desktop.jpg'})` }}>
                    <div className='w-full h-full opacity-70 bg-[#3d0c60]'></div>
                </div>
            </div>
        </div>
    )
}

export default Card
