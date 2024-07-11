"use client"
import React from 'react'
import Bubbles from './Bubbles'
import Image from 'next/image'
import hat from '../assets/image/Summer_advert_2-removebg-preview.png'

const SummerAd = () => {
  return (
    <div  className='relative '>
    <div className='h-[270px] md:h-[507px] border bg-[#006200] opacity-60 relative flex flex-col justify-between p-2 md:p-[16px] md:rounded-[24px] md:w-[90%] md:mx-auto mb-[24px]'>
        <h3 className=' font-semibold tracking-[4%] text-white w-[299px] md:w[511px] h-[54px] md:h-[120px] md:text-[25px] leading-[27px] md:leading-[60px]'>Our Curated Summer <br /> Collection</h3>
        <p className='w-[320px] pr-3 md:p-0  md:w-[623px] tracking-[4%] leading-[21px] md:leading-[40px] text-[14px] md:text-[24px] text-white'>
        Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.
        </p>
        <button className=' font-medium w-[90%] md:w-[280px] p-[10px] h-[44px] md:h-[62px] rounded-[8px] bg-white text-[#222222] md:text-[24px]'>Explore Now</button>
        
    <Bubbles/>
    </div>
    <Image src={hat} alt='Image of hat' className='hidden xl:block !opacity-100 absolute top-0 right-[4.75rem] w-[1300px] h-[507px] object-cover rounded-e-[24px]'/>
    </div>
  )
}

export default SummerAd