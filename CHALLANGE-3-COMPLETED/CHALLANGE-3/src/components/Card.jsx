import React from 'react'
{/* 


 */}
const Card = () => {
  return (
    <div className='w-full h-screen bg-white md:flex justify-center items-center'>
      <div className=' bg-slate-50 md:w-[75%] xl:w-[45%] lg:w-[60%]  grid md:grid-cols-2 rounded-xl'>
        <div className='bg-gradient-to-b from-purple-700 via-indigo-500 to-indigo-700 rounded-b-xl md:rounded-xl py-12 px-8 space-y-6'>
          <h3 className='text-center text-xl text-white font-medium opacity-70'>Your Result</h3>
          <div className='flex justify-center items-center'>
            <div className='w-[150px] h-[150px] bg-gradient-to-b from-indigo-800 rounded-full flex text-white justify-center items-center flex-col'>
              <h1 className='text-6xl font-bold'>76</h1>
              <p className='opacity-50 font-bold'> of 100</p>
            </div>
          </div>
          <h2 className='text-4xl font-semibold text-center text-white'>Great</h2>
          <p className='text-white opacity-50 text-center text-xl font-thin'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className=' rounded-r-xl py-12 px-8 space-y-8  '>
          <h2 className='text-xl font-bold text-black'>Summary</h2>
          <div className='space-y-4 '>

            <div className='flex justify-between p-2 bg-[#f1dcdc] rounded-xl'>
              <div className='flex gap-4'>
                <img src="./icon-reaction.svg" alt="IMAGE" srcset="" />
                <p className='text-[#f93c3c]'>Reaction</p>

              </div>
              <p className='font-bold text-gray-400'><span className='font-bold text-blue-950'>80</span> / 100</p>


            </div>

            <div className='flex justify-between p-2 bg-[#f6ead4] rounded-xl' >
              <div className='flex gap-4'>
                <img src="./icon-memory.svg" alt="IMAGE" srcset="" />
                <p className='text-[#FFB21E]'>Memory</p>
              </div>
              <p className='font-bold text-gray-400'><span className='font-bold text-blue-950'>92</span> / 100</p>


            </div>

            <div className='flex justify-between p-2 rounded-xl bg-[#d8f4ee]'>
              <div className='flex gap-4'>
                <img src="./icon-verbal.svg" alt="IMAGE" srcset="" />
                <p className='text-[#00BB8F]'>Verbal</p>
              </div>
              <p className='font-bold text-gray-400'><span className='font-bold text-blue-950'>61</span> / 100</p>


            </div>

            <div className='flex justify-between p-2 rounded-xl bg-[#cfd3f2]'>
              <div className='flex gap-4'>
                <img src="./icon-visual.svg" alt="IMAGE" srcset="" />
                <p className='text-[#2E40DB]'>Visual</p>
              </div>

              <p className='font-bold text-gray-400'><span className='font-bold text-blue-950'>72</span> / 100</p>
            </div>

          </div>
          <div className='w-full flex'>
            <buttton className='bg-blue-950 w-full p-3 rounded-full text-center text-white font-bold opacity-90 cursor-pointer active:bg-gradient-to-r active:from-purple-700 active:to-indigo-700 active:via-indigo-500'>Continue</buttton>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
