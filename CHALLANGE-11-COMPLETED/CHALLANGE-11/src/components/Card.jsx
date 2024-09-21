import React from 'react'

const Card = () => {
    return (
        <div className='min-h-screen w-full md:p-16 py-8 '>
            {/* TOP START */}
            <div className='space-y-3 p-4'>
                <h1 className='text-center text-3xl '>  Reliable, efficient delivery </h1>
                <h2 className='text-center text-3xl font-bold '>  Powered by Technology </h2>
                <div className='w-full'>
                    <p className='text-center md:w-[35%] mx-auto opacity-50 font-semibold'>Our Artificial Intelligence powered tools use millions of project data points
                        to ensure that your project is successful</p>
                </div>
            </div>
            {/* TOP END */}
            {/* FLEX START  */}
            <div className='flex items-center flex-col md:flex-row md:justify-evenly mt-4'>
            {/* CARD 1 START */}
                    <div className='shadow-2xl p-6 h-52 w-72 space-y-1 relative'>
                        <h3 className='font-bold'>Supervisor</h3>
                        <p className='text-sm font-semibold opacity-50'>Monitors activity to identify project roadblocks</p>
                        <img src="./images/icon-supervisor.svg" alt="" srcset="" className='absolute bottom-6 right-8' />
                    </div>
            {/* CARD 1 END */}
            <div className='flex flex-col justify-center items-center gap-6'>
             {/* CARD 2 START */}
             <div className='shadow-2xl p-6 h-52 w-72 space-y-1 relative'>
                        <h3 className='font-bold'>Karma</h3>
                        <p className='text-sm font-semibold opacity-50'>Scans our talent network to create the optimal team for your project
                        </p>
                        <img src="./images/icon-karma.svg" alt="" srcset="" className='absolute bottom-6 right-8' />
                    </div>
            {/* CARD 2 END */}

            {/* CARD 3 START */}
            <div className='shadow-2xl p-6 h-52 w-72 space-y-1 relative'>
                        <h3 className='font-bold'>Team Builder</h3>
                        <p className='text-sm font-semibold opacity-50'> Regularly evaluates our talent to ensure quality
                        </p>
                        <img src="./images/icon-team-builder.svg" alt="" srcset="" className='absolute bottom-6 right-8' />
                    </div>
            {/* CARD 3 END */}
            </div>
              {/* CARD 4 START */}
              <div className='shadow-2xl p-6 h-52 w-72 space-y-1 relative'>
                        <h3 className='font-bold'>Calculator</h3>
                        <p className='text-sm font-semibold opacity-50'>  Uses data from past projects to provide better delivery estimates
                        </p>
                        <img src="./images/icon-calculator.svg" alt="" srcset="" className='absolute bottom-6 right-8' />
                    </div>
            {/* CARD 4 END */}
            </div>
            {/* FLEX END */}
        </div>
    )
}

export default Card
