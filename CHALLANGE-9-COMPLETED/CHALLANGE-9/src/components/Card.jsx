import React from 'react'

const Card = () => {
  return (
    <div className=' px-4 h-screen w-full bg-no-repeat bg-contain bg-[#42c7be] flex justify-center items-center ' style={{backgroundImage :`url(${'./images/bg-pattern-top.svg'}) ,url(${'./images/bg-pattern-bottom.svg'})`,
    backgroundPosition: 'left top, right bottom'}}>
      <div className=' shadow-2xl rounded-xl'>
        <div className='rounded-t-xl'>
        <img src='./images/bg-pattern-card.svg' className='rounded-t-xl'/>
        </div>
        <div className='bg-white rounded-b-xl'>
            <div className='py-2'>
            <div className='flex justify-center bg-red-500 relative '>
                <img src="./images/image-victor.jpg" alt="IMAGE" srcset="" className='absolute rounded-full border-2 border-full -translate-y-[50%] '/>
               
            </div>
            <div className='mt-[55px] px-8 rounded-b-xl space-y-2'>
                <h1 className='text-center text-xl font-semibold'> Victor Crest
                <span className='opacity-50'>26</span></h1>
                <p className='text-center opacity-50'>London</p>
            </div>
            <hr className='mt-4' />
            <div className='p-8 flex justify-between items-center'>
   
                <div>
                    <h1 className='font-bold text-xl text-center'>80K</h1>
                    <p className='opacity-50 text-center text-sm'>Followers</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-center'>803K</h1>
                    <p className='opacity-50 text-center text-sm'>Likes</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-center'>1.4K</h1>
                    <p className='opacity-50 text-center text-sm'>Photos</p>
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Card
