import React, { useEffect, useState } from 'react'

const Card = () => {
    const [width,setWidth] = useState(screen.width);
    useEffect(()=>{
        setWidth(screen.width)
    },[width])
    return (
        <div className='w-full h-screen bg-[#efe0d4] flex justify-center items-center'>
            {/* <img src='./desktop-preview.jpg'/> */}
            <div className=' xl:w-[40%] lg:w-[50%] md:w-[60%] grid md:grid-cols-2 rounded-xl'>
                <div className='bg-green-600 rounded-l-xl'>
                    <img src={width<450?"./image-product-mobile.jpg":"./image-product-desktop.jpg"} alt="" srcset="" className='rounded-l-xl' />
                </div>
                <div className=' px-8 py-3 rounded-r-xl space-y-4 bg-white lg:space-y-2 xl:space-y-1 2xl:space-y-4'>
                    <h3 className='uppercase text-black opacity-50 text-xl font-bold tracking-widest'>Perfume</h3>
                    <h1 className='lg:text-3xl xl:text-2xl 2xl:text-4xl text-xl font-bold text-black'>Gabrielle Essence Eau De Parfum</h1>
                    <p className='text-sm text-black font-bold opacity-30'>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.</p>
                        <div className='flex items-center gap-2 py-2'>
                            <h3 className='xl:text-2xl font-bold text-green-900 tracking-tighter text-xl 2xl:text-4xl'>$149.99</h3>
                            <p className='line-through tracking-tighter font-bold opacity-60'>$169.99</p>
                        </div>
                        <div className='flex'>
<button className='text-white font-semibold w-full text-xl p-2 bg-green-900 rounded-xl opacity-70 active:opacity-100'>Add to Cart</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card
