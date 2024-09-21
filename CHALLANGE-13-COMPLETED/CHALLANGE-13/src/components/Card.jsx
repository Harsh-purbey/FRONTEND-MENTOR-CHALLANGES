import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Card = () => {
  return (
    <div className='w-full min-h-screen bg-no-repeat bg-contain bg-purple-700 p-8 flex flex-col justify-between space-y-4 md:space-y-0 ' style={{backgroundImage: `url(${'./images/bg-desktop.svg'})`}}>
     
      <div >
        <img src="./images/logo.svg" alt="" srcset="" />
        
      </div>
      <div className='flex  md:flex-row flex-col items-center md:gap-10'>
        <img src="./images/illustration-mockups.svg" alt="" srcset="" />
        <div className=' p-4 md:p-10 space-y-10'>
            <h1 className='text-5xl md:text-6xl font-bold text-white'>Build The Community Your Fans Will Love</h1>
            <p className='text-xl font-bold opacity-50 text-white '>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion. </p>
            <button className='p-2 px-10 rounded-full bg-white text-purple-400 font-semibold'>Register</button>
        </div>
      </div>
      <div className='flex justify-center sm:justify-end items-center'>
        <div className='flex gap-4 text-white '> 
            <BiLogoFacebook className='active:border-rose-500  active:text-rose-500 border-2 border-white rounded-full p-2 text-2xl box-content'/>
            <FaTwitter className='active:border-rose-500 active:text-rose-500 border-2 border-white rounded-full p-2 text-2xl box-content'/>
            <FaInstagram className='active:border-rose-500 active:text-rose-500 border-2 border-white rounded-full p-2 text-2xl box-content'/>
        </div>
      </div>
    </div>
  )
}

export default Card
