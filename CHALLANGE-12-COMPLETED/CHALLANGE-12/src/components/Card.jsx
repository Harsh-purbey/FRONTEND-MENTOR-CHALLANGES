import React from 'react'
// 
// 
// 
// 
const Card = () => {
    return (
        <div className='min-h-screen w-full flex md:flex-row flex-col justify-center items-center p-4'>
            <div className=' md:w-1/2 md:h-1/2 '>
                <div className='grid md:grid-cols-2 md:grid-rows-2 w-full h-full shadow-2xl'>
                    <div className='md:col-span-2  px-4  py-8 md:p-12 space-y-4'>
                        <h1 className='text-[#47B0AD] text-3xl font-bold'>Join our community</h1>
                        <div className='space-y-2'>
                            <p className='text-[#CAE354] text-2xl font-bold'>30-day, hassle-free money back guarantee</p>
                            <p className='font-semibold opacity-50'>Gain access to our full library of tutorials along with expert code reviews.
                                Perfect for any developers who are serious about honing their skills.</p>
                        </div>
                    </div>
                    <div className='bg-[#2BB3B1] px-4 py-8 md:p-12 space-y-4'>
                        <h3 className='text-2xl font-bold text-white'>Monthly Subscription</h3>
                        <div className='flex items-center gap-4'><span className='text-3xl font-bold text-white '>$29 </span> <span className='opacity-50 font-semibold text-white'>per month</span></div>
                        <p className='font-semibold text-white opacity-80'>Full access for less than $1 a day</p>
                        <div className='flex'>
                            <button className='shadow-xl w-full rounded-sm p-2 bg-[#CAE354] text-white text-xl font-semibold'>Sign Up</button>
                        </div>
                    </div>
                    <div className='bg-[#4ABEBD] px-4 py-8 md:p-12 space-y-6'>
                        <h1 className='text-2xl font-semibold text-white'>
                            Why Us</h1>
                        <p className='font-semibold opacity-50 text-white'>  Tutorials by industry experts
                            Peer & expert code review
                            Coding exercises
                            Access to our GitHub repos
                            Community forum
                            Flashcard decks
                            New videos every week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
