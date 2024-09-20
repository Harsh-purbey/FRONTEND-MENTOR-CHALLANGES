import React from 'react'

const Card = () => {
    return (
        <div className='min-h-screen w-full bg-no-repeat space-y-10 bg-contain py-5 md:p-10 ' style={{
            backgroundImage: `url(${'./images/bg-pattern-top-desktop.svg'}) , url(${'./images/bg-pattern-bottom-desktop.svg'})`,
            backgroundPosition: 'top left , bottom right'
        }}>
            <div className=' p-4'>
                <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center'>
                    <div className='space-y-8'>
                        <h1 className='text-5xl font-bold text-center md:text-left w-96 text-[#512453]' >10,000+ of our users love our products.</h1>
                        <p className=' md:w-[42%] text-center md:text-left text-[#512453] opacity-50 font-medium'>We only provide great products combined with excellent customer service.
                            See what our satisfied customers are saying about our services.</p>
                    </div>
                    <div className=' w-96 space-y-4 p-2'>
                        <div className='rounded-xl md:-translate-x-20 flex bg-[#f7e3f9] p-3 items-center gap-2'><p> ⭐ ⭐ ⭐ ⭐ ⭐ </p> <p className='text-sm font-bold text-[#512453]'>Rated 5 Stars in Reviews</p></div>
                        <div className='rounded-xl md:-translate-x-10 flex bg-[#f7e3f9]  p-3 items-center gap-2'><p> ⭐ ⭐ ⭐ ⭐ ⭐ </p> <p className='text-sm font-bold text-[#512453]'>Rated 5 Stars in Report Guru</p></div>
                        <div className='rounded-xl md:-translate-x-0 flex bg-[#f7e3f9] p-3 items-center gap-2'><p> ⭐ ⭐ ⭐ ⭐ ⭐ </p> <p className='text-sm font-bold text-[#512453]'>Rated 5 Stars in BestTech</p></div>
                    </div>
                </div>
            </div>
            {/* <img src="./design/desktop-design.jpg" alt="IMAGE" srcset="" /> */}
            <div className='grid p-2 md:grid-cols-3 md:place-items-center'>
                <div className='bg-[#512453] p-6 space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <img src='./images/image-colton.jpg' className='rounded-full w-10 h-10' />
                        <div>
                            <p className='font-semibold text-white text-sm'>Colton Smith
                            </p>
                            <p className='font-semibold text-[#924497] text-sm'> Verified Buyer
                            </p>
                        </div>
                    </div>
                    <p className='w-72 text-white '> "We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"</p>
                </div>
                <div className='bg-[#512453] p-8 space-y-6 translate-y-10'>
                    <div className='flex gap-4 items-center'>
                        <img src='./images/image-anne.jpg' className='rounded-full w-10 h-10' />
                        <div>
                            <p className='font-semibold text-white text-sm'>Irene Roberts
                            </p>
                            <p className='font-semibold text-[#924497] text-sm'>  Verified Buyer
                            </p>
                        </div>
                    </div>
                    <p className='w-72 text-white '> "Customer service is always excellent and very quick turn around. Completely
                    delighted with the simplicity of the purchase and the speed of delivery."</p>
                </div>
                <div className='bg-[#512453] p-6 space-y-6 translate-y-20'>
                    <div className='flex gap-4 items-center'>
                        <img src='./images/image-irene.jpg' className='rounded-full w-10 h-10' />
                        <div>
                            <p className='font-semibold text-white text-sm'>Anne Wallace
                            </p>
                            <p className='font-semibold text-[#924497] text-sm'>Verified Buyer</p>
                        </div>
                    </div>
                    <p className='w-72 text-white '> "Put an order with this company and can only praise them for the very high
                    standard. Will definitely use them again and recommend them to everyone!"
    Excellent!"</p>
                </div>
            </div>
        </div>
    )
}

export default Card
