import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen bg-cover flex justify-center items-center p-4 '>
      <div className=' w-full sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]  rounded-xl shadow-2xl'>
        <div className='rounded-xl'>
            <img src='./images/illustration-hero.svg' alt='IMAGE' className='rounded-t-xl' />
        </div>
        <div className='p-8 bg-white rounded-b-xl space-y-4'>
                <h1 className='text-2xl font-bold text-center text-blue-950'>Order Summary</h1>
                <p className=' text-blue-950 opacity-70 text-center'>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p>

                <div className='flex justify-between items-center p-4 bg-blue-50 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <img src="./images/icon-music.svg" alt="IMAGES" srcset="" />
                        </div>
                        <div>
                            <p className='font-bold text-blue-950'>Annual Plan</p>
                            <p className='font-bold text-blue-950 opacity-50'>$59.99/year</p>
                        </div>
                    </div>
                    <div className='underline text-blue-600 font-semibold cursor-pointer active:no-underline '>Change</div>
                </div>

                <div className='flex'>
                        <button className='w-full p-3 rounded-xl bg-blue-800 font-bold text-white active:bg-blue-400'>Proceed to Payment</button>
                </div>

                <div className='flex'>
                        <button className='w-full p-1 font-bold text-blue-950 opacity-50 active:opacity-100'>Cancel Order</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Card
