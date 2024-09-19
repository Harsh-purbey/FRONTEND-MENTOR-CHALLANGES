import React from 'react'
// 
// 
const Card = () => {
  return (
    // CONATAINER START
    <div className='bg-black w-full h-screen flex justify-center items-center p-4'>
        {/* CARD START */}
      <div className='p-8 bg-[#1F1F1F] rounded-xl max-w-[350px] space-y-5'>
        {/* IMAGE DIV */}
        <div className='flex justify-center items-center'>
        <img src="./avatar-jessica.jpeg" alt="IMAGE" className='rounded-full h-[90px] w-[90px]'/>
        </div> 
        <div>
        <h1 className='text-center text-2xl font-bold text-white'>Jessica Randall</h1>
        <p className='text-[#cbf160] font-bold text-center text-sm'>London, United Kingdom</p>
        </div>
        <div>
            <p className='text-center text-white opacity-50 text-sm '>"Front-end developer and avid reader."</p>
        </div>
        <div className='w-full space-y-3'>
            <button className='p-3 text-sm bg-[#333333] w-full text-white font-bold rounded-xl active:text-black active:bg-[#cbf160]'>GitHub</button>
            <button className='p-3  text-sm bg-[#333333] w-full text-white font-bold rounded-xl active:text-black active:bg-[#cbf160]'>Frontend Mentor</button>
            <button className='p-3 text-sm bg-[#333333] w-full text-white font-bold rounded-xl active:text-black active:bg-[#cbf160]'>LinkedIn</button>
            <button className='p-3 text-sm bg-[#333333] w-full text-white font-bold rounded-xl active:text-black active:bg-[#cbf160]'>Twitter</button>
            <button className='p-3 text-sm bg-[#333333] w-full text-white font-bold rounded-xl active:text-black active:bg-[#cbf160]'>Instagram</button>
        </div>
      </div> 
  
  
  
      {/* CARD END */}
    </div>
    // CONTAINER END
  )
}

export default Card
