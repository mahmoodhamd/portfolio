
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {TextGenerateEffect} from './ui/TextGenerateEffect'



function Hero() {
  return (
    
    <div className="pb-20 pt-36">Hero
    
    <div>
    <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className=" top-28 left-80  h-[80vh] w-[50vw]" fill="blue" /> 
    </div>
   
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center
    absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center
       dark:bg-black-100 bg-white 
       [mask-image:radial-gradient(ellipse_at_center,
       transparent_20%,black)]"/>
      
    </div>
    {/* adjust the margin vertical and  my z axis  */}
    <div className="flex justify-center relative my-19 z-10">
      <div className="max-w-[89vw] md:max-w-2xl
      lg:max-w-[60vw] flex flex-col items-center justify-center">
         <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
           Welcome to my portfolio
          </h2>
       
       <TextGenerateEffect
       
       className="text-center text-[40px]
       md:text-5xl lg:text-5xl"
        words="Transforming Concepts into Seamless User Experiences"
       />
       <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Hi, I&apos;m Zain Ajmal a Full-Stack web-developer based
        in Pakistan.
       </p>
      {/* added a custom color in a button same background color for button as a background color of our webiste */}
       <a href='#about' className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group bg-[rgb(0_3_25_/_var(--tw-bg-opacity))]">
       
        <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
         Share my Work
        </a>
       
     </div>
      </div>
      

    </div>
  
  )
}

export default Hero;
